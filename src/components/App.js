import '../styles/App.css';
import Header from './Header.js'
import Navigation from './Navigation';
import AboutUs from '../pages/AboutUs';
import Offer from '../pages/Offer';
import Gallery from '../pages/Gallery.js';
import Contact from '../pages/Contact.js';


function App() {
  return (
    <div class='html'>
        <Navigation/>
        <Header/>
        <div class='body'>
          <AboutUs/>
          <Offer/>
          <Gallery/>
          <Contact/>
        </div>
    </div>
  );
}

export default App;
