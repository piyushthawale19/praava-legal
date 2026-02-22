"use client";

export function BlobBackground() {
  return (
    <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none">

      {/* LEFT SIDE BARS */}

      <div
        className="absolute rounded-[100px] bg-[#E6E8F5] opacity-70"
        style={{
          top:350,
          left: "-220px",
          width: 380,
          height: 90,
          transform: "rotate(-10deg)",
        }}
      />

      <div
        className="absolute rounded-[100px] bg-[#E6E8F5] opacity-60"
        style={{
          top: 460,
          left: "-200px",
          width: 430,
          height: 90,
          // transform: "rotate(-8deg)",
        }}
      />

      <div
        className="absolute rounded-[100px] bg-[#E6E8F5] opacity-65"
        style={{
          top: 580,
          left: "-240px",
          width: 650,
          height: 90,
          // transform: "rotate(-12deg)",
        }}
      />

      {/* RIGHT SIDE BARS */}

      <div
        className="absolute rounded-[100px] bg-[#E6E8F5] opacity-70"
        style={{
          top: 110,
          right: "-220px",
          width: 550,
          height: 90,
          // transform: "rotate(10deg)",
        }}
      />

      <div
        className="absolute rounded-[100px] bg-[#E6E8F5] opacity-60"
        style={{
          top: 220,
          right: "-200px",
          width: 650,
          height: 90,
          // transform: "rotate(8deg)",
        }}
      />

      <div
        className="absolute rounded-[100px] bg-[#E6E8F5] opacity-65"
        style={{
          top: 330,
          right: "-240px",
          width: 550,
          height: 90,
          // transform: "rotate(12deg)",
        }}
      />

    </div>
  );
}