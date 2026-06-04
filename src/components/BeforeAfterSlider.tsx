import { useRef, useState, useCallback, useEffect } from "react";

interface Props {
  before: string;
  after: string;
  className?: string;
}

export function BeforeAfterSlider({ before, after, className = "" }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromEvent = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      let cx = 0;
      if ("touches" in e) {
        if (e.touches.length > 0) {
          cx = e.touches[0].clientX;
        } else {
          return;
        }
      } else {
        cx = e.clientX;
      }
      updateFromEvent(cx);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [updateFromEvent]);

  return (
    <div
      ref={ref}
      className={`relative select-none overflow-hidden rounded-2xl border border-border shadow-elegant ${className}`}
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromEvent(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        updateFromEvent(e.touches[0].clientX);
      }}
    >
      <img src={before} alt="Before" className="block w-full h-auto" draggable={false} />
      <div className="absolute inset-0 checkerboard" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <img src={after} alt="After" className="block w-full h-auto" draggable={false} />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-glow pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-glow flex items-center justify-center">
          <div className="text-primary text-xs font-bold">⇆</div>
        </div>
      </div>
      <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/60 text-white text-xs font-medium">
        Before
      </div>
      <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-gradient-brand text-white text-xs font-medium">
        After
      </div>
    </div>
  );
}
