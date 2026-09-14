import { Link } from "react-router-dom";
import { Mail, MessageCircle, Calendar, Youtube } from "lucide-react";

const Footer = () =>
<footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg font-bold mb-3">
            Capital <span className="text-accent">Interview</span>
          </h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">Professional interview coaching to help you land your dream role at top banks and consulting companies

        </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider text-primary-foreground/80">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2">
           {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/mock-interview", label: "Mock Interview" },
          { to: "/case-flow", label: "Case Flow" },
          { to: "/testimonials", label: "Testimonials" }].
          map((link) =>
          <Link
            key={link.to}
            to={link.to}
            className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            
                {link.label}
              </Link>
          )}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider text-primary-foreground/80">
            Contact
          </h4>
          <div className="flex flex-col gap-2">
            <a
            href="https://wa.me/917428769544"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-2">
            
              <MessageCircle size={14} />
              WhatsApp us: +91 74287 69544
            </a>
            <a
            href="mailto:hello@capitalinterview.com"
            className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-2">
            
              <Mail size={14} />
               hello@capitalinterview.com
            </a>
            <a
            href="https://forms.gle/pYPeMV8PaXMCNNt59"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-2">
              <Calendar size={14} />
              Book an Intro Call
            </a>
            <a
            href="https://www.youtube.com/@Capitalinterview/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-2">
              <Youtube size={14} />
              YouTube Channel
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Capital Interview. All rights reserved.
      </div>
      <p className="mt-4 text-center text-[11px] text-primary-foreground/30 max-w-3xl mx-auto leading-relaxed">
        This website is an independent interview preparation platform and is not affiliated with, endorsed by, or sponsored by Capital One. Capital One is a registered trademark of Capital One Financial Corporation.
      </p>
    </div>
  </footer>;


export default Footer;