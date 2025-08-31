"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  Droplets,
  ShoppingCart,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Package,
  Recycle,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  Star,
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// COLOR PALETTE
// Primary Green: #064420
// Aqua Accent:   #00BCD4
// Off-white:     #F6FFF8
// Dark:          #0B1A13

export default function OrganicGrowersSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen w-full bg-[#F6FFF8] text-[#0B1A13]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#F6FFF8]/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="The Organic Growers Logo"
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="font-extrabold tracking-tight text-[#064420] text-lg">
                The Organic Growers
              </p>
              <p className="text-xs text-[#00BCD4] -mt-1">
                Organic Today. Healthy Tomorrow.
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#kits" className="hover:text-[#064420]">
              DIY Kits
            </a>
            <a href="#how" className="hover:text-[#064420]">
              How it Works
            </a>
            <a href="#benefits" className="hover:text-[#064420]">
              Benefits
            </a>
            <a href="#pricing" className="hover:text-[#064420]">
              Pricing
            </a>
            <a href="#faq" className="hover:text-[#064420]">
              FAQ
            </a>
            <a href="#contact" className="hover:text-[#064420]">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              className="bg-[#064420] hover:bg-[#064420]/90 hidden md:inline-flex"
              size="sm"
              asChild
            >
              <a href="#pricing">Buy a Kit</a>
            </Button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-[#064420]" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white px-4 py-3 space-y-2 text-sm">
            <a href="#kits" className="block" onClick={() => setMobileMenuOpen(false)}>
              DIY Kits
            </a>
            <a href="#how" className="block" onClick={() => setMobileMenuOpen(false)}>
              How it Works
            </a>
            <a href="#benefits" className="block" onClick={() => setMobileMenuOpen(false)}>
              Benefits
            </a>
            <a href="#pricing" className="block" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </a>
            <a href="#faq" className="block" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
            <a href="#contact" className="block" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
            <Button className="bg-[#064420] hover:bg-[#064420]/90 w-full mt-2" asChild>
              <a href="#pricing">Buy a Kit</a>
            </Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E6FFF0] via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#064420]"
            >
              Grow Fresh Greens at Home — No Soil, No Mess
            </motion.h1>

            <p className="mt-5 text-lg text-[#0B1A13]/80">
              Hydroponic DIY kits designed for Indian homes. Save water, grow faster, and
              harvest pesticide-free lettuce, basil, spinach, and more — right from your
              balcony.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-[#064420] hover:bg-[#064420]/90" size="lg" asChild>
                <a href="#pricing" className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" /> Buy Starter Kit
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#how" className="flex items-center gap-2">
                  <PlayIcon /> See How it Works
                </a>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm">
              <Badge>5 Net Pots per Channel</Badge>
              <Badge>Uses 90% Less Water</Badge>
              <Badge>Setup in 20 Minutes</Badge>
            </div>
          </div>

          {/* HERO MOCKUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl border shadow-xl bg-white p-4 md:p-6">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#d7f7ff] via-white to-[#e7ffef] grid place-items-center">
                <div className="grid gap-4 text-center">
                  <Droplets className="h-10 w-10 mx-auto text-[#00BCD4]" />
                  <p className="font-semibold">NFT Hydroponic Channel (1 m) with 5 Net Pots</p>
                  <p className="text-sm text-muted-foreground">
                    Air pump • Air stone • Nutrients • Cocopeat discs • LECA
                  </p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                {[
                  "Pesticide-free",
                  "Balcony-friendly",
                  "Fast growth",
                  "Low maintenance",
                  "Year-round",
                  "Kid-safe",
                ].map((t, i) => (
                  <div key={i} className="rounded-lg border px-2 py-1 text-center bg-white">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <TrustItem icon={<ShieldCheck className="h-5 w-5" />} title="Food-safe materials" />
          <TrustItem icon={<Recycle className="h-5 w-5" />} title="Reusable & sustainable" />
          <TrustItem icon={<Package className="h-5 w-5" />} title="Flat-pack shipping" />
          <TrustItem icon={<Star className="h-5 w-5" />} title="1-year support" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-extrabold text-[#064420]">How Hydroponics Works</h2>
            <p className="mt-3 text-sm text-[#0B1A13]/80">
              Simple 4-step setup. No soil. Just water and nutrients.
            </p>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Step
              n="01"
              icon={<Sprout className="h-6 w-6" />}
              title="Seed"
              text="Germinate seeds in cocopeat discs for 5–7 days."
            />
            <Step
              n="02"
              icon={<Droplets className="h-6 w-6" />}
              title="Transplant"
              text="Move seedlings to net pots with LECA clay balls."
            />
            <Step
              n="03"
              icon={<Droplets className="h-6 w-6" />}
              title="Circulate"
              text="Add nutrients, run air pump for oxygen-rich water."
            />
            <Step
              n="04"
              icon={<CheckCircle2 className="h-6 w-6" />}
              title="Harvest"
              text="Cut crisp greens in 25–35 days. Repeat."
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-extrabold text-[#064420] text-center">
            Why Choose The Organic Growers?
          </h2>
          <p className="mt-3 text-center text-[#0B1A13]/80">
            Designed in India for Indian homes — balcony to kitchen in minutes.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <BenefitCard title="90% Less Water" desc="Recirculating system uses a fraction of water vs soil." />
            <BenefitCard title="2× Faster Growth" desc="Precise nutrients and oxygen boost plant speed." />
            <BenefitCard title="Clean & Pesticide-Free" desc="No mud, no pests. Just fresh crunchy greens." />
          </div>
        </div>
      </section>

      {/* KITS */}
      <section id="kits" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[#064420]">DIY Kit Line-up</h2>
            <p className="text-sm text-[#0B1A13]/80 mt-2">
              All kits include: NFT channel, 5 net pots, cocopeat discs, LECA, air pump + stone,
              nutrients, tubing, end caps.
            </p>
          </div>
          <a href="#pricing" className="text-[#064420] underline underline-offset-4">
            See pricing
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <KitCard
            badge="Best for Beginners"
            title="Starter NFT 1 m (5 plants)"
            points={["Fits any balcony", "Low noise air pump", "Setup in 20 mins"]}
          />
          <KitCard
            badge="Most Popular"
            title="Dual NFT 2 × 1 m (10 plants)"
            points={["Grow 2 varieties", "Shared pump", "Space-efficient rack"]}
          />
          <KitCard
            badge="Family Pack"
            title="Triple NFT 3 × 1 m (15 plants)"
            points={["Weekly harvests", "Add-on reservoir", "Child-friendly"]}
          />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-extrabold text-[#064420] text-center">Simple Pricing</h2>
          <p className="mt-3 text-center text-[#0B1A13]/80">
            Free shipping in India. COD available in metro cities.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <PriceCard
              name="Starter"
              price="₹1,599"
              features={[
                "1 × 1 m NFT channel (5 pots)",
                "Air pump + stone",
                "Nutrients for 1 month",
                "Setup guide (PDF)",
              ]}
            />
            <PriceCard
              name="Dual"
              price="₹3,999"
              highlighted
              features={[
                "2 × 1 m NFT (10 pots)",
                "Single shared pump",
                "Nutrients for 2 months",
                "WhatsApp support",
              ]}
            />
            <PriceCard
              name="Family"
              price="₹5,999"
              features={[
                "3 × 1 m NFT (15 plants)",
                "Large reservoir",
                "Nutrients for 3 months",
                "Free seed pack",
              ]}
            />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#064420]">Loved by Home Growers</h3>
            <p className="text-sm text-[#0B1A13]/80 mt-2">
              From Nagpur to New Delhi — 1000+ greens harvested with our kits.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4" /> “Coriander in 28 days. Kids loved it!” — Rhea S.
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4" /> “Setup was super easy. Balcony looks cool now.” — Nikhil K.
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4" /> “Finally, pesticide-free salad at home.” — Aditi P.
              </li>
            </ul>
          </div>

        <div className="rounded-2xl border bg-white p-6">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-[#eafff5] to-white grid place-items-center">
              <div className="text-center">
                <BookOpen className="h-8 w-8 mx-auto text-[#064420]" />
                <p className="mt-2 font-medium">Download the Quick Start Guide (PDF)</p>
                <p className="text-xs text-[#0B1A13]/70">
                  Step-by-step setup • Troubleshooting • Nutrient schedule
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-extrabold text-[#064420] text-center">FAQs</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm">
            <Faq
              q="Will mosquitoes breed in the water?"
              a="No. Water is enclosed and aerated; keep the lid closed and change water every 2 weeks."
            />
            <Faq
              q="Power usage of the pump?"
              a="Very low (~3–5W). You can run it 8–12 hours/day."
            />
            <Faq
              q="Which plants grow best?"
              a="Lettuce, basil, spinach, coriander, mint, and leafy greens. Avoid root veggies."
            />
            <Faq
              q="Is it safe for kids and pets?"
              a="Yes. No soil, minimal mess. Keep nutrients away from direct ingestion."
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-[#064420]">Get in touch</h2>
            <p className="mt-2 text-sm text-[#0B1A13]/80">
              Bulk/wholesale, schools, or apartment societies — we love collaborations.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91-8668513017
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@theorganicgrowers.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Nagpur, Maharashtra
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <Social
                icon={<Instagram className="h-5 w-5" />}
                label="Instagram"
                href="https://www.instagram.com/theorganicgrowerr?igsh=d2ZzcHozYzY5Ymsx"
              />
              <Social
                icon={<Facebook className="h-5 w-5" />}
                label="Facebook"
                href="https://www.facebook.com/share/16K61MjpYh/"
              />
              <Social
                icon={<Youtube className="h-5 w-5" />}
                label="YouTube"
                href="https://www.youtube.com/@theorganicgrowers"
              />
            </div>
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Quick enquiry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                <Input placeholder="Your name" />
                <Input placeholder="Email or WhatsApp" />
              </div>
              <Textarea rows={5} placeholder="Tell us what you want to grow…" />
              <Button className="bg-[#064420] hover:bg-[#064420]/90 w-full">Send Message</Button>
              <p className="text-xs text-[#0B1A13]/70">
                We’ll reply in 24 hours. By submitting, you agree to our privacy policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} The Organic Growers. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#064420]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#064420]">
              Terms
            </a>
            <a href="#" className="hover:text-[#064420]">
              Refunds
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Reusable bits ---------- */

function Badge({ children }: React.PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs bg-white">
      {children}
    </span>
  );
}

function TrustItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-full bg-[#064420]/10 grid place-items-center text-[#064420]">
        {icon}
      </div>
      <p className="font-medium">{title}</p>
    </div>
  );
}

function Step({
  n,
  icon,
  title,
  text,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-[#064420] text-white grid place-items-center font-bold">
          {n}
        </div>
        <div className="h-9 w-9 rounded-full bg-[#00BCD4]/10 grid place-items-center text-[#064420]">
          {icon}
        </div>
      </div>
      <h4 className="mt-4 font-bold">{title}</h4>
      <p className="text-sm text-[#0B1A13]/80">{text}</p>
    </div>
  );
}

function BenefitCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-[#064420]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[#0B1A13]/80">{desc}</p>
      </CardContent>
    </Card>
  );
}

function KitCard({ badge, title, points }: { badge: string; title: string; points: string[] }) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded-full bg-[#00BCD4]/10 text-[#064420] border">
            {badge}
          </span>
          <Droplets className="h-5 w-5" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5" /> {p}
            </li>
          ))}
        </ul>
        <Button className="mt-4 w-full bg-[#064420] hover:bg-[#064420]/90" asChild>
          <a href="#pricing" className="flex items-center justify-center gap-2">
            Choose <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

function PriceCard({
  name,
  price,
  highlighted,
  features,
}: {
  name: string;
  price: string;
  highlighted?: boolean;
  features: string[];
}) {
  return (
    <Card className={"bg-white " + (highlighted ? "ring-2 ring-[#00BCD4] shadow-lg" : "")}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{name}</span>
          {highlighted && (
            <span className="text-xs px-2 py-1 rounded-full bg-[#00BCD4]/10 text-[#064420] border">
              Most value
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-extrabold text-[#064420]">{price}</p>
        <ul className="mt-4 space-y-2 text-sm">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5" /> {f}
            </li>
          ))}
        </ul>
        <Button className="mt-6 w-full bg-[#064420] hover:bg-[#064420]/90">Add to Cart</Button>
      </CardContent>
    </Card>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5">
      <p className="font-semibold">{q}</p>
      <p className="text-sm text-[#0B1A13]/80 mt-2">{a}</p>
    </div>
  );
}

function Social({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 hover:bg-[#064420]/5"
    >
      {icon} <span className="text-sm">{label}</span>
    </a>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
