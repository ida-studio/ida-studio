import { useEffect, useRef } from "react";

type Props = {
  backgroundHex?: string;
  inkHex?: string;
  vignette?: boolean;
};

type Node = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Synapse = {
  a: Node;
  b: Node;
  life: number;
  seed: number;
};

export default function AirSynapseBG({
  backgroundHex = "#fbfbfb", // ✅ fondo general de la home
  inkHex = "#000000",
  vignette = false,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const NODE_COUNT = 42;
    const MAX_CONN_DIST = 180;
    const CONNECTION_PROB = 0.8;
    const BASE_SPEED = 0.11;
    const SECONDARY = "#ded9da";
    const SINAPSIS_MAX_DIST = 120;

    const pairKey = (aId: number, bId: number) =>
      aId < bId ? `${aId}-${bId}` : `${bId}-${aId}`;

    const hash01 = (s: string) => {
      let h = 2166136261;
      for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619);
      }
      return (h >>> 0) / 4294967295;
    };

    const stableOffset = (a: Node, b: Node) => {
      const r = hash01(pairKey(a.id, b.id));
      return (r - 0.5) * 26;
    };

    const nodes: Node[] = Array.from({ length: NODE_COUNT }).map((_, i) => ({
      id: i,
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * BASE_SPEED,
      vy: (Math.random() - 0.5) * BASE_SPEED,
    }));

    let synapses: Synapse[] = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const drawCurved = (
      a: Node,
      b: Node,
      color: string,
      width: number,
      alpha: number,
      extraOffset = 0
    ) => {
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const off = stableOffset(a, b) + extraOffset;

      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = width;

      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.quadraticCurveTo(mx + off, my + off, b.x, b.y);
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const slowWave = (seed: number, t: number) =>
      Math.sin(t * 0.0006 + seed) * 5;

    const pickNearbyPartner = (a: Node) => {
      const nearby = nodes
        .map((b) => ({ b, d: Math.hypot(a.x - b.x, a.y - b.y) }))
        .filter(({ b, d }) => b !== a && d > 20 && d < SINAPSIS_MAX_DIST)
        .sort((x, y) => x.d - y.d)
        .slice(0, 10);

      if (!nearby.length) return null;
      return nearby[Math.floor(Math.random() * nearby.length)].b;
    };

    let raf = 0;
    const loop = (t: number) => {
      ctx.fillStyle = backgroundHex;
      ctx.fillRect(0, 0, w, h);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      });

      // CONEXIONES
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (hash01(pairKey(i, j)) > CONNECTION_PROB) continue;

          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);

          if (d < MAX_CONN_DIST) {
            const alpha = 0.14 * (1 - d / MAX_CONN_DIST);
            drawCurved(a, b, inkHex, 0.6, alpha);
          }
        }
      }

      // SINAPSIS (eventos)
      if (Math.random() < 0.018) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        const b = pickNearbyPartner(a);
        if (b) synapses.push({ a, b, life: 1, seed: Math.random() * Math.PI * 2 });
      }

      synapses = synapses.filter((s) => s.life > 0);
      synapses.forEach((s) => {
        drawCurved(s.a, s.b, SECONDARY, 1.4, s.life, slowWave(s.seed, t));
        s.life -= 0.035;
      });

      // PUNTOS
      nodes.forEach((n) => {
        ctx.fillStyle = inkHex;
        ctx.globalAlpha = 0.35;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [backgroundHex, inkHex, vignette]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
