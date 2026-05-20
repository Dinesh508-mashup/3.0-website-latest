import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from '@/utils/ScrollToTop';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
const TeamPage = lazy(() => import('@/pages/TeamPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

function PageFallback() {
  return <div style={{ minHeight: '100vh', background: 'var(--bg)' }} aria-hidden="true" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
