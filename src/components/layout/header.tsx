import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Brain } from 'lucide-react'; // Using Brain as a placeholder logo icon

const navItems = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#blog' },
  { label: 'Contacto', href: '#contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glassmorphic">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Placeholder logo - resembling Cambridge Analytica logo */}
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/80 text-primary-foreground">
            <Brain className="h-6 w-6" />
          </div>
          <span className="text-2xl font-manrope font-bold text-foreground">
            Entelequia<span className="text-secondary">Analytics</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent">
            Solicitar Demo
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/80 backdrop-blur-lg border-l-border/50">
              <nav className="flex flex-col gap-6 pt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
                  Solicitar Demo
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
