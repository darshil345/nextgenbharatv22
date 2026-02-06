import { Mail, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">NB</span>
              </div>
              <span className="font-heading font-bold text-lg text-background">NextGen Bharat V2</span>
            </div>
            <p className="text-background/60 text-sm">Student-Led Digital Education Initiative</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:nextgenbharat.education@gmail.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-background/20 hover:text-background transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-background/20 hover:text-background transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-background/20 hover:text-background transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} NextGen Bharat V2. All rights reserved.
          </p>
          <p className="text-background/40 text-sm">
            Contact: nextgenbharat.education@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
