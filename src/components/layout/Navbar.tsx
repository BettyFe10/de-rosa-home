import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const megaMenuGroups = [
  {
    label: "Prodotti",
    items: [
      { name: "Superfici", href: "/categoria/superfici", desc: "Gres, marmi, parquet" },
      { name: "Arredo Bagno", href: "/categoria/arredo-bagno", desc: "Il nostro focus: sanitari, mobili e rubinetteria", featured: true },
      { name: "Porte e Infissi", href: "/categoria/porte-infissi", desc: "Porte interne, finestre" },
      { name: "Outdoor", href: "/categoria/outdoor", desc: "Pergole, pavimenti esterni" },
      { name: "Wellness", href: "/categoria/wellness", desc: "Saune, vasche, hammam" },
      { name: "Caminetti", href: "/categoria/caminetti", desc: "Bioetanolo, legna, gas" },
    ],
  },
  {
    label: "Arredamento",
    items: [
      { name: "Cucina", href: "/categoria/arredamento/cucina", desc: "Cucine su misura" },
      { name: "Living", href: "/categoria/arredamento/living", desc: "Divani, librerie, tavoli" },
      { name: "Camera da Letto", href: "/categoria/arredamento/camera", desc: "Letti, armadi, complementi" },
      { name: "Lavanderia", href: "/categoria/arredamento/lavanderia", desc: "Mobili e accessori" },
    ],
  },
];

const directLinks = [
  { name: "Imprese Edili", href: "/imprese-edili" },
  { name: "Showroom", href: "/showroom" },
  { name: "Contatti", href: "/contatti" },
  { name: "E-commerce", href: "/e-commerce" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-display text-2xl font-bold tracking-tight text-foreground">
              De Rosa <span className="text-tortora-dark">Home</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            <Link
              to="/"
              className={cn(
                "text-xs font-medium transition-colors hover:text-tortora-dark py-2 uppercase tracking-wider",
                isActive("/") ? "text-tortora-dark" : "text-foreground"
              )}
            >
              Home
            </Link>

            {/* Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-xs font-medium transition-colors hover:text-tortora-dark py-2 uppercase tracking-wider",
                  megaOpen ? "text-tortora-dark" : "text-foreground"
                )}
              >
                Catalogo
                <ChevronDown className={cn("w-3 h-3 transition-transform", megaOpen && "rotate-180")} />
              </button>

              {/* Mega Menu Dropdown */}
              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-background border border-border rounded-xl shadow-xl p-6 min-w-[640px] grid grid-cols-2 gap-8">
                    {megaMenuGroups.map((group) => (
                      <div key={group.label}>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3 block">
                          {group.label}
                        </span>
                        <div className="flex flex-col gap-1">
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className={cn(
                                "group rounded-lg px-3 py-2 transition-colors hover:bg-secondary",
                                item.featured && "bg-secondary/70 ring-1 ring-tortora/40",
                                isActive(item.href) && "bg-secondary"
                              )}
                            >
                              <span className={cn(
                                "text-sm font-medium block group-hover:text-tortora-dark transition-colors",
                                isActive(item.href) ? "text-tortora-dark" : "text-foreground"
                              )}>
                                {item.name}
                                {item.featured && (
                                  <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-tortora/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-tortora-dark border border-tortora/20">
                                    <Star className="h-2 w-2 fill-tortora-dark" />
                                    Best Seller
                                  </span>
                                )}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            {directLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-xs font-medium transition-colors hover:text-tortora-dark py-2 uppercase tracking-wider",
                  isActive(link.href) ? "text-tortora-dark" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center gap-4">
            <Link to="/contatti">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                <Phone className="w-4 h-4 mr-2" />
                Consulenza
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] overflow-y-auto">
              <div className="flex flex-col gap-1 mt-8">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium py-2 transition-colors hover:text-tortora-dark",
                    isActive("/") ? "text-tortora-dark" : "text-foreground"
                  )}
                >
                  Home
                </Link>

                {megaMenuGroups.map((group) => (
                  <div key={group.label} className="mt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1 block">
                      {group.label}
                    </span>
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block py-1.5 pl-2 text-sm transition-colors hover:text-tortora-dark",
                          isActive(item.href) ? "text-tortora-dark" : "text-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}

                <div className="mt-3 pt-3 border-t border-border flex flex-col gap-1">
                  {directLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-base font-medium py-2 transition-colors hover:text-tortora-dark",
                        isActive(link.href) ? "text-tortora-dark" : "text-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-4 border-t border-border mt-3">
                  <Link to="/contatti" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Phone className="w-4 h-4 mr-2" />
                      Prenota Consulenza
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
