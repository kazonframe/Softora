import { ArrowRight, Play, Phone, ShieldCheck, Cloud, Settings, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { COMPANY_CONFIG } from "@/config/company";

export const HeroSection = () => {
  const handleCallNow = () => {
    window.open(`tel:${COMPANY_CONFIG.PHONE}`, '_self');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Subtle Apple Gradient Glow */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gray-100 to-transparent z-0" />

      {/* Content */}
      <div className="relative z-20 container-padding text-center py-20">
        <div className="max-w-5xl mx-auto">

          {/* OLD TEXT */}
          {/*
          <h1>Building the Future of Tech</h1>
          */}

          {/* HEADER */}
          <h1 
            className="text-4xl md:text-6xl font-semibold mb-4 text-black"
            style={{ letterSpacing: "-0.02em" }}
          >
            Apple Support
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Need help with your Apple device?
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Get expert help for iPhone, Mac, iPad, iCloud, and Apple ID issues. 
            Our certified specialists provide fast, secure, and reliable solutions — available 24/7.
          </p>

          {/* DEVICE ICON ROW */}
          <div className="flex justify-center gap-8 mb-12 flex-wrap">
            <div className="flex flex-col items-center text-gray-600">
              <Smartphone size={32} />
              <span className="text-sm mt-2">iPhone</span>
            </div>
            <div className="flex flex-col items-center text-gray-600">
              <Settings size={32} />
              <span className="text-sm mt-2">macOS</span>
            </div>
            <div className="flex flex-col items-center text-gray-600">
              <Cloud size={32} />
              <span className="text-sm mt-2">iCloud</span>
            </div>
            <div className="flex flex-col items-center text-gray-600">
              <ShieldCheck size={32} />
              <span className="text-sm mt-2">Apple ID</span>
            </div>
          </div>

          {/* SUPPORT CARD */}
          <div 
            className="max-w-3xl mx-auto mb-12"
            style={{
              background: "#f5f5f7",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #e5e5e7",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}
          >
            <h3 className="text-xl font-semibold mb-4 text-black">
              We help you with:
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-left text-gray-700">
              <p>• iOS & macOS software issues</p>
              <p>• Device setup & performance fixes</p>
              <p>• iCloud login, sync & recovery</p>
              <p>• Apple ID security & verification</p>
              <p>• Data backup & restore help</p>
              <p>• System errors & update failures</p>
            </div>
          </div>

          {/* CALL SECTION */}
          <div className="mb-12">
            <p className="text-lg text-black font-medium mb-2">
              Talk to Apple Support now
            </p>
            <p className="text-gray-600 mb-4">
              📞 Toll-Free: 1800-XXX-XXXX (24/7 Available)
            </p>

            <Button
              onClick={handleCallNow}
              size="lg"
              style={{
                background: "#0071e3",
                color: "#fff",
                padding: "14px 34px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: "0 6px 20px rgba(0,113,227,0.3)"
              }}
              className="hover:opacity-90 transition"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Support
            </Button>
          </div>

          {/* TRUST SECTION */}
          <div className="text-gray-500 text-sm max-w-2xl mx-auto">
            Trusted by thousands of Apple users. Fast resolution, secure assistance, and certified support experts ready to help you anytime.
          </div>

          {/* IMAGE SECTION (APPLE STYLE CLEAN VISUAL) */}
          <div className="mt-16 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              alt="Apple Devices"
              style={{
                borderRadius: "20px",
                maxWidth: "100%",
                width: "700px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
