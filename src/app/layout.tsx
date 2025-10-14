"use client";

import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.title = "Yogender Godara - Cybersecurity & Network Professional";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experienced cybersecurity and networking professional specializing in network security, infrastructure management, and system administration.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Experienced cybersecurity and networking professional specializing in network security, infrastructure management, and system administration.';
      document.head.appendChild(meta);
    }
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header 
      className="sticky top-0 z-20 backdrop-blur-sm border-b"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)'
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold transition-colors"
          style={{ color: 'var(--primary)' }}
        >
          Yogender Godara
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/experience">Experience</NavLink>
          <NavLink href="/blogs">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <ThemeButton />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="transition-colors nav-link"
      style={{ color: 'var(--muted-foreground)' }}
    >
      {children}
    </Link>
  );
}

function ThemeButton() {
  return (
    <button
      className="p-2 rounded-lg transition-colors theme-toggle"
      style={{
        backgroundColor: 'var(--secondary)',
        color: 'var(--secondary-foreground)'
      }}
      onClick={() => {
        if (typeof window !== 'undefined') {
          const html = document.documentElement;
          const isDark = html.classList.contains('dark');
          if (isDark) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
          } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          }
        }
      }}
      aria-label="Toggle theme"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  );
}

function Footer() {
  return (
    <footer 
      className="mt-20 border-t"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)'
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--primary)' }}>
              Yogender Godara
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Cybersecurity & Network Professional passionate about securing digital infrastructure
              and building robust network solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
              Quick Links
            </h4>
            <div className="space-y-2 text-sm">
              <div><FooterLink href="/about">About</FooterLink></div>
              <div><FooterLink href="/projects">Projects</FooterLink></div>
              <div><FooterLink href="/experience">Experience</FooterLink></div>
              <div><FooterLink href="/contact">Contact</FooterLink></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
              Connect
            </h4>
            <div className="space-y-2 text-sm">
              <div><FooterLink href="mailto:your.email@example.com">Email</FooterLink></div>
              <div><FooterLink href="https://www.linkedin.com/in/yogender-godara/">LinkedIn</FooterLink></div>
              <div><FooterLink href="https://github.com/yogigodaraa">GitHub</FooterLink></div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: 'var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
            © {new Date().getFullYear()} Yogender Godara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="transition-colors footer-link"
      style={{ color: 'var(--muted-foreground)' }}
    >
      {children}
    </Link>
  );
}
