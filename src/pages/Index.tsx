import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, Target, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-interview.jpg";
import ContactModal from "@/components/ContactModal";

const myths = [
{ myth: "You need to practice difficult MBB math for banking interviews", truth: "Banking math is unique. Practice what's actually tested." },
{ myth: "You can't make a single mistake", truth: "Approach and structure matter more than the right answer." },
{ myth: "Structuring and communication don't matter", truth: "You need to land every strong point clearly, in one shot." },
{ myth: "You can wing the case interview", truth: "Case interviews for each company are structured and unique, targeted practice is non-negotiable." }];



const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional coaching" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.88 }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-accent font-semibold eyebrow uppercase tracking-widest mb-4">
              
              Professional Interview Coaching
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
              
              Land Your Dream Role with <span className="text-accent">Capital Interview</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Expert-led coaching from people knowledgeable about the process. Stop guessing and start preparing with proven strategies for the US market.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4">
              
              <a href="https://forms.gle/pYPeMV8PaXMCNNt59" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  Book an Intro Call <ArrowRight size={18} />
                </Button>
              </a>
              <Link to="/about">
                <Button variant="hero-outline" size="lg">
                  Learn About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Why Us */}
      <section className="py-20" style={{ background: "var(--section-gradient)" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14">
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why You Need A Coach
            </h2>
            <p className="text-muted-foreground leading-relaxed">Case and banking interviews process is unlike any other. You need targeted practice.

            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
            { icon: Target, title: "Targeted Preparation", desc: "Every session is built around each company's exact case format. Prepare with frameworks tailored to your role." },
            { icon: Users, title: "Insider Knowledge", desc: "Learn from coaches who've been through the process, and placed candidates on the other side of it." },
            { icon: Award, title: "Proven Results", desc: "Our candidates walk in knowing exactly what to expect. Confidence built on preparation, not luck." }].
            map((item, i) =>
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Myths */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14">
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Myths vs. Reality
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Don't let common misconceptions hold you back from applying.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {myths.map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background rounded-lg p-6 border border-border">
              
                <div className="flex items-start gap-3 mb-3">
                  <XCircle className="text-accent shrink-0 mt-0.5" size={20} />
                  <p className="font-semibold text-foreground">
                    <span className="text-accent font-bold">Myth:</span> {item.myth}
                  </p>
                </div>
                <div className="flex items-start gap-3 ml-0">
                  <CheckCircle className="text-success shrink-0 mt-0.5" size={20} />
                  <p className="text-muted-foreground text-sm">
                    <span className="font-semibold text-foreground">Reality:</span> {item.truth}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Start Preparing?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Join hundreds of successful candidates. Your dream role starts with the right preparation.
            </p>
            <Button variant="hero" size="lg" onClick={() => setContactOpen(true)}>
              Contact Us <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </Layout>);

};

export default Index;