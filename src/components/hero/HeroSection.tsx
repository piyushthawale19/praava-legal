"use client";

import {
  FileText,
  Gavel,
  CheckSquare,
  Receipt,
} from "lucide-react";
import { BlobBackground } from "./BlobBackground";
import { FloatingCard } from "./FloatingCard";

const PORTAL_AVATAR =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[700px] overflow-hidden bg-[#F4F5F9] dark:bg-[#0D0D15]">

      {/* BACKGROUND BARS */}
      <BlobBackground />

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* HERO TEXT */}
        <div className="absolute  left-[-160px] w-[560px] hidden lg:block">
          <h1 className="text-[56px] leading-[1.08] tracking-[-0.5px] font-medium text-[#6B5CA5]">
            <span className="block font-normal text-[#7A6FB0]">
              <span className="animate-word animate-word-d1">A</span>{" "}
              <span className="animate-word animate-word-d2">single</span>{" "}
              <span className="animate-word animate-word-d3">platform</span>{" "}
              <span className="animate-word animate-word-d4">to</span>
            </span>
            <span className="block font-bold">
              <span className="animate-word animate-word-d5 font-bold text-[#7a6eb4]">manage</span>{" "}
              <span className="animate-word animate-word-d6 font-normal text-[#7A6FB0]">every</span>{" "}
              <span className="animate-word animate-word-d7 font-normal text-[#7A6FB0]">part of</span>
            </span>
            <span className="block font-bold">
              <span className="animate-word animate-word-d8 font-normal text-[#7A6FB0]">your</span>{" "}
              <span className="animate-word animate-word-d9 font-bold text-[#7a6eb4]">legal work</span>
            </span>
          </h1>

          <p className="mt-[22px] text-[18px] leading-[1.65] text-[#262ccf] max-w-[400px]">
            <span className="animate-word animate-word-d10">Track matters,</span>{" "}
            <span className="animate-word animate-word-d11">coordinate schedules,</span>{" "}
            <span className="animate-word animate-word-d12">manage clients,</span>{" "}
            <span className="animate-word animate-word-d13">centralize documents,</span>{" "}
            <span className="animate-word animate-word-d14">and handle communication</span>{" "}
            <span className="animate-word animate-word-d15">– all in one system.</span>
          </p>
        </div>

        {/* FLOATING CARDS (DESKTOP) */}
        <div className="absolute inset-0 hidden lg:block pointer-events-none top-14">

          {/* BILLING */}
          <div className="absolute top-[230px] right-[100px]">
            <FloatingCard
              size="billing"
              rotation={14}
              icon={Receipt}
              label="Billing"
            />
          </div>

          {/* MATTERS */}
          <div className="absolute top-[350px] left-[-0px]">
            <FloatingCard
              size="matters"
              rotation={-18}
              icon={Gavel}
              label="Matters"
            />
          </div>

          {/* PORTAL */}
          <div className="absolute top-[400px] left-[450px]">
            <FloatingCard
              variant="portal"
              rotation={3}
              avatarSrc={PORTAL_AVATAR}
              title="John Doe - Portal"
              message="Hey! Could you please review..."
              meta="MAT-2233 - 2h ago"
            />
          </div>

          {/* TASKS */}
          <div className="absolute top-[520px] left-[200px]">
            <FloatingCard
              size="tasks"
              rotation={0}
              icon={CheckSquare}
              label="Tasks"
            />
          </div>

          {/* DOCUMENTS */}
          <div className="absolute top-[510px] right-[-200px]">
            <FloatingCard
              size="documents"
              rotation={-11}
              icon={FileText}
              label="Documents"
            />
          </div>

        </div>

      </div>
    </section>
  );
}