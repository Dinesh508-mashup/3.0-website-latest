import { useReveal } from '@/hooks/useReveal';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { ProductsShipped } from '@/sections/ProductsShipped';
import { Services } from '@/sections/Services';
import { CaseStudies } from '@/sections/CaseStudies';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';

export default function HomePage() {
  useReveal();
  return (
    <>
      <title>3.0 Labs — Engineering Ideas Into Intelligent Products</title>
      <meta
        name="description"
        content="3.0 Labs designs and ships AI-powered software — full-stack applications, automation workflows, and autonomous agents — for founders building what's next."
      />
      <Navbar />
      <Hero />
      <ProductsShipped />
      <Services />
      <CaseStudies />
      <CTA />
      <Footer />
    </>
  );
}
