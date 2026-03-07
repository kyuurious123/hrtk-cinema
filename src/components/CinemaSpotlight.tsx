import { useEffect, useRef, useState, useCallback } from "react";

interface Spot {
  cx: number;
  cy: number;
  rx?: number; // 조명 가로 크기 (기본 0.14)
  ry?: number; // 조명 세로 크기 (기본 0.13)
}

// 데스크탑용 조명 설정
const spot: Spot = { cx: 0.545, cy: 0.56 }

// 모바일용 조명 설정 (좌표/크기 별도 지정 가능)
const spotMobile: Spot = { cx: 0.68, cy: 0.59, rx: 0.42, ry: 0.2 };

interface CinemaSpotlightProps {
  imageSrc: string;
  mobileImageSrc?: string; // 모바일용 이미지 (선택)
  titleSrc?: string; // 타이틀 이미지 (선택)
  topTitleSrc?: string;
}

export default function CinemaSpotlight({ imageSrc, mobileImageSrc, titleSrc, topTitleSrc }: CinemaSpotlightProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const progressRef = useRef<number>(0);
  const [labelVisible, setLabelVisible] = useState(false);


function resizeCanvas() {
  const canvas = canvasRef.current;
  const wrapper = wrapperRef.current;
  const img = imgRef.current;
  if (!canvas || !wrapper || !img) return;
  canvas.width  = wrapper.clientWidth;
  canvas.height = Math.round(wrapper.clientWidth * (img.naturalHeight / img.naturalWidth));
}

  function drawFrame(progress: number): void {
    const canvas = canvasRef.current;
    if (!canvas || !imgRef.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    progressRef.current = progress;

    ctx.drawImage(imgRef.current, 0, 0, W, H);

    const off = document.createElement("canvas");
    off.width = W;
    off.height = H;
    const octx = off.getContext("2d");
    if (!octx) return;

    octx.fillStyle = "rgba(0,0,0,0.8)";  // 그대로
    octx.fillRect(0, 0, W, H);

    octx.globalCompositeOperation = "destination-out";

    const isMobile = W < 768;
    const activeSpot = isMobile ? spotMobile : spot;
    const cx = activeSpot.cx * W;
    const cy = activeSpot.cy * H;
    const rx = (activeSpot.rx ?? 0.14) * W;
    const ry = (activeSpot.ry ?? 0.13) * H;

    octx.save();
    octx.translate(cx, cy);
    octx.scale(rx, ry);

    const grad = octx.createRadialGradient(0, 0, 0, 0, 0, 1);
    grad.addColorStop(0,    `rgba(0,0,0,${progress})`);
    grad.addColorStop(0.55, `rgba(0,0,0,${progress})`);
    grad.addColorStop(0.85, `rgba(0,0,0,${progress * 0.25})`);
    grad.addColorStop(1,    "rgba(0,0,0,0)");

    octx.fillStyle = grad;
    octx.beginPath();
    octx.arc(0, 0, 1, 0, Math.PI * 2);
    octx.fill();
    octx.restore();

    ctx.drawImage(off, 0, 0);
  }

  function animate(ts: number): void {
    if (!startTimeRef.current) startTimeRef.current = ts;
    const progress = Math.min((ts - startTimeRef.current) / 1400, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    drawFrame(eased);
    if (progress < 1) {
      animFrameRef.current = requestAnimationFrame(animate);
    } else {
      setLabelVisible(true);
    }
  }

  function triggerSpotlight(): void {
    startTimeRef.current = null;
    setTimeout(() => {
      animFrameRef.current = requestAnimationFrame(animate);
    }, 300);
  }

  const handleResize = useCallback(() => {
    resizeCanvas();
    drawFrame(progressRef.current);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const img = new Image();
    img.src = (isMobile && mobileImageSrc) ? mobileImageSrc : imageSrc;
    img.onload = () => {
      imgRef.current = img;
      resizeCanvas();
      drawFrame(0);
      triggerSpotlight();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [imageSrc]);

  return (
    <div
      ref={wrapperRef}
      className="mb-24"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#000"
      }}
    >
      {topTitleSrc && (
        <img
          src={topTitleSrc}
          alt="title"
          className="absolute left-1/2 -translate-x-1/2 md:w-[50%] md:m-auto w-full pointer-events-none select-none transition-opacity duration-[300ms] delay-10"
          style={{
            opacity: labelVisible ? 1 : 0,
          }}
        />
      )}

      <canvas
        ref={canvasRef}
        className="block mx-auto w-full max-w-[1920px] md:m-auto mb-2"
      />

      {/* 좌우 페이드 overlay — 이미지 경계를 자연스럽게 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 20%),
            linear-gradient(to left,  rgba(0,0,0,0.2) 0%, transparent 20%)
          `,
          pointerEvents: "none",
        }}
      />

      {titleSrc && (
        <img
          src={titleSrc}
          alt="title"
          className="md:w-[40%] md:m-auto w-full pointer-events-none select-none transition-opacity duration-[300ms] delay-10"
          style={{
            opacity: labelVisible ? 1 : 0,
          }}
        />
      )}

      {/* 타이핑 티커
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "12px 16px",
        minHeight: "42px",
      }}>
        <span style={{
          fontSize: "clamp(10px, 1.1vw, 12px)",
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.35)",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
        }}>
          {typedText}
          <span style={{
            display: "inline-block",
            width: "1px",
            height: "0.9em",
            background: "rgba(255,255,255,0.4)",
            marginLeft: "2px",
            verticalAlign: "middle",
            animation: "blink 1s step-end infinite",
          }} />
        </span>
        <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
      </div> */}

    </div>
  );
}