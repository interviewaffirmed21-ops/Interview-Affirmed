import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "@/components/ContactModal";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/mock-interview", label: "Mock Interview" },
  { to: "/case-flow", label: "Case Flow" },
  { to: "/testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="font-display text-xl font-bold text-primary-foreground tracking-tight">
            Capital <span className="text-accent">Interview</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary-foreground/15 text-primary-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="https://forms.gle/pYPeMV8PaXMCNNt59" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="ml-3 border-accent text-accent hover:bg-accent/10 hover:text-accent">
                Book an Intro Call
              </Button>
            </a>
            <Button variant="hero" size="sm" className="ml-2" onClick={() => setContactOpen(true)}>
              Contact Us
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-primary border-t border-primary-foreground/10 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.to
                        ? "bg-primary-foreground/15 text-primary-foreground"
                        : "text-primary-foreground/70 hover:text-primary-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a href="https://forms.gle/pYPeMV8PaXMCNNt59" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full mt-2 border-accent text-accent hover:bg-accent/10 hover:text-accent"
                  >
                    Book an Intro Call
                  </Button>
                </a>
                <Button
                  variant="hero"
                  className="w-full mt-2"
                  onClick={() => {
                    setOpen(false);
                    setContactOpen(true);
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Navbar;
