import { Facebook, Twitter, Linkedin, Instagram, Rss } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Rss className="h-5 w-5" />, href: '/blog/rss.xml', label: 'Blog RSS' },
  ];

  return (
    <footer className="border-t border-border/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Entelequia Analytics. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((linkInfo) => (
              <Link key={linkInfo.label} href={linkInfo.href} aria-label={linkInfo.label} legacyBehavior>
                <a target={linkInfo.href.startsWith('/') ? '_self' : '_blank'} rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                  {linkInfo.icon}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-muted-foreground/70">
            El arte de gobernar con datos.
          </p>
        </div>
      </div>
    </footer>
  );
}
