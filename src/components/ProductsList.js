import React from 'react';
import {ProductCard} from './ProductCard';


function ProductsList({products, searchText, searchRating}) {

    return (


        <div>


            <h2>Products List:</h2>
            <div className="products-list" style={{display : "flex" , justifyContent :"space-around",   flexWrap: "wrap"}}>
                {products
                .filter((product)=>product.name.toLowerCase().includes(searchText.toLowerCase().trim()) && product.rating >= searchRating)
                .map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductsList;