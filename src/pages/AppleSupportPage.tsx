"use client";
import React from "react";

const devices = [
  { name: "iPhone", icon: "📱" },
  { name: "Mac", icon: "💻" },
  { name: "iPad", icon: "📲" },
  { name: "Watch", icon: "⌚" },
  { name: "AirPods", icon: "🎧" },
];

const categories = [
  "Forgot Apple ID or password",
  "iCloud issues",
  "Device not working",
  "Billing & subscriptions",
  "Software update problems",
  "Security & verification",
];

export default function AppleSupportPage() {
  return (
    <div className="bg-white text-center">

      {/* 🔷 HERO */}
      <section className="pt-28 pb-16 px-5">
        <p className="text-[60px] font-semibold text-[#4d4d4d] mb-2">Apple Support</p>

        <h1 className="text-[34px] sm:text-[42px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight">
          How can we help you?
        </h1>

        {/* 🔍 SEARCH */}
        <div className="mt-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search support topics"
            className="
              w-full 
              px-5 py-3 
              rounded-full 
              border border-gray-300
              focus:outline-none 
              focus:ring-2 
              focus:ring-blue-500
              text-sm
            "
          />
        </div>
      </section>

      {/* 🔷 DEVICE GRID */}
      <section className="pb-16 px-5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {devices.map((device, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center 
                p-4 
                rounded-2xl 
                hover:bg-gray-100 
                cursor-pointer 
                transition
              "
            >
              <div className="text-3xl mb-2">{device.icon}</div>
              <p className="text-sm text-[#1d1d1f]">{device.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 SUPPORT TOPICS */}
      <section className="bg-[#f5f5f7] py-16 px-5">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-8">
            Popular topics
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((item, i) => (
              <div
                key={i}
                className="
                  bg-white 
                  p-5 
                  rounded-xl 
                  text-left 
                  hover:shadow-sm 
                  cursor-pointer 
                  transition
                "
              >
                <p className="text-[15px] text-[#1d1d1f]">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔷 CONTACT CTA */}
      <section className="py-20 px-5">
        <div className="max-w-xl mx-auto">

          <h2 className="text-2xl font-semibold text-[#1d1d1f]">
            Get support
          </h2>

          <p className="mt-3 text-[#6e6e73]">
            Talk to our experts for quick solutions.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:18332251707"
              className="
                bg-[#0071e3] 
                text-white 
                px-6 py-3 
                rounded-full 
                text-sm 
                font-medium
              "
            >
              Call Support
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}