import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import ProductImage from './Components/productimage/ProductImage';
import ProductNews from './Components/ProductNews/ProductNews';
import Placeholder from './Components/Placeholder/Placeholder';
import Testimonial from './Components/testimonials/Testimonial';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductImage/>
      <ProductNews/>
      <Placeholder/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
