import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from '@/utils/ScrollToTop';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
const BFSISkillPortalPage = lazy(() => import('@/pages/BFSISkillPortalPage'));
const BlueCrossPage = lazy(() => import('@/pages/BlueCrossPage'));
const RevisionPrepPage = lazy(() => import('@/pages/RevisionPrepPage'));
const VDTSPage = lazy(() => import('@/pages/VDTSPage'));
const SailyourPage = lazy(() => import('@/pages/SailyourPage'));
const BhoomiBoxPage = lazy(() => import('@/pages/BhoomiBoxPage'));
const FundPitchPage = lazy(() => import('@/pages/FundPitchPage'));
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
          <Route path="/portfolio/bfsi-skill-portal" element={<BFSISkillPortalPage />} />
          <Route path="/portfolio/blue-cross-hyderabad" element={<BlueCrossPage />} />
          <Route path="/portfolio/revision-prep" element={<RevisionPrepPage />} />
          <Route path="/portfolio/vdts" element={<VDTSPage />} />
          <Route path="/portfolio/sailyour-ai" element={<SailyourPage />} />
          <Route path="/portfolio/bhoomibox" element={<BhoomiBoxPage />} />
          <Route path="/portfolio/fundpitch" element={<FundPitchPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
