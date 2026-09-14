import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ContactModal from "@/components/ContactModal";

const testimonials = [
  { name: "Purdue graduate", role: "Business Analyst", company: "Capital One", quote: "It was really great working with Capital interview! They assessed exactly where I should be focusing, areas for improvement and how I can go about it. They also provided a detailed feedback document after the call and math problems to improve my skills." },
  { name: "King's College London graduate", role: "Senior Business Analyst", company: "Capital One", quote: "We did live cases where they pushed me a lot on the “so what” behind the analysis and how to make strong recommendations. The prep ended up being really similar with what came up in my actual interview so I’d definitely recommend them" },
  { name: "Yale graduate, ex-Amazon", role: "Consultant", company: "Bain", quote: "Coming from a non-traditional background, I needed someone who understood what evaluators actually look for. The coaching was exactly that where they focused on how to be the top 10% while feeling that you “own” the interview. Changed my mindset completely." },
  { name: "Darden graduate", role: "Associate", company: "McKinsey", quote: "Their years of experience can be noticed based on how they deliver the case, provide detailed feedback during and after the case and also recommend personalized course of action. I would totally recommend them to prepare for case interviews!" },
  { name: "Cornell Graduate", role: "Senior Associate", company: "BCG", quote: "I was rusty with case practice and consulting math, but they helped me feel comfortable and enjoy problem solving. They are also incredibly thoughtful, patient and awesome to work with. They also shared useful PDFs and videos that make learning easier." },
  { name: "Ex-Microsoft", role: "Product Manager", company: "Capital One", quote: "Coming with hands-on experience from the real world, they brought a real-world lens to every session that helped me fine-tune my casing and product skills in a meaningful way. What stood out was the attention to detail, focused on literally every word that I spoke." },
];


type ChatMessage = { text: string; time: string; direction: "in" | "out"; ticks?: boolean };
type ChatData = { date?: string; messages: ChatMessage[] }[];

const chatsData: ChatData[] = [
  // Chat 1 - existing
  [
    { date: "7 July 2025", messages: [
      { text: "Hi Hritik! Please excuse me for not replying to your earlier messages, I thought I had replied", time: "12:52 am", direction: "in" },
      { text: "I have some amazing news for you! I got the job 🥳", time: "12:52 am", direction: "in" },
      { text: "❤️", time: "12:52 am", direction: "in" },
      { text: "Thank you so much for your support!", time: "12:52 am", direction: "in" },
      { text: "Practicing those case studies with you was amazing! Thanks for your guidance", time: "12:53 am", direction: "in" },
      { text: "How are you doing?", time: "12:53 am", direction: "in" },
      { text: "Once again, I am so sorry for the late reply, I thought that I had updated you regarding this already. Please excuse me!", time: "12:54 am", direction: "in" },
      { text: "Oh my god", time: "10:01 am", direction: "out", ticks: true },
      { text: "this is crazy - congratulations", time: "10:02 am", direction: "out", ticks: true },
      { text: "❤️", time: "10:02 am", direction: "out", ticks: false },
      { text: "well earned", time: "10:02 am", direction: "out", ticks: true },
      { text: "when do you join / shift to US", time: "10:02 am", direction: "out", ticks: true },
    ]},
  ],
  // Chat 2
  [
    { date: "13 March 2026", messages: [
      { text: "Passed the power day!!!!", time: "2:08 am", direction: "in" },
      { text: "Oh my god", time: "6:50 am", direction: "out", ticks: true },
      { text: "Congratulations!!", time: "6:50 am", direction: "out", ticks: true },
      { text: "Proud of you ❤️", time: "6:50 am", direction: "out", ticks: true },
      { text: "Thank you!!! Honestly thank you SO SO much 🥺", time: "6:58 am", direction: "in" },
      { text: "Yes definitely", time: "6:58 am", direction: "out", ticks: true },
      { text: "How's the feels", time: "6:59 am", direction: "out", ticks: true },
    ]},
  ],
  // Chat 3
  [
    { messages: [
      { text: "Really wanna talk to you", time: "12:44 am", direction: "in" },
      { text: "I got it :)", time: "12:44 am", direction: "in" },
      { text: "Wow?", time: "12:44 am", direction: "out", ticks: true },
      { text: "I am recommended for hire :)", time: "12:44 am", direction: "in" },
      { text: "My god", time: "12:44 am", direction: "out", ticks: true },
      { text: "Just need to do a matchmaking", time: "12:44 am", direction: "in" },
      { text: "Can't believe", time: "12:44 am", direction: "out", ticks: true },
      { text: "Congratulations!!!", time: "12:44 am", direction: "out", ticks: true },
      { text: "Matchmaking intervirw", time: "12:44 am", direction: "in" },
      { text: "This is so so big", time: "12:44 am", direction: "out", ticks: true },
      { text: "I am crying lol", time: "12:45 am", direction: "in" },
      { text: "VERYYYYYYY", time: "12:45 am", direction: "in" },
      { text: "Yes i understood", time: "12:45 am", direction: "out", ticks: true },
      { text: "Let me call you in 1 min", time: "12:45 am", direction: "out", ticks: true },
      { text: "GOSH", time: "12:45 am", direction: "in" },
    ]},
  ],
];

const WhatsAppChat = ({ sections }: { sections: ChatData }) => (
  <div className="w-full max-w-[260px] mx-auto flex-shrink-0">
    <style>{`
      .wa-scroll::-webkit-scrollbar { width: 5px; }
      .wa-scroll::-webkit-scrollbar-track { background: #1a1f25; border-radius: 4px; }
      .wa-scroll::-webkit-scrollbar-thumb { background: #3a3f47; border-radius: 4px; }
      .wa-scroll::-webkit-scrollbar-thumb:hover { background: #4a4f57; }
    `}</style>
    {/* Phone frame */}
    <div className="rounded-[40px] p-2" style={{ backgroundColor: "#1a1a2e", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0px 24px 60px rgba(0,0,0,0.5)" }}>
      {/* Screen */}
      <div className="rounded-[32px] overflow-hidden" style={{ backgroundColor: "#0D1418" }}>
        <div className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: "#1F2C34" }}>
          <div className="w-7 h-7 rounded-full flex items-center justify-center font-semibold" style={{ fontSize: "12px", backgroundColor: "#005C4B", color: "#fff" }}>V</div>
          <div className="flex-1">
            <p className="font-semibold" style={{ fontSize: "13px", color: "#E9EDEF" }}>Verified Client</p>
            <span className="px-1.5 py-0.5 rounded-full font-medium" style={{ fontSize: "11px", backgroundColor: "rgba(0,92,75,0.3)", color: "#25D366" }}>Screenshot Verified ✓</span>
          </div>
        </div>
        <div className="relative" style={{ height: "500px", overflow: "hidden" }}>
          <div className="wa-scroll px-3 py-3 pb-16 flex flex-col gap-0.5 overflow-y-auto" style={{ height: "100%", scrollbarWidth: "thin", scrollbarColor: "#3a3f47 #1a1f25" }}>
            {sections.map((section, si) => (
              <div key={si}>
                {section.date && (
                  <div className="flex justify-center mb-2 mt-0.5">
                    <span className="px-2.5 py-0.5 rounded-lg" style={{ fontSize: "11px", backgroundColor: "#1B2831", color: "#8696A0" }}>{section.date}</span>
                  </div>
                )}
                {section.messages.map((msg, mi) => (
                  <div key={mi} className={`flex ${msg.direction === "out" ? "justify-end" : "justify-start"}`}>
                    <div className="max-w-[85%] rounded-lg px-2 py-1.5 mb-0.5" style={{ backgroundColor: msg.direction === "out" ? "#005C4B" : "#1F2C34" }}>
                      <p className="leading-snug whitespace-pre-line" style={{ fontSize: "14px", color: "#E9EDEF" }}>{msg.text}</p>
                      <p className="text-right mt-0.5" style={{ fontSize: "11px", color: msg.direction === "out" ? "rgba(233,237,239,0.6)" : "#8696A0" }}>
                        {msg.time}{msg.direction === "out" && msg.ticks ? " ✓✓" : ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Fade-out gradient */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: "80px", background: "linear-gradient(to bottom, transparent, #0D1418)" }} />
        </div>
      </div>
      {/* Bottom bezel */}
      <div className="h-3" />
    </div>
  </div>
);

const WhatsAppCarouselSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = chatsData.length;

  const goTo = useCallback((idx: number) => {
    setActive(((idx % total) + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) { if (timerRef.current) clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => setActive(p => (p + 1) % total), 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, total]);

  return (
    <section className="py-20" style={{ backgroundColor: "#0F172A", paddingTop: "80px", paddingBottom: "80px", background: "radial-gradient(ellipse at center, #1a2744 0%, #0F172A 60%)" }}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" style={{ color: "#ffffff" }}>Straight From the Conversation</h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.5px" }}>Unedited. Exactly as it happened.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Carousel viewport */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {chatsData.map((chat, i) => (
                <div key={i} className="w-full flex-shrink-0 flex justify-center px-2">
                  <WhatsAppChat sections={chat} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows + Dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => goTo(active - 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff" }}
              aria-label="Previous chat"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2.5">
              {chatsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-colors"
                  style={{ width: "10px", height: "10px", backgroundColor: i === active ? "#ffffff" : "rgba(255,255,255,0.3)" }}
                  aria-label={`Go to chat ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(active + 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff" }}
              aria-label="Next chat"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Layout>
      {/* Header */}
      <section className="py-20" style={{ background: "var(--section-gradient)" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
              What Our Clients Say
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Real candidates. Real interviews. Real outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-border">
            {["700+ Sessions Conducted", "Multiple Top Firms", "Capital One, MBB & Beyond"].map((stat, i) => (
              <motion.div
                key={stat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="py-6 px-10 text-center"
              >
                <p className="font-display text-lg font-semibold text-foreground">{stat}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-20" style={{ background: "var(--section-gradient)" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col"
              >
                <Quote className="text-accent/30 mb-4 shrink-0" size={28} />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-auto">
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">
                    {t.role} - {t.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* WhatsApp Chat Carousel Section */}
      <WhatsAppCarouselSection />

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Start Preparing?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Join candidates who walked in prepared and walked out confident.
            </p>
            <a href="https://forms.gle/pYPeMV8PaXMCNNt59" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">
                Book an Intro Call <ArrowRight size={18} />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </Layout>
  );
};

export default Testimonials;
