import { Phone, Smartphone, Laptop, Cloud, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_CONFIG } from "@/config/company";

export const HeroSection = () => {
  const handleCallNow = () => {
    window.open(`tel:${COMPANY_CONFIG.PHONE}`, "_self");
  };

  return (
    <section className="relative min-h-screen bg-white">

      {/* ================= OLD HERO (COMMENTED) ================= */}
      {/*
        OLD HERO SECTION CODE HERE (UNCHANGED)
      */}

      {/* ================= STICKY HEADER ================= */}
      <header 
        className="fixed top-0 left-0 w-full z-50"
        style={{
          backdropFilter: "saturate(180%) blur(20px)",
          background: "rgba(255,255,255,0.8)",
          borderBottom: "1px solid #e5e5e7"
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <h2 style={{ fontSize: "18px", fontWeight: 600 }}> Support</h2>

          <Button
            onClick={handleCallNow}
            style={{
              background: "#0071e3",
              color: "#fff",
              borderRadius: "999px",
              padding: "8px 18px",
              fontSize: "14px"
            }}
          >
            Call Support
          </Button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <div className="pt-28 pb-20 text-center px-6">
        <h1 
          className="text-4xl md:text-6xl font-semibold mb-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          Apple Support
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Get help with your Apple devices
        </p>

        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          iPhone, Mac, iPad, iCloud, and Apple ID — solve all issues with certified experts. Fast, secure, and available 24/7.
        </p>

        {/* ================= STEP FLOW ================= */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          {/* STEP 1 */}
          <div 
            style={{
              background: "#f5f5f7",
              padding: "24px",
              borderRadius: "18px",
              border: "1px solid #e5e5e7",
              transition: "0.3s"
            }}
          >
            <p style={{ fontSize: "14px", color: "#6e6e73", marginBottom: "10px" }}>
              Step 1
            </p>
            <h3 className="font-semibold mb-4">Choose your device</h3>

            <div className="flex justify-center gap-6">
              <Smartphone />
              <Laptop />
              <Cloud />
              <ShieldCheck />
            </div>
          </div>

          {/* STEP 2 */}
          <div 
            style={{
              background: "#f5f5f7",
              padding: "24px",
              borderRadius: "18px",
              border: "1px solid #e5e5e7"
            }}
          >
            <p style={{ fontSize: "14px", color: "#6e6e73", marginBottom: "10px" }}>
              Step 2
            </p>
            <h3 className="font-semibold mb-4">Select your issue</h3>

            <ul style={{ fontSize: "14px", color: "#333", lineHeight: "1.8", textAlign: "left" }}>
              <li>• Software not working</li>
              <li>• Apple ID locked</li>
              <li>• iCloud sync problem</li>
              <li>• Device slow / stuck</li>
            </ul>
          </div>

          {/* STEP 3 */}
          <div 
            style={{
              background: "#f5f5f7",
              padding: "24px",
              borderRadius: "18px",
              border: "1px solid #e5e5e7"
            }}
          >
            <p style={{ fontSize: "14px", color: "#6e6e73", marginBottom: "10px" }}>
              Step 3
            </p>
            <h3 className="font-semibold mb-4">Call & get instant help</h3>

            <Button
              onClick={handleCallNow}
              style={{
                background: "#0071e3",
                color: "#fff",
                borderRadius: "999px",
                padding: "12px 24px",
                fontWeight: "600",
                width: "100%"
              }}
            >
              <Phone className="mr-2 w-4 h-4" />
              Call Now
            </Button>
          </div>

        </div>

        {/* ================= CALL HIGHLIGHT ================= */}
        <div 
          className="mt-16 max-w-2xl mx-auto"
          style={{
            background: "#fafafa",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid #e5e5e7"
          }}
        >
          <p className="text-lg font-medium mb-2">
            Talk to Apple Support Specialist
          </p>
          <p className="text-gray-600 mb-4">
            📞 Toll-Free: 1800-XXX-XXXX (24/7)
          </p>

          <Button
            onClick={handleCallNow}
            style={{
              background: "#0071e3",
              color: "#fff",
              borderRadius: "999px",
              padding: "14px 30px",
              fontWeight: "600",
              boxShadow: "0 6px 20px rgba(0,113,227,0.25)"
            }}
          >
            Call Support Now
          </Button>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="mt-20 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt="Apple Devices"
            style={{
              width: "800px",
              maxWidth: "100%",
              borderRadius: "24px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.1)"
            }}
          />
        </div>

      </div>
    </section>
  );
};
