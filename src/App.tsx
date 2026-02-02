import './styles/global.css';
import Navigation from './components/Navigation';
import HeroPage from './pages/HeroPage';
import SoftwarePage from './pages/SoftwarePage';
import BIMPage from './pages/BIMPage';
import HardwarePage from './pages/HardwarePage';
import AppPage from './pages/AppPage';
import ContactPage from './pages/ContactPage';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'software', label: 'Software & AI' },
  { id: 'bim', label: 'BIM & 3D' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'app', label: 'Mobile Apps' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  return (
    <>
      <Navigation sections={sections} />
      <div className="full-page-container">
        <HeroPage />
        <SoftwarePage />
        <BIMPage />
        <HardwarePage />
        <AppPage />
        <ContactPage />
      </div>
    </>
  );
}

export default App;
