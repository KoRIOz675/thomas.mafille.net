import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './content/Home';
import About from './content/About';
import Tech from './content/Tech';
import ProjectListPage from './content/Project';
import Experience from './content/Experience';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { useEffect } from 'react';

const MainPageLayout = () => (
  <>
    <Home />
    <About />
    <Tech />
    <ProjectListPage />
    <Experience />
  </>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPageLayout />} />
        <Route path="/projects/:projectSlug" element={<ProjectDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
