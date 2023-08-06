import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>
      <BookingForm/>
    </div>
  );
}

export default App;
