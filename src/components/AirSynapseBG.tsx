import { useEffect, useRef } from "react";

type Props = {
  backgroundHex?: string;
  inkHex?: string;
  vignette?: boolean;
};

function quadPoint(
  ax: number, ay: number,
  cx: number, cy: number,
  bx: number, by: number,
  t: number
) {
  const mt = 1 - t;
  return {
    x: mt * mt * ax + 2 * mt * t * cx + t * t * bx,
    y: mt * mt * ay + 2 * mt * t * cy + t * t * by,
  };
}

type Node = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  flashTimer: number;
  flashDuration: number;
  flashNext: number;
};

type Signal = {
  i: number;
  j: number;
  progress: number;
  speed: number;
  tailLength: number;
};

export default function AirSynapseBG({
  backgroundHex = "#ffffff",
  vignette = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0;

    const NODE_COUNT = 62;
    const MAX_DIST = 150;
    const SPEED = 0.05;

    function resize() {
      const r = window.devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * r;
      canvas.height = H * r;
      ctx.scale(r, r);
    }
    resize();

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: 0.7 + Math.random() * 0.8,
      flashTimer: 0,
      flashDuration: 0,
      flashNext: 1000 + Math.random() * 9000,
    }));

    const signals: Signal[] = [];
    let signalNext = 800 + Math.random() * 1200;

    let lastT = 0;
    let raf = 0;

    function loop(ts: number) {
      const dt = Math.min(ts - lastT, 32);
      lastT = ts;

      ctx.fillStyle = backgroundHex;
      ctx.fillRect(0, 0, W, H);

      // Mover nodos + actualizar destellos
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -10) n.x = W + 10;
        if (n.x > W + 10) n.x = -10;
        if (n.y < -10) n.y = H + 10;
        if (n.y > H + 10) n.y = -10;

        n.flashNext -= dt;
        if (n.flashNext <= 0 && n.flashDuration <= 0) {
          n.flashDuration = 800 + Math.random() * 1000;
          n.flashTimer = 0.001;
          n.flashNext = 3000 + Math.random() * 10000;
        }
        if (n.flashDuration > 0) {
          n.flashTimer += dt;
          if (n.flashTimer >= n.flashDuration) {
            n.flashTimer = 0;
            n.flashDuration = 0;
          }
        }
      });

      // Lanzar nueva señal
      signalNext -= dt;
      if (signalNext <= 0) {
        const candidates: [number, number][] = [];
        for (let i = 0; i < nodes.length; i++)
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST)
              candidates.push([i, j]);
          }
        if (candidates.length) {
          const [i, j] =
            candidates[Math.floor(Math.random() * candidates.length)];
          signals.push({
            i, j,
            progress: 0,
            speed: 0.00045 + Math.random() * 0.0004,
            tailLength: 0.18 + Math.random() * 0.18,
          });
        }
        signalNext = 600 + Math.random() * 1000;
      }

      // Líneas base — grosor uniforme
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d >= MAX_DIST) continue;

          const distFade = 1 - d / MAX_DIST;
          ctx.strokeStyle = `rgba(110,95,100,${0.11 * distFade})`;
          ctx.lineWidth = 0.5;

          const mx = (a.x + b.x) / 2 + Math.sin(a.id + b.id) * 9;
          const my = (a.y + b.y) / 2 + Math.cos((a.id * 3 + b.id) * 0.4) * 9;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.quadraticCurveTo(mx, my, b.x, b.y);
          ctx.stroke();
        }
      }

      // Señales viajando de nodo a nodo
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed * dt;
        if (sig.progress > 1 + sig.tailLength) {
          signals.splice(s, 1);
          continue;
        }

        const a = nodes[sig.i], b = nodes[sig.j];
        const dx = a.x - b.x, dy = a.y - b.y;
        if (Math.sqrt(dx * dx + dy * dy) >= MAX_DIST) {
          signals.splice(s, 1);
          continue;
        }

        const mx = (a.x + b.x) / 2 + Math.sin(a.id + b.id) * 9;
        const my = (a.y + b.y) / 2 + Math.cos((a.id * 3 + b.id) * 0.4) * 9;

        const steps = 28;
        const tHead = Math.min(sig.progress, 1);
        const tTail = Math.max(sig.progress - sig.tailLength, 0);

        for (let k = 0; k < steps; k++) {
          const t0 = tTail + (tHead - tTail) * (k / steps);
          const t1 = tTail + (tHead - tTail) * ((k + 1) / steps);
          const relPos = (k + 1) / steps;

          const p0 = quadPoint(a.x, a.y, mx, my, b.x, b.y, t0);
          const p1 = quadPoint(a.x, a.y, mx, my, b.x, b.y, t1);

          ctx.strokeStyle = `rgba(100,80,90,${relPos * relPos * 0.55})`;
          ctx.lineWidth = 0.5 + relPos * 0.8;
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.stroke();
        }
      }

      // Nodos — solo halo suave, sin rayos
      nodes.forEach((n) => {
        const p =
          n.flashDuration > 0
            ? Math.sin(Math.PI * n.flashTimer / n.flashDuration)
            : 0;

        if (p > 0.05) {
          const haloR = n.r + 10 * p;
          const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, haloR);
          g.addColorStop(0, `rgba(110,90,100,${0.18 * p})`);
          g.addColorStop(0.5, `rgba(110,90,100,${0.07 * p})`);
          g.addColorStop(1, "rgba(110,90,100,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(n.x, n.y, haloR, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(110,95,100,${0.2 + p * 0.3})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + p * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Vignette perimetral suave
      if (vignette) {
        const vg = ctx.createRadialGradient(W / 2, H / 2, H * 0.2, W / 2, H / 2, H * 0.88);
        vg.addColorStop(0, "rgba(255,255,255,0)");
        vg.addColorStop(1, "rgba(255,255,255,0.5)");
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, W, H);
      }

      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [backgroundHex, vignette]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
