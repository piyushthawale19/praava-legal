"use client";

import Image from "next/image";
import { useRef, useCallback, type MouseEvent as ReactMouseEvent } from "react";
import { type LucideIcon } from "lucide-react";

type PillSize = "billing" | "matters" | "tasks" | "documents";

const PILL_STYLES: Record<
  PillSize,
  {
    width: number;
    height: number;
    paddingX: number;
    borderRadius: number;
    background: string;
    shadow?: string;
    glowColor: string;
  }
> = {
  billing: {
    width: 500,
    height: 80,
    paddingX: 28,
    borderRadius: 60,
    background: "linear-gradient(90deg,#4F46E5,#3B82F6)",
    shadow: "0 20px 40px rgba(79,70,229,0.25)",
    glowColor: "79,70,229",
  },
  matters: {
    width: 450,
    height: 75,
    paddingX: 24,
    borderRadius: 60,
    background: "linear-gradient(90deg,#F97316,#EA580C)",
    shadow: "0 20px 40px rgba(249, 115, 22, 0.25)",
    glowColor: "249,115,22",
  },
  tasks: {
    width: 500,
    height: 70,
    paddingX: 22,
    borderRadius: 60,
    background: "#2E1A47",
    shadow: "0 20px 40px rgba(46, 26, 71, 0.35)",
    glowColor: "120,80,200",
  },
  documents: {
    width: 550,
    height: 70,
    paddingX: 22,
    borderRadius: 60,
    background: "#3C2A5D",
    shadow: "0 20px 40px rgba(60, 42, 93, 0.35)",
    glowColor: "130,90,210",
  },
};

/* ── shared 3-D tilt logic ─────────────────────────────────── */
function useTilt(rotation: number, maxTilt = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const rafId = useRef(0);

  const handleMove = useCallback(
    (e: ReactMouseEvent) => {
      const el = ref.current;
      if (!el) return;
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;   // 0‥1
        const y = (e.clientY - rect.top) / rect.height;    // 0‥1
        const tiltX = (y - 0.5) * -maxTilt;                // up/down
        const tiltY = (x - 0.5) * maxTilt;                 // left/right
        el.style.transform = `perspective(600px) rotate(${rotation * 0.3}deg) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px) scale(1.05)`;
      });
    },
    [rotation, maxTilt]
  );

  const handleEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.15s ease-out, box-shadow 0.4s ease, filter 0.4s ease";
  }, []);

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(rafId.current);
    el.style.transition = "transform 0.5s cubic-bezier(.2,.9,.3,1), box-shadow 0.5s ease, filter 0.5s ease";
    el.style.transform = `perspective(600px) rotate(${rotation}deg) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
  }, [rotation]);

  return { ref, handleMove, handleEnter, handleLeave };
}

/* ── types ─────────────────────────────────────────────────── */
interface PillProps {
  size: PillSize;
  rotation: number;
  icon: LucideIcon;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

interface PortalProps {
  variant: "portal";
  rotation: number;
  avatarSrc: string;
  title: string;
  message: string;
  meta: string;
  className?: string;
  style?: React.CSSProperties;
}

type FloatingCardProps = PillProps | PortalProps;

/* ── component ─────────────────────────────────────────────── */
export function FloatingCard(props: FloatingCardProps) {
  const isPortal = "variant" in props && props.variant === "portal";
  const rotation = isPortal ? (props as PortalProps).rotation : (props as PillProps).rotation;
  const { ref, handleMove, handleEnter, handleLeave } = useTilt(rotation);

  /* ── Portal card ──────────────────────────────────────────── */
  if (isPortal) {
    const { avatarSrc, title, message, meta, className = "", style } = props as PortalProps;

    return (
      <div
        ref={ref}
        className={`floating-card pointer-events-auto cursor-pointer flex items-center gap-[12px] rounded-[40px] bg-[#938ce2] px-[14px] py-[12px] text-[#1F1F1F] dark:bg-[#3d3552] dark:text-[#e0ddf0] ${className}`}
        style={{
          width: 500,
          minHeight: 90,
          transform: `perspective(600px) rotate(${rotation}deg)`,
          boxShadow: "0 12px 30px rgba(140,120,180,0.2)",
          transition: "transform 0.5s cubic-bezier(.2,.9,.3,1), box-shadow 0.5s ease, filter 0.5s ease",
          willChange: "transform, box-shadow",
          ...style,
        }}
        onMouseMove={handleMove}
        onMouseEnter={(e) => {
          handleEnter();
          e.currentTarget.style.boxShadow = "0 30px 60px rgba(140,120,180,0.45), 0 0 40px rgba(140,120,180,0.25)";
          e.currentTarget.style.filter = "brightness(1.12)";
        }}
        onMouseLeave={(e) => {
          handleLeave();
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(140,120,180,0.2)";
          e.currentTarget.style.filter = "brightness(1)";
        }}
      >
        {/* shimmer overlay */}
        <div className="shimmer-overlay" />

        {/* Avatar with orange left accent */}
        <div className="relative shrink-0 pl-[6px]">
          <div className="absolute left-0 top-[2px] bottom-[2px] w-[3px] rounded-full bg-[#F97316]" />
          <Image
            src={avatarSrc}
            alt=""
            width={42}
            height={42}
            className="ml-[8px] h-[42px] w-[42px] shrink-0 rounded-full object-cover bg-[#999]"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-bold text-[#2D2A3E]">{title}</p>
          <p className="truncate text-[11px] text-[#6D6A7E] leading-[1.4] dark:text-[#9a98b0]">
            {message}
          </p>
          <p className="mt-[2px] text-[11px] font-semibold text-[#756de0] dark:text-[#818ce9]">
            {meta}
          </p>
        </div>
      </div>
    );
  }

  /* ── Pill cards ───────────────────────────────────────────── */
  const { size, icon: Icon, label, className = "", style } = props as PillProps;
  const s = PILL_STYLES[size];

  return (
    <div
      ref={ref}
      className={`floating-card pointer-events-auto cursor-pointer flex items-center justify-center gap-3 text-base font-semibold text-white ${className}`}
      style={{
        width: s.width,
        height: s.height,
        paddingLeft: s.paddingX,
        paddingRight: s.paddingX,
        borderRadius: s.borderRadius,
        background: s.background,
        boxShadow: s.shadow,
        transform: `perspective(600px) rotate(${rotation}deg)`,
        transition: "transform 0.5s cubic-bezier(.2,.9,.3,1), box-shadow 0.5s ease, filter 0.5s ease",
        willChange: "transform, box-shadow",
        ...style,
      }}
      onMouseMove={handleMove}
      onMouseEnter={(e) => {
        handleEnter();
        e.currentTarget.style.boxShadow = `0 30px 60px rgba(${s.glowColor},0.5), 0 0 50px rgba(${s.glowColor},0.3)`;
        e.currentTarget.style.filter = "brightness(1.2)";
      }}
      onMouseLeave={(e) => {
        handleLeave();
        e.currentTarget.style.boxShadow = s.shadow ?? "";
        e.currentTarget.style.filter = "brightness(1)";
      }}
    >
      {/* shimmer overlay */}
      <div className="shimmer-overlay" />

      <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
      <span>{label}</span>
    </div>
  );
}
