import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#212529] text-white">
      <div className="container px-4 py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              About MGVP
            </h4>
            <p className="text-sm leading-relaxed opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Mithila Gram Vikas Parishad works on community development in the Mithila region, focusing on women's empowerment, child education, and environmental conservation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <li>
                <Link to="/about" className="text-accent hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="text-accent hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/impact-stories" className="text-accent hover:text-white transition-colors">
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-accent hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-accent hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Resources
            </h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <li>
                <Link to="/annual-report" className="text-accent hover:text-white transition-colors">
                  Annual Report
                </Link>
              </li>
              <li>
                <Link to="/transparency" className="text-accent hover:text-white transition-colors">
                  Financial Transparency
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-accent hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-accent hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-accent hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Connect With Us
            </h4>
            
            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all"
                  aria-label="Social media link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/70" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            © {currentYear} Mithila Gram Vikas Parishad. All rights reserved. | Designed with ❤️ for impact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
