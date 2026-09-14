import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Mail, MessageCircle } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-xl font-display">Contact Us</DialogTitle>
        <DialogDescription>
          Reach out to us via email or WhatsApp.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4 mt-4">
        <a
          href="mailto:hello@capitalinterview.com"
          className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <Mail className="text-accent" size={20} />
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">Email Us</p>
            <p className="text-sm text-muted-foreground">hello@capitalinterview.com</p>
          </div>
        </a>
        <a
          href="https://wa.me/917428769544"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
            <MessageCircle className="text-green-600" size={20} />
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">WhatsApp Us</p>
            <p className="text-sm text-muted-foreground">+91 74287 69544</p>
          </div>
        </a>
      </div>
    </DialogContent>
  </Dialog>
);

export default ContactModal;
