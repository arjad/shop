import './App.css';
import Header from "./Components/header";
import Footer from "./Components/footer";
import { Container } from "react-bootstrap"

function App() 
{
  return (
    <>
    <Header/>
      <main>
      <Container>
        <h1>welcome to vvork shop</h1>
      </Container>
      </main>
    <Footer/>
    </>
  );
}

export default App;
