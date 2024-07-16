import logo from './logo.svg';
import './App.css';
import Navigation from './Customer/components/Navigation/Navigation';
import HomePage from './Customer/components/Pages/HomePage';
import Product_card from './Customer/components/Product/Product_card';
import Product from './Customer/components/Product/Product';




function App() {
  return (
    <div>
      <Navigation></Navigation>
      {/* <HomePage/> */}
     <Product/>
    </div>
  );
}

export default App;
