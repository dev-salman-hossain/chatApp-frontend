import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/Hero";
import LiveDemoSection from "@/components/home/LiveDemoSection";
import FeatureSection from "@/components/home/Feature";
import StickersBusinessSection from "@/components/home/StickersBusinessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingSection from "@/components/home/PricingSection";
import NewsletterArticlesSection from "@/components/home/NewsletterArticlesSection";
import StatsSection from "@/components/home/StatsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white w-full overflow-x-hidden">
      <Navbar />
      
      <div className="flex-1 space-y-4 md:space-y-8 w-full max-w-7xl mx-auto">
        {/* Hero Section */}
        <HeroSection />

        {/* Live Interactive Simulator Section */}
        <LiveDemoSection />

        {/* Core Feature Sections */}
        <div id="features" className="space-y-2">
          <FeatureSection
            label="FAST & RELIABLE"
            title="Messages that keep you moving"
            description="Send text, media, voice messages and files instantly. alapBD works seamlessly across all your devices with instant cloud synchronization."
            imageSrc="/assets/heroImage1.avif"
            highlights={[
              "Instant delivery & real-time sync",
              "Voice notes & high quality media",
              "Cross-platform browser access"
            ]}
            reverse={false}
          />

          <FeatureSection
            label="STAY CLOSE"
            title="Face-to-face, wherever you are"
            description="High-quality voice and video calls for meaningful conversations. Connect with crystal-clear audio even on low data connections."
            imageSrc="/assets/heroImage2.avif"
            highlights={[
              "HD 1080p crystal-clear video",
              "Noise cancellation engine",
              "Low latency global routing"
            ]}
            reverse={true}
          />

          <FeatureSection
            label="BUILT FOR GROUPS"
            title="Bring people together"
            description="Create groups, share moments and stay connected with the people who matter. Manage large communities with granular admin controls."
            imageSrc="/assets/heroImage3.avif"
            highlights={[
              "Large group chats & custom roles",
              "Instant media & file attachment sync",
              "Mentions, reactions & pinned chats"
            ]}
            reverse={false}
          />

          <div id="privacy">
            <FeatureSection
              label="YOUR PRIVACY, OUR PRIORITY"
              title="Speak freely"
              description="End-to-end encryption keeps your messages and calls private and secure. Only you and your recipient can read or listen to them."
              imageSrc="/assets/heroImage4.avif"
              highlights={[
                "Client-side end-to-end encryption",
                "Zero data monetization & no ad tracking",
                "Biometric lock & privacy timer"
              ]}
              reverse={true}
            />
          </div>
        </div>

        {/* Express Yourself (Stickers) & Made For Business */}
        <div id="stickers">
          <StickersBusinessSection />
        </div>

        {/* User Testimonials Section */}
        <TestimonialsSection />

        {/* Transparent Pricing Section */}
        <PricingSection />

        {/* Newsletter & Privacy/Tips Articles Bar */}
        <div id="articles">
          <NewsletterArticlesSection />
        </div>

        {/* Stats & Scale Section */}
        <div id="stats">
          <StatsSection />
        </div>

        {/* FAQ Accordion Section */}
        <FaqSection />

        {/* Call To Action Section */}
        <CtaSection />
      </div>

      {/* Main Footer */}
      <Footer />
    </main>
  );
}
