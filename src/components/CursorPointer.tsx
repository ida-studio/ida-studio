import { useEffect, useRef } from "react";

export default function CursorPointer() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let x = -100;
    let y = -100;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;

      if (!raf) {
        raf = requestAnimationFrame(() => {
          // Offset para que quede ligeramente a la derecha del punto real del mouse
          el.style.transform = `translate3d(${x + 6}px, ${y + 2}px, 0)`;
          raf = 0;
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-pointer" aria-hidden="true" />;
}
