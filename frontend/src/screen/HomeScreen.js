import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import Products from "../products";
import Product from "../Components/Product";
import axios from "axios";

const HomeScreen = () => 
{
    const [products, setProducts] = useState([])

   useEffect(() => {
        //async funtion to awaiat utill it get data from await
        const fetchProducts = async () => {
           const { data } = await axios.get('/api/products/');
            //    get dara from axios await and store in data
           setProducts(data);
        }
        fetchProducts();
   }, [])

   return (
    <>
        <h1 className='my-3'>Lastest  products</h1>
        <Row>
        {Products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <h3>{product.name}</h3>
                        <product product={product}/>
                    </Col>
            ))}
        </Row>
    </>
)
}
export default HomeScreen;