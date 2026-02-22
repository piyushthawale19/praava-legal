"use client";

import Image from "next/image";
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
  }
> = {
  billing: {
    width: 500,
    height: 80,
    paddingX: 28,
    borderRadius: 60,
    background: "linear-gradient(90deg,#4F46E5,#3B82F6)",
    shadow: "0 20px 40px rgba(79,70,229,0.25)",
  },
  matters: {
    width: 450,
    height: 75,
    paddingX: 24,
    borderRadius: 60,
    background: "linear-gradient(90deg,#F97316,#EA580C)",
    shadow: "0 20px 40px rgba(249, 115, 22, 0.25)",
  },
  tasks: {
    width: 500,
    height: 70,
    paddingX: 22,
    borderRadius: 60,
    background: "#2E1A47",
    shadow: "0 20px 40px rgba(46, 26, 71, 0.35)",
  },
  documents: {
    width: 550,
    height: 70,
    paddingX: 22,
    borderRadius: 60,
    background: "#3C2A5D",
    shadow: "0 20px 40px rgba(60, 42, 93, 0.35)",
  },
};

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

export function FloatingCard(props: FloatingCardProps) {
  if ("variant" in props && props.variant === "portal") {
    const { rotation, avatarSrc, title, message, meta, className = "", style } = props;
    return (
      <div
        className={`flex items-center gap-[12px] rounded-[40px] bg-[#DEDCF4] px-[14px] py-[12px] text-[#1F1F1F] shadow-[0_12px_30px_rgba(140,120,180,0.2)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_32px_-4px_rgba(140,120,180,0.3)] dark:bg-[#3d3552] dark:text-[#e0ddf0] dark:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.3)] ${className}`}
        style={{
          width: 400,
          minHeight: 90,
          transform: `rotate(${rotation}deg)`,
          ...style,
        }}
      >
        {/* Avatar with orange left accent */}
        <div className="relative shrink-0">
          <div className="absolute -left-[6px] top-[2px] bottom-[2px] w-[3px] rounded-full bg-[#F97316]" />
          <Image
            src={avatarSrc}
            alt=""
            width={42}
            height={42}
            className="h-[42px] w-[42px] shrink-0 rounded-full object-cover bg-[#999]"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-bold text-[#2D2A3E]">{title}</p>
          <p className="truncate text-[11px] text-[#6D6A7E] leading-[1.4] dark:text-[#9a98b0]">
            {message}
          </p>
          <p className="mt-[2px] text-[11px] font-semibold text-[#F97316] dark:text-[#F97316]">
            {meta}
          </p>
        </div>
      </div>
    );
  }

  const { size, rotation, icon: Icon, label, className = "", style } = props as PillProps;
  const s = PILL_STYLES[size];

  return (
    <div
      className={`flex items-center justify-center gap-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg ${className}`}
      style={{
        width: s.width,
        height: s.height,
        paddingLeft: s.paddingX,
        paddingRight: s.paddingX,
        borderRadius: s.borderRadius,
        background: s.background,
        boxShadow: s.shadow,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
      <span>{label}</span>
    </div>
  );
}
