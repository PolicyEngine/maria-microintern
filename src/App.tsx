import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import useKeypress from 'react-use-keypress';
import Navigation from './components/Navigation';
import SlideContainer from './components/SlideContainer';
import BackgroundSection from './sections/BackgroundSection';
import WorkSection from './sections/WorkSection';
import ReflectionSection from './sections/ReflectionSection';
import IntroSlide from './sections/IntroSlide';
import LondonSection from './sections/LondonSection';
import MicroimputePage from './sections/projects/MicroimputePage';
import MicrocalibratePage from './sections/projects/MicrocalibratePage';
import ParameterUpdatesPage from './sections/projects/ParameterUpdatesPage';
import CrossRepoPage from './sections/projects/CrossRepoPage';
import CongressionalDistrictsPage from './sections/projects/CongressionalDistrictsPage';
import DataSchemaPage from './sections/projects/DataSchemaPage';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const slides = [
  { path: '/', component: IntroSlide, name: 'Intro' },
  { path: '/background', component: BackgroundSection, name: 'Background' },
  { path: '/work', component: WorkSection, name: 'My work' },
  { path: '/london', component: LondonSection, name: 'London' },
  { path: '/reflection', component: ReflectionSection, name: 'Reflection' },
];

function PresentationApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useKeypress(['ArrowLeft', 'ArrowRight'], (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight' && currentSlide < slides.length - 1) {
      const nextSlide = currentSlide + 1;
      setCurrentSlide(nextSlide);
      navigate(slides[nextSlide].path);
    } else if (event.key === 'ArrowLeft' && currentSlide > 0) {
      const prevSlide = currentSlide - 1;
      setCurrentSlide(prevSlide);
      navigate(slides[prevSlide].path);
    }
  });

  useEffect(() => {
    const currentPath = location.pathname;
    const slideIndex = slides.findIndex(slide => slide.path === currentPath);
    if (slideIndex !== -1) {
      setCurrentSlide(slideIndex);
    }
  }, [location]);

  const isProjectPage = location.pathname.startsWith('/projects/');

  return (
    <AppContainer>
      {!isProjectPage && (
        <Navigation 
          slides={slides} 
          currentSlide={currentSlide} 
          onNavigate={(index) => {
            setCurrentSlide(index);
            navigate(slides[index].path);
          }}
        />
      )}
      <AnimatePresence mode="wait">
        <Routes>
          {slides.map(slide => (
            <Route 
              key={slide.path}
              path={slide.path} 
              element={
                <SlideContainer>
                  <slide.component />
                </SlideContainer>
              } 
            />
          ))}
          <Route path="/projects/microimpute" element={<MicroimputePage />} />
          <Route path="/projects/microcalibrate" element={<MicrocalibratePage />} />
          <Route path="/projects/parameter-updates" element={<ParameterUpdatesPage />} />
          <Route path="/projects/cross-repo" element={<CrossRepoPage />} />
          <Route path="/projects/congressional-districts" element={<CongressionalDistrictsPage />} />
          <Route path="/projects/data-schema" element={<DataSchemaPage />} />
        </Routes>
      </AnimatePresence>
    </AppContainer>
  );
}

function App() {
  return (
    <Router>
      <PresentationApp />
    </Router>
  );
}

export default App;