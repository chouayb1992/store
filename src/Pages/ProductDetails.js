import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails({productsList}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = productsList.find((el)=>el.id == id)
    return (

        <>
        
             <h3>{product.name}</h3> 
             <img src={product.image}/> 
             <Button onClick={()=>navigate(-1)}>Back</Button>
        </>  
    
    );
}

export default ProductDetails;