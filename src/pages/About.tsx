import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Briefcase, BookOpen, MessageSquare, Mail } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const services = [
{
  icon: MessageSquare,
  title: "The mock feels real, because it is",
  desc: "We simulate the exact structure, pacing, and pressure of a company's case round. No filler, no guesswork."
},
{
  icon: BookOpen,
  title: "A formula, not a feeling",
  desc: "After placing multiple candidates, we know what works. Every session is built on patterns from real interviews, not theory."
},
{
  icon: Briefcase,
  title: "Every company, start to finish",
  desc: "From the shortlisting to mini-case to Powerday, we cover every stage. You won't walk in unprepared at any point."
}];



const About = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl">
            
            <p className="text-accent font-semibold eyebrow uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Your Partner in Your Career Success
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              We're a team of experienced professionals who've navigated the interview process at multiple consulting (MBB) and financial institutions, and now we're here to guide you through it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>After years of conducting and coaching interviews for 4+ years for MBB, we noticed there is a gap of quality coaching and available resources for banking interviews. Most candidates came in underprepared, not because they lacked talent, but because they didn't understand what companies specifically looks for. We are a team of ex-McKinsey and ex-banking consultants, bringing the best of both the worlds for you.

                </p>
                <p>We founded Capital Interview to bridge that gap. Our approach is rooted in real insider experience, not generic advice. Every framework, every tip, and every mock interview is designed around each company's actual evaluation criteria.

                </p>
                <p>Whether you're applying for a business analyst, product manager, consultant, data analyst, or data science role, we've coached candidates across all major functions and levels.

                </p>
                <a
                  href="https://www.youtube.com/@Capitalinterview/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-accent hover:underline"
                >
                  Watch our coaching in action →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ background: "var(--section-gradient)" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14">
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Built by those who've been through it, and placed candidates after.</h2>
            <p className="text-muted-foreground leading-relaxed">Not generic coaching. Every session is designed around what company actually tests.

            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((s, i) =>
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <s.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto">
            
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-6">
              Have questions? Reach out and we'll help you find the right coaching plan.
            </p>
            <Button variant="default" size="lg" onClick={() => setContactOpen(true)}>
              <Mail size={18} /> Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </Layout>);

};

export default About;