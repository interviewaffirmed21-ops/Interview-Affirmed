import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail, ArrowRight, CheckCircle, Lightbulb, MessageSquare,
  Calculator, Brain, Target, AlertTriangle, Users } from
"lucide-react";

/* ── Flow overview data (mirrors the table/image from the doc) ── */
const flowStages = [
{
  letter: "A",
  title: "Initial Question",
  interviewer: "Factors to consider for profitability, launching this product",
  candidate: [
  "Ask clarifying questions",
  "Structure in 4-5 buckets (e.g., market, competition, customers, profit)"]

},
{
  letter: "B",
  title: "1-2 Maths on Profitability / Break-Even",
  interviewer: "Calculate the profitability and at what quantity would it break even",
  candidate: [
  "Take note of the numbers",
  "Write everything clearly and communicate"]

},
{
  letter: "C",
  title: "Further Questions",
  interviewer: "What do you think of the profit? How can you increase the profit?",
  candidate: [
  "Take time",
  "Be pragmatic (talk about downside as well)",
  "Structure profit answer into 2 buckets"]

},
{
  letter: "D",
  title: "2nd Math (More Challenging)",
  interviewer: "Company can launch a new product, can you calculate the revised quantity assuming weighted average?",
  candidate: [
  "Recap the question to get more time",
  "Keep communicating"]

},
{
  letter: "E",
  title: "Recommendation",
  interviewer: "What is your final recommendation?",
  candidate: [
  "Recommendation and why",
  "Risks",
  "Next steps"]

}];


/* ── Deep-dive sections ── */
const sections = [
{
  id: "initial-question",
  icon: MessageSquare,
  stage: "Stage A",
  title: "Initial Question",
  interviewerText:
  "At the beginning of the case, the interviewer typically shares three key pieces of information:",
  interviewerBullets: [
  "Client's business – What the client does (e.g., a bank, restaurant chain, retailer)",
  "Data and context – Basic information such as revenue, market size, number of customers, growth trends",
  "Key first question – The primary problem the client wants to solve"],

  candidateSteps: [
  {
    heading: "Start with a positive acknowledgement",
    text: 'Begin by thanking the interviewer. This helps build rapport and sets a professional tone.',
    example: '"Thank you for the case. I\'m excited to work through this problem."'
  },
  {
    heading: "Restate the problem",
    text: "Briefly summarize the case to ensure you understood it correctly.",
    example:
    '"Just to confirm my understanding, our client is a restaurant chain experiencing declining profitability, and they want to understand the key drivers and potential solutions."'
  },
  {
    heading: "Ask clarifying questions",
    text: "Ask a few targeted questions to better understand the business and objective. Avoid overdoing this step.",
    example:
    '"What is the primary objective today, profitability improvement, growth, or market expansion?"'
  },
  {
    heading: "Take time to structure your approach",
    text: "Take 60–90 seconds to organize your thoughts before presenting your framework. Cover 3–5 key dimensions such as market, customer, profitability, and execution capabilities.",
    example: null
  }],

  frameworks: [
  {
    name: "Market Attractiveness",
    points: [
    "Market size and growth: Is the market large enough and growing?",
    "Competitive landscape: How crowded is the market?",
    "Industry trends: Are there structural changes affecting the industry?"]

  },
  {
    name: "Customer",
    points: [
    "Target customer segment: Who is the product intended for?",
    "Customer needs and preferences: What problem does the product solve?",
    "Differentiation and value proposition: How does the offering compare to competitors?"]

  }]

},
{
  id: "math-1",
  icon: Calculator,
  stage: "Stage B",
  title: "1-2 Maths on Profitability / Break-Even",
  interviewerText:
  "The interviewer provides numerical information and asks the candidate to calculate a metric such as revenue, profit, break-even point, customer economics, or unit economics.",
  interviewerBullets: [],
  candidateSteps: [
  {
    heading: "Capture all information carefully",
    text: "Pay attention to units (millions vs. thousands), time frame (per month, per year), and level of data (per customer, per store, per product). Even small unit mistakes can lead to incorrect results.",
    example: null
  },
  {
    heading: "Communicate when taking time to think",
    text: "Acknowledge when you need a moment to process the data.",
    example: '"Thank you for the information. May I take a minute to absorb the numbers?"'
  },
  {
    heading: "Clarify any unclear data immediately",
    text: "If any information is ambiguous, confirm it before proceeding. If you don't ask, the interviewer will assume you understood everything correctly.",
    example: null
  },
  {
    heading: "Build a simple equation or structure",
    text: "Break the problem into manageable components. For example: Revenue = Revenue from Source A + Revenue from Source B.",
    example: null
  },
  {
    heading: "Walk through calculations out loud",
    text: "Explain your logic as you compute. This allows the interviewer to follow your reasoning and guide you if necessary.",
    example:
    '"One way we could calculate this is by estimating average revenue per customer and scaling it by total customers."'
  },
  {
    heading: "Conclude clearly",
    text: "Finish with a final answer and interpretation. Calculate additional metrics such as profit margin, react to the result, and suggest a next step.",
    example:
    '"This profit level seems relatively low given the scale of the business. We could now explore ways to increase profitability."'
  }],

  frameworks: []
},
{
  id: "further-questions",
  icon: Brain,
  stage: "Stage C",
  title: "Further Questions",
  interviewerText:
  'Following the initial profitability calculation, the interviewer asks follow-up questions such as "What are your thoughts on the profit level?" or "How could the company improve profitability?" The interviewer is assessing strategic, structural, and practical thinking.',
  interviewerBullets: [],
  candidateSteps: [
  {
    heading: "Divide the problem into clear buckets",
    text: "If focusing on profitability, separate into two primary levers: Increase Revenue and Reduce Costs.",
    example: null
  },
  {
    heading: "Break each bucket into smaller components",
    text: "Within each major bucket, further divide into specific drivers (e.g., number of customers, price per customer, volume per customer, ancillary revenue streams).",
    example: null
  },
  {
    heading: "Provide specific, actionable examples",
    text: 'Avoid vague statements. Instead of "increase customers," say something concrete.',
    example:
    '"Increase customer volume by partnering with travel agencies to offer bundled ticket packages."'
  },
  {
    heading: "Support ideas with quantitative reasoning",
    text: "Incorporate rough numerical logic to strengthen recommendations.",
    example:
    '"If average spend per customer increases by $5 across 15,000 attendees, that would generate an additional $75,000 in revenue."'
  }],

  frameworks: []
},
{
  id: "math-2",
  icon: Target,
  stage: "Stage D",
  title: "Second Quantitative Question (More Advanced)",
  interviewerText:
  "The interviewer introduces a second quantitative problem, usually more complex, such as calculating revenue under a different pricing structure or a shift in customer mix.",
  interviewerBullets: [],
  candidateSteps: [
  {
    heading: "Take time to understand the data",
    text: "Carefully read all assumptions and numbers. Clarify anything unclear.",
    example: '"Thank you for the information. May I take a moment to write down the numbers before starting the calculation?"'
  },
  {
    heading: "Break the problem into smaller components",
    text: "For example, if the problem involves multiple ticket types: Total Revenue = Revenue from Early Bird 1 + Revenue from Early Bird 2 + Revenue from General Tickets.",
    example: null
  },
  {
    heading: "Clearly communicate each step",
    text: "Explain your logic as you proceed, calculate, multiply, and sum step by step.",
    example: null
  },
  {
    heading: "Compare the result with the previous scenario",
    text: "Often the purpose is to compare two scenarios. After calculating, briefly interpret the result.",
    example:
    '"Based on the calculation, the revenue with early bird pricing is lower than the original structure, suggesting the discount may not be justified given current demand."'
  }],

  frameworks: []
},
{
  id: "recommendation",
  icon: CheckCircle,
  stage: "Stage E",
  title: "Final Recommendation",
  interviewerText:
  'The case typically ends with a request for a final recommendation: "What should the client do?"',
  interviewerBullets: [],
  candidateSteps: [
  {
    heading: "Provide a direct answer",
    text: "Start with the conclusion.",
    example:
    '"I recommend that the client focus on improving profitability by increasing customer retention and optimizing operating costs."'
  },
  {
    heading: "Support with 2–3 key reasons",
    text: "Summarize the most important insights from the case.",
    example: null
  },
  {
    heading: "Mention risks and next steps",
    text: "Demonstrate strategic thinking and completeness.",
    example:
    '"Test the retention strategy through a pilot program. Conduct further analysis on marketing efficiency. Monitor customer response to pricing changes."'
  }],

  frameworks: []
}];


const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

const CaseFlow = () =>
<Layout>
    {/* Hero */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <p className="text-accent font-semibold eyebrow uppercase tracking-widest mb-4">Case Flow</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6">How a consulting Case Interview Flows

        </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
            A step-by-step walkthrough of the entire case interview, what the interviewer does, what you should do, and how to stand out at every stage.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Info note */}
    <div className="container mx-auto px-4 py-6">
      <p className="text-sm italic text-muted-foreground text-center max-w-3xl mx-auto border border-border rounded-lg px-5 py-3 bg-card">Note: This case flow is tailored for Business Analyst interviews. Our coaches bring expertise across Consultant, Product Manager and Data Analyst roles as well.

    </p>
    </div>

    {/* Flow overview: visual timeline */}
    <section className="py-20" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto px-4">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            The Five Stages at a Glance
          </h2>
          <p className="text-muted-foreground leading-relaxed">Every case interview follows this general structure. Here's what happens at each stage, and what the interviewer expects from you.

        </p>
        </motion.div>

        {/* Desktop: horizontal flow, Mobile: vertical */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {flowStages.map((stage, i) =>
        <motion.div
          key={stage.letter}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="bg-card rounded-xl border border-border p-7 flex flex-col relative">
          
              <div className="flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-base shrink-0">
                  {stage.letter}
                </span>
                <h3 className="font-display text-base font-bold text-foreground leading-tight">{stage.title}</h3>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-1.5">Interviewer</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{stage.interviewer}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1.5">You Should</p>
                <ul className="space-y-1.5">
                  {stage.candidate.map((c) =>
              <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                      <ArrowRight className="text-accent shrink-0 mt-0.5" size={13} />
                      {c}
                    </li>
              )}
                </ul>
              </div>

              {/* Connector arrow (desktop only) */}
              {i < flowStages.length - 1 &&
          <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="text-accent" size={22} />
                </div>
          }
            </motion.div>
        )}
        </div>
      </div>
    </section>

    {/* Deep-dive sections */}
    {sections.map((section, sIdx) => {
    const Icon = section.icon;
    const isAlt = sIdx % 2 === 0;
    return (
      <section
        key={section.id}
        id={section.id}
        className="py-20"
        style={isAlt ? {} : { background: "var(--section-gradient)" }}>
        
          <div className="container mx-auto px-4">
            <motion.div {...fade} className="max-w-4xl mx-auto">
              {/* Section header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-accent font-semibold text-xs uppercase tracking-widest">{section.stage}</p>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">{section.title}</h2>
                </div>
              </div>

              {/* Interviewer box */}
              <div className="bg-card rounded-lg border border-border p-6 mb-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Users className="text-accent" size={18} />
                  What the Interviewer Does
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{section.interviewerText}</p>
                {section.interviewerBullets.length > 0 &&
              <ul className="space-y-2">
                    {section.interviewerBullets.map((b) =>
                <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                        <ArrowRight className="text-accent shrink-0 mt-0.5" size={14} />
                        {b}
                      </li>
                )}
                  </ul>
              }
              </div>

              {/* Candidate steps */}
              <div className="bg-card rounded-lg border border-border p-6 mb-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
                  <Lightbulb className="text-primary" size={18} />
                  What You Should Do
                </h3>
                <div className="space-y-6">
                  {section.candidateSteps.map((step, i) =>
                <div key={step.heading} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-1">{step.heading}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                        {step.example &&
                    <p className="mt-2 text-sm text-accent italic border-l-2 border-accent/30 pl-3">
                            {step.example}
                          </p>
                    }
                      </div>
                    </div>
                )}
                </div>
              </div>

              {/* Framework boxes (only Stage A) */}
              {section.frameworks.length > 0 &&
            <div className="grid md:grid-cols-2 gap-4">
                  {section.frameworks.map((fw) =>
              <div key={fw.name} className="bg-card rounded-lg border border-border p-6">
                      <h4 className="font-display text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Brain className="text-primary" size={16} />
                        {fw.name}
                      </h4>
                      <ul className="space-y-2">
                        {fw.points.map((p) =>
                  <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="text-success shrink-0 mt-0.5" size={13} />
                            {p}
                          </li>
                  )}
                      </ul>
                    </div>
              )}
                </div>
            }
            </motion.div>
          </div>
        </section>);

  })}

    {/* Key Tip */}
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <motion.div {...fade} className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <AlertTriangle className="text-accent mx-auto mb-4" size={28} />
          <h3 className="font-display text-xl font-bold text-foreground mb-3">Key Tip for Candidates</h3>
          <p className="text-muted-foreground leading-relaxed">
            Throughout the case, the interviewer is evaluating not just your math accuracy, but also your <span className="text-foreground font-semibold">structured problem solving</span>, <span className="text-foreground font-semibold">clear communication</span>, and <span className="text-foreground font-semibold">ability to stay calm</span> while handling complex calculations. A candidate who breaks problems into steps and communicates clearly will perform significantly better than someone who attempts to solve everything mentally.
          </p>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div {...fade}>
          <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
            Ready to Practice the Real Thing?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Book an intro call and walk through a full case with expert feedback at every stage.
          </p>
          <a href="https://forms.gle/pYPeMV8PaXMCNNt59" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">
              Book an Intro Call <ArrowRight size={18} />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  </Layout>;


export default CaseFlow;