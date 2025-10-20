import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Dhondhu Kishore - Software Developer Portfolio",
  description:
    "Explore the portfolio of Dhondhu Kishore, a software developer specializing in Java, Spring Boot, and microservices. Discover projects, skills, and professional experience.",
  keywords: [
    "Dhondhu Kishore",
    "Software Developer",
    "Java",
    "Spring Boot",
    "Microservices",
    "React",
    "Docker",
    "REST APIs",
    "Portfolio",
    "Tirupati",
    "India",
  ],
  authors: [{ name: "Dhondhu Kishore" }],
  creator: "Dhondhu Kishore",
  publisher: "Dhondhu Kishore",
  metadataBase: new URL("https://dhondhukishore.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dhondhukishore.com",
    title: "Dhondhu Kishore - Software Developer Portfolio",
    description:
      "Personal portfolio of Dhondhu Kishore, showcasing skills in Java, Spring Boot, microservices, and React.",
    siteName: "Dhondhu Kishore's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhondhu Kishore - Software Developer Portfolio",
    description:
      "Personal portfolio showcasing skills in Java, Spring Boot, and microservices.",
    creator: "@kishor__2",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* Font Preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Skill Icons Preconnect */}
        <link rel="preconnect" href="https://skillicons.dev" />

        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dhondhu Kishore",
              url: "https://dhondhukishore.com",
              jobTitle: "Software Developer",
              description:
                "Personal portfolio showcasing skills in Java, Spring Boot, and building scalable microservices.",
              knowsAbout: [
                "Java",
                "Spring Boot",
                "Microservices",
                "React",
                "Docker",
                "MySQL",
                "REST APIs",
                "Software Development",
              ],
              sameAs: [
                "https://github.com/kishoredhondhu",
                "https://www.linkedin.com/in/dhondhukishore",
                "https://x.com/kishor__2",
              ],
            }),
          }}
        />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}