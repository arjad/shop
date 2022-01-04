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
    <>fdd
    <Header />d
dfgd
    <Router>
      <Header />
       <main className="py-3">
         dfd
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>

       </main>
     </Router>
     <Footer />


    </>
  );
}

export default App;
