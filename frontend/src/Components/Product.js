import React from 'react'
import { Card } from "react-bootstrap"
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    return (<>
    <Card className="my-3 p-3 rounded">
            <Link href="{`/product/${product._id}`}">
                <Card.Img src={product.image} variant="top" />


            </Link>
        <Card.Body>
            <Link href="{`/product/${product._id}`}">
                 <Card.Title as="div">
                     <strong>{product.name}</strong>
                 </Card.Title>
             </Link>
             <Card.Text as='div'>
                 <div className='my-3'>
                     {product.rating} from {product.numReviews} reviews
                  </div>
             </Card.Text>
             <Card.Text as='h3'>${product.price}</Card.Text>
    
        </Card.Body>
        
        <Card.Text as='div'>
            <Rating />
        </Card.Text>
    </Card>
    </>)
}
export default Product