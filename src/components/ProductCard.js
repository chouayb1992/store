import React from 'react';
import {Card , Button} from 'react-bootstrap';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

export function ProductCard ({product}) {

 const {name, image, description, brand, category, price, rating, numReviews} = product;
    
 return(

     <div> 
       
              <Card  style={{ width: '19rem' }}>
              <Card.Img variant="top"  src={image}  alt={name} />
              <Card.Body>
              <h3>{name}</h3> 
              <h6>{description} </h6>
              <h1>{brand} </h1>
              <h3>{category}</h3> 
              <h6>{price} </h6>
              <Rating name="read-only" value={rating} readOnly />
              <h1>{numReviews} </h1>
              <Link to={`/detail/${product.id}`}><Button>Product Details</Button></Link>
              </Card.Body>
            </Card>
      
    </div>
    
        
    )}