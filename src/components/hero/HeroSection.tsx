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
              A single platform to
            </span>
            <span className="block font-bold">
              <a href="#"className="font-bold text-[#7a6eb4]">manage</a> <a href="" className=" font-normal text-[#7A6FB0]">every part of</a>
            </span>
            {/* <span className="block font-bold text-[#7a6eb4]">
              manage
            </span> */}
            {/* <span className="block font-normal text-[#7A6FB0]">
              every part of your
            </span> */}

            <span className="block font-bold">
              <a href="#"className="font-normal text-[#7A6FB0]">your</a> <a href="" className=" font-bold text-[#7a6eb4]">legal work</a>
            </span>

            
          </h1>

          <p className="mt-[22px] text-[18px] leading-[1.65] text-[#262ccf] max-w-[400px]">
            Track matters, coordinate schedules, manage clients,
            centralize documents, and handle communication – all in one system.
          </p>
        </div>

        {/* FLOATING CARDS (DESKTOP) */}
        <div className="absolute inset-0 hidden lg:block pointer-events-none top-14">

          {/* BILLING */}
          <div className="absolute top-[250px] right-[30px]">
            <FloatingCard
              size="billing"
              rotation={14}
              icon={Receipt}
              label="Billing"
            />
          </div>

          {/* MATTERS */}
          <div className="absolute top-[400px] left-[-50px]">
            <FloatingCard
              size="matters"
              rotation={-10}
              icon={Gavel}
              label="Matters"
            />
          </div>

          {/* PORTAL */}
          <div className="absolute top-[350px] left-[450px]">
            <FloatingCard
              variant="portal"
              rotation={2}
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
          <div className="absolute top-[510px] right-[-300px]">
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