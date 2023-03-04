import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import ProductImage from './Components/ProductImage/ProductImage';
import ProductNews from './Components/ProductNews/ProductNews';
import Products from './Components/Products/Products';
import Testimonial from './Components/Testimonials/Testimonial';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductImage/>
      <ProductNews/>
      <Products/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
