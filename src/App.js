import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Blog/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
