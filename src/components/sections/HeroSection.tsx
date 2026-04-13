import { ArrowRight, Play, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { COMPANY_CONFIG } from "@/config/company";

export const HeroSection = () => {
  const handleCallNow = () => {
    window.open(`tel:${COMPANY_CONFIG.PHONE}`, '_self');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="video-background">
        <source src="https://cdn.pixabay.com/video/2019/04/01/22646-325240142_large.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95 z-10" />

      {/* Content */}
      <div className="relative z-20 container-padding text-center">
        <div className="max-w-4xl mx-auto">

          {/* OLD HERO TEXT */}
          {/*
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Building the
            <span className="block gradient-text">Future of Tech</span>
          </h1>
          */}

          {/* NEW APPLE SUPPORT STYLE */}
          <h1 
            className="text-4xl md:text-6xl font-semibold mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Apple Support
          </h1>

          <p 
            className="text-xl md:text-2xl text-gray-700 mb-6"
            style={{ fontWeight: 500 }}
          >
            Need help with your Apple device?
          </p>

          <p 
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            If you’re facing any issues with iOS, macOS, Mac, iPhone, iPad, or your iCloud account, our certified Apple Support team is here to assist you.
          </p>

          {/* SERVICES LIST */}
          <div 
            className="text-left max-w-xl mx-auto mb-8 text-gray-700"
            style={{ lineHeight: "1.8" }}
          >
            <p>We provide expert troubleshooting and solutions for:</p>
            <ul style={{ marginTop: "10px", paddingLeft: "18px" }}>
              <li>• iOS and macOS software problems</li>
              <li>• Device performance and setup issues</li>
              <li>• iCloud account access, sync, and recovery</li>
              <li>• Apple ID verification and security concerns</li>
            </ul>
          </div>

          {/* CALL SUPPORT HIGHLIGHT */}
          <div 
            className="mb-10"
            style={{
              background: "#f5f5f7",
              padding: "20px",
              borderRadius: "16px",
              border: "1px solid #e5e5e7"
            }}
          >
            <p className="text-lg font-medium mb-2">
              Call our Apple Support Helpline today
            </p>
            <p className="text-gray-600 mb-3">
              📞 Toll-Free Number: 1800-XXX-XXXX (Available 24/7)
            </p>
            <p className="text-sm text-gray-500">
              Our dedicated support specialists are ready to help you get back to using your Apple devices smoothly and securely.
            </p>
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center">
            <Button
              onClick={handleCallNow}
              size="lg"
              style={{
                background: "#0071e3",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: "600"
              }}
              className="hover:opacity-90 transition"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Support Now
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
