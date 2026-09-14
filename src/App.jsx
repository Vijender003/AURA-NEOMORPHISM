import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Devices from './pages/Devices';
import DeviceDetail from './pages/DeviceDetail';
import Intelligence from './pages/Intelligence';
import Dashboard from './pages/Dashboard';
import Routines from './pages/Routines';
import Technology from './pages/Technology';
import Journal from './pages/Journal';
import JournalArticle from './pages/JournalArticle';
import About from './pages/About';
import Contact from './pages/Contact';
import Build from './pages/Build';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="devices" element={<Devices />} />
          <Route path="device/:id" element={<DeviceDetail />} />
          <Route path="intelligence" element={<Intelligence />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="routines" element={<Routines />} />
          <Route path="technology" element={<Technology />} />
          <Route path="journal" element={<Journal />} />
          <Route path="journal/:id" element={<JournalArticle />} />
          <Route path="build" element={<Build />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
