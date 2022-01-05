import { Row, Col } from "react-bootstrap"
import Products from "../product";
import product from "../Components/Product";
import React, { useEffect, useState } from 'react';
import axios from "axios";

const HomeScreen = () => {

    const [products, setProducts] = useState([])
   useEffect(() => {

       const fetchProducts = async () => {
           const { data } = await axios.get('/api/products/')
           setProducts(data)
       }
       fetchProducts()
   }, [])

   return (
    <>
    <h1>Lastest  products</h1>
      <Row>
        {Products.map(product => (
            <Col sm={12} md={6} lg={4} xl={3}>
                <h3>{product.name}</h3>
            </Col>
        ))}
     </Row>
    </>
)
}
export default HomeScreen;