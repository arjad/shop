import './App.css';
import { Container } from "react-bootstrap";
import { Route, Switch } from 'react-router-dom';

//pages
import Header from "./Components/header";
import Footer from "./Components/footer";
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';

function App() 
{
  return (
    <div>
      
      <Header />
      <Container>
      <main>
        <Switch>
          <Route path='/' exact>
            <HomeScreen />            
          </Route>
          <Route path='/product/:id' exact>
            <ProductScreen />            
          </Route>
            
        </Switch>
      </main>
      </Container>
      <Footer />

    </div>
  );
}
export default App;
