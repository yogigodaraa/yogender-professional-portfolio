import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeToggle from "../components/common/ThemeToggle";

// Fonts - Using Inter for professional look
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Yogender Godara - Cybersecurity & Network Professional",
  description: "Experienced cybersecurity and networking professional specializing in network security, infrastructure management, and system administration. Explore my expertise and projects.",
  keywords: ["Yogender Godara", "Full Stack Developer", "React Developer", "Next.js", "TypeScript", "Software Engineer", "Web Development", "Portfolio"],
  authors: [{ name: "Yogender Godara" }],
  creator: "Yogender Godara",
  publisher: "Yogender Godara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.vercel.app",
    title: "Yogender Godara - Full Stack Developer",
    description: "Experienced software engineer specializing in modern web development. Explore my projects and technical expertise.",
    siteName: "Yogender Godara Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // You'll need to add this
        width: 1200,
        height: 630,
        alt: "Yogender Godara - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogender Godara - Full Stack Developer",
    description: "Experienced software engineer specializing in modern web development.",
    creator: "@yourtwitterhandle", // Add your Twitter handle
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add after setting up Google Search Console
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen antialiased`}>
        <ThemeProvider>
          {/* Professional Header / Nav */}
          <header className="sticky top-0 z-20 professional-nav">
            <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
              <Link
                href="/"
                className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
              >
                Yogender Godara
              </Link>

              <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/experience">Experience</NavLink>
                <NavLink href="/blogs">Blog</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                <ThemeToggle />
              </nav>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center gap-2">
                <ThemeToggle />
                <button className="p-2 rounded-lg text-neutral-600 hover:text-primary-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </header>

          <main className="animate-fadeIn">{children}</main>

          {/* Professional Footer */}
          <footer className="mt-20 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
            <div className="mx-auto max-w-7xl px-4 py-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary-600 mb-4">Yogender Godara</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    Cybersecurity & Network Professional passionate about securing digital infrastructure 
                    and building robust network solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Quick Links</h4>
                  <div className="space-y-2 text-sm">
                    <div><Link href="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 transition-colors">About</Link></div>
                    <div><Link href="/projects" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 transition-colors">Projects</Link></div>
                    <div><Link href="/experience" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 transition-colors">Experience</Link></div>
                    <div><Link href="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 transition-colors">Contact</Link></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Connect</h4>
                  <div className="space-y-2 text-sm">
                    <div><a href="mailto:your.email@example.com" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 transition-colors">Email</a></div>
                    <div><a href="https://linkedin.com/in/yourprofile" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 transition-colors">LinkedIn</a></div>
                    <div><a href="https://github.com/yourprofile" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 transition-colors">GitHub</a></div>
                  </div>
                </div>
              </div>
              <div className="border-t border-neutral-200 dark:border-neutral-700 mt-8 pt-8 text-center">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  © {new Date().getFullYear()} Yogender Godara. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="professional-nav-link"
    >
      {children}
    </Link>
  );
}
