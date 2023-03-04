import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo1 from "../../Photos/Access Control System.jpg";
import './Products.css'

const productArray = [1, 2, 3, 4, 5, 6, 7, 8,9,10]

const Products = () => {
    return (
        <div>
            <h1 className='text-center'>Solution Overview</h1>
            <div className='wrapper'>
                <div className="d-flex flex-wrap justify-content-evenly">
                {
                    productArray.map((product, index)=>{
                        
                        return <Card className="m-3" key={index} style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={photo1} style={{ height: '10rem' }}/>
                        <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    }) 
                    
                        
                }
                </div>
            </div>
        </div>
    );
}

export default Products;


