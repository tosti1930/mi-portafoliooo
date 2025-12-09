import { LanguageProvider } from './context/LanguageContext';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/projects';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
    <LanguageProvider>
      <div className="App bg-[#121212] transition-colors duration-300 dark:bg-[#121212] bg-white">
        <NavBar />
        <Hero />
        <Experience />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;