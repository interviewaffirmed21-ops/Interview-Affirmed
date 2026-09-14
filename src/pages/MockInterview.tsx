import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail, Brain, MessageSquare, Calculator, Lightbulb, Target,
  FileText, BookOpen, Table2, CheckCircle, ArrowRight } from
"lucide-react";
import ContactModal from "@/components/ContactModal";

const phase1Evaluations = [
{ icon: Brain, label: "Structure and logic" },
{ icon: Lightbulb, label: "Hypothesis-driven thinking" },
{ icon: Calculator, label: "Math accuracy and speed" },
{ icon: MessageSquare, label: "Clarity of explanation" },
{ icon: Target, label: "Business judgment" }];


const deliverables = [
{
  icon: FileText,
  title: "Full Performance Breakdown",
  items: [
  "What you said (key statements reconstructed)",
  "Strength areas",
  "Development areas",
  "Communication gaps"]

},
{
  icon: BookOpen,
  title: 'Guided "Ideal Answer" Framework',
  items: [
  "What a top 10% candidate would say",
  "How to structure the case optimally",
  "Stronger synthesis examples"]

},
{
  icon: Table2,
  title: "Quantitative Playbook (Excel File)",
  items: [
  "Multiple ways to solve the math",
  "Cleaner structuring methods",
  "Efficiency shortcuts",
  "Structured calculations for repeat practice"]

}];


const outcomes = [
"Think more structurally",
"Solve math with confidence",
"Communicate more crisply",
"Understand cases deeply"];


const MockInterview = () => {
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
            className="max-w-3xl">
            
            <p className="text-accent font-semibold eyebrow uppercase tracking-widest mb-4">
              Mock Interview
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6">
              A 75–90 Minute Deep-Dive Mock Interview
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              Built to replicate the real interview experience. This is not a casual practice session. It's a structured simulation designed to elevate your performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Phase 1 & Phase 2, Side by Side */}
      <section className="py-20" style={{ background: "var(--section-gradient)" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14">
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Happens During the Session
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every session is built around 2 phases, rigorous simulation followed by <span className="text-accent font-semibold">deep performance analysis</span>.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Phase 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg border border-border shadow-sm p-8 flex flex-col">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                  1
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Live Case Simulation
                </h2>
              </div>
              <p className="text-accent font-semibold text-sm mb-4">40–50 Minutes</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                We run a realistic company specific style case under real interview conditions:
              </p>
              <ul className="space-y-2 text-sm text-foreground mb-6">
                {["Structured problem-solving", "Heavy quantitative analysis", "Clear communication expectations", "Real-time probing (just like the actual interview)"].map((item) =>
                <li key={item} className="flex items-start gap-2">
                    <ArrowRight className="text-accent shrink-0 mt-0.5" size={14} />
                    {item}
                  </li>
                )}
              </ul>
              <p className="text-sm font-semibold text-foreground mb-3">You are evaluated on:</p>
              <div className="space-y-3 flex-1">
                {phase1Evaluations.map(({ icon: Icon, label }) =>
                <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon className="text-primary shrink-0" size={16} />
                    {label}
                  </div>
                )}
              </div>
              <p className="mt-6 text-sm font-semibold text-accent italic">
                No interruptions. No hints. Just real performance.
              </p>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg border border-border shadow-sm p-8 flex flex-col">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shrink-0">
                  2
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Deep Feedback & Skill Deconstruction
                </h2>
              </div>
              <p className="text-accent font-semibold text-sm mb-4">30–40 Minutes</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                This is where the transformation happens.
              </p>
              <p className="text-sm font-semibold text-foreground mb-3">We break down:</p>
              <ul className="space-y-2 text-sm text-foreground mb-8">
                {[
                "Every structure you created",
                "Every math approach you used",
                "Every communication gap",
                "Every missed insight",
                "Every strong moment worth reinforcing"].
                map((item) =>
                <li key={item} className="flex items-start gap-2">
                    <ArrowRight className="text-accent shrink-0 mt-0.5" size={14} />
                    {item}
                  </li>
                )}
              </ul>
              <p className="text-sm font-semibold text-foreground mb-3">You leave knowing exactly:</p>
              <ul className="space-y-2 text-sm text-foreground flex-1">
                {["What to fix", "How to fix it", "What to double down on"].map((item) =>
                <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="text-success shrink-0" size={14} />
                    {item}
                  </li>
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14">
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What You Receive After the Session
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You don't just get feedback. You get a <span className="text-accent font-semibold">blueprint for improvement</span>.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {deliverables.map(({ icon: Icon, title, items }, i) =>
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-lg p-6 border border-border">
              
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) =>
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="text-success shrink-0 mt-0.5" size={13} />
                      {item}
                    </li>
                )}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Outcomes + CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto">
            
            <h2 className="text-3xl font-display font-bold text-primary-foreground mb-6">
              The Outcome
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              After sessions, candidates:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10 text-left">
              {outcomes.map((item) =>
              <div key={item} className="flex items-center gap-2 text-primary-foreground text-sm">
                  <CheckCircle className="text-accent shrink-0" size={16} />
                  {item}
                </div>
              )}
            </div>
            <a href="https://forms.gle/pYPeMV8PaXMCNNt59" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">
                <Mail size={18} /> Book an Intro Call
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </Layout>);

};

export default MockInterview;