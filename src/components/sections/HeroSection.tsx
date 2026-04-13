import { Phone, Smartphone, Laptop, Cloud, ShieldCheck, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_CONFIG } from "@/config/company";

export const HeroSection = () => {
  const handleCallNow = () => {
    window.open(`tel:${COMPANY_CONFIG.PHONE}`, "_self");
  };

  return (
    <section className="relative min-h-screen bg-white">

      {/* ================= OLD CODE (COMMENTED) ================= */}
      {/*
        PREVIOUS HERO SECTION CODE (UNCHANGED)
      */}

      {/* ================= STICKY HEADER ================= */}
      <header
        className="fixed top-0 left-0 w-full z-50"
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.85)",
          borderBottom: "1px solid #e5e5e7"
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">

          {/* Apple Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Softora"
              style={{ width: "40px", height: "36px" }}
            />
            <span style={{ fontSize: "16px", fontWeight: 500, color: "#1d1d1f" }}>
              
            </span>
          </div>

          <Button
            onClick={handleCallNow}
            style={{
              background: "#0071e3",
              color: "#fff",
              borderRadius: "999px",
              padding: "8px 18px",
              fontSize: "14px",
              fontWeight: "500"
            }}
          >
            Call Support
          </Button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <div className="pt-28 pb-20 px-6 text-center">

        <h1
          style={{
            fontSize: "48px",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#1d1d1f",
            marginBottom: "12px"
          }}
        >
          Apple Support
        </h1>

        <p style={{ fontSize: "20px", color: "#6e6e73", marginBottom: "10px" }}>
          Need help with your Apple device?
        </p>

        <p
          style={{
            fontSize: "17px",
            color: "#6e6e73",
            maxWidth: "680px",
            margin: "0 auto 40px",
            lineHeight: "1.6"
          }}
        >
          Get expert help for iPhone, Mac, iPad, iCloud, and Apple ID issues. 
          Fast, secure, and reliable assistance available 24/7.
        </p>

        {/* ================= DEVICE VISUAL ================= */}
        <div className="flex justify-center mb-14">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            alt="Apple Devices"
            style={{
              width: "720px",
              maxWidth: "100%",
              borderRadius: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
            }}
          />
        </div>

        {/* ================= STEP FLOW ================= */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          {/* STEP 1 */}
          <div style={{
            background: "#f5f5f7",
            padding: "26px",
            borderRadius: "20px",
            border: "1px solid #e5e5e7"
          }}>
            <p style={{ fontSize: "13px", color: "#6e6e73" }}>Step 1</p>
            <h3 style={{ fontWeight: 600, margin: "10px 0", color: "#1d1d1f" }}>
              Choose your device
            </h3>

            <div className="flex justify-center gap-6 mt-4 text-gray-700">
              <Smartphone />
              <Laptop />
              <Cloud />
              <ShieldCheck />
            </div>
          </div>

          {/* STEP 2 */}
          <div style={{
            background: "#f5f5f7",
            padding: "26px",
            borderRadius: "20px",
            border: "1px solid #e5e5e7"
          }}>
            <p style={{ fontSize: "13px", color: "#6e6e73" }}>Step 2</p>
            <h3 style={{ fontWeight: 600, margin: "10px 0", color: "#1d1d1f" }}>
              Select your issue
            </h3>

            <ul style={{
              textAlign: "left",
              fontSize: "14px",
              color: "#424245",
              lineHeight: "1.8"
            }}>
              <li>• iOS / macOS errors</li>
              <li>• Apple ID locked</li>
              <li>• iCloud not syncing</li>
              <li>• Device performance issues</li>
            </ul>
          </div>

          {/* STEP 3 */}
          <div style={{
            background: "#f5f5f7",
            padding: "26px",
            borderRadius: "20px",
            border: "1px solid #e5e5e7"
          }}>
            <p style={{ fontSize: "13px", color: "#6e6e73" }}>Step 3</p>
            <h3 style={{ fontWeight: 600, margin: "10px 0", color: "#1d1d1f" }}>
              Connect with support
            </h3>

            <Button
              onClick={handleCallNow}
              style={{
                background: "#0071e3",
                color: "#fff",
                borderRadius: "999px",
                padding: "12px 22px",
                marginTop: "10px",
                width: "100%",
                fontWeight: "500"
              }}
            >
              <Phone className="mr-2 w-4 h-4" />
              Call Now
            </Button>
          </div>

        </div>

        {/* ================= SUPPORT CARD ================= */}
        <div
          className="max-w-2xl mx-auto mt-16"
          style={{
            background: "#fafafa",
            padding: "32px",
            borderRadius: "22px",
            border: "1px solid #e5e5e7"
          }}
        >
          <UserCircle2 size={40} style={{ marginBottom: "10px", color: "#6e6e73" }} />

          <p style={{ fontSize: "18px", fontWeight: 500, color: "#1d1d1f" }}>
            Talk to an Apple Support Specialist
          </p>

          <p style={{ color: "#6e6e73", marginTop: "6px", marginBottom: "14px" }}>
            📞 Toll-Free: +1 (833) 225-1707 (24/7 Available)
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

      </div>
    </section>
  );
};
