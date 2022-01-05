import './App.css';
import Header from "./Components/header";
import Footer from "./Components/footer";
import { Container } from "react-bootstrap";
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from './screen/ProductScreen';

function App() 
{
  return (
    <Router>
      <Header />
      <Container>
       <main className="py-3">
        
          <HomeScreen/>
          {/* <Route path="/" component={HomeScreen} exact /> */}
          {/* <Route path="/product/:id" component={ProductScreen} /> */}
    
       </main>
    </Container>
    <Footer />

     </Router>


  );
}

export default App;
