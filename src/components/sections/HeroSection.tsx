{/* Content */}
<div className="relative z-20 container-padding text-center">
  <div className="max-w-4xl mx-auto animate-fade-in">

    {/* Apple Style Heading */}
    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black mb-6">
      Apple Support
    </h1>

    <p className="text-xl md:text-2xl text-gray-700 mb-6">
      Need help with your Apple device?
    </p>

    {/* Description */}
    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
      If you’re facing any issues with iOS, macOS, Mac, iPhone, iPad, or your iCloud account,
      our certified Apple Support team is here to assist you.
    </p>

    {/* Support Points */}
    <div className="text-left max-w-2xl mx-auto mb-10 text-gray-700 space-y-2">
      <p>• iOS and macOS software problems</p>
      <p>• Device performance and setup issues</p>
      <p>• iCloud account access, sync, and recovery</p>
      <p>• Apple ID verification and security concerns</p>
    </div>

    {/* CTA Section - Apple Style */}
    <div className="flex flex-col items-center gap-4">

      <p className="text-lg font-medium text-gray-800">
        Call our Apple Support Helpline for immediate assistance
      </p>

      <Button
        onClick={handleCallNow}
        size="lg"
        className="bg-black hover:bg-gray-900 text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300"
      >
        <Phone className="mr-2 w-5 h-5" />
        Call Support: {COMPANY_CONFIG.PHONE}
      </Button>

      <p className="text-sm text-gray-500">
        📞 Toll-Free • Available 24/7 • Instant Support
      </p>

    </div>
  </div>
</div>
