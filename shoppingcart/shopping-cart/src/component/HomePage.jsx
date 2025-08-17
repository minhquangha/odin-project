import { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { useOutletContext } from 'react-router-dom';

export default function HomePage() {
    const [products, setProducts] = useState([]);
    const [count,setCount] = useOutletContext();
    const dialog = useRef();

    function countProduct() {
        setCount(count+1);
        dialog.current.classList.toggle("show");
    }
    function toggle() {
        dialog.current.classList.toggle("show");
    }
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
                console.log(products);
            });
    }, []);
    return (
        <div className='home'>
            <div className='hero'>
                <div className='heroContent'>
                    <h1>New Fashion Collection 2025</h1>
                    <p>Elevate your style with our exclusive designs</p>
                    <a href='#shop' className='btn'>
                        Shop Now
                    </a>
                </div>
            </div>
            <div className='shop' id='shop'>
                <h2>Product</h2>
                <div className='products'>
                    {products.map((product) => {
                        return <Card name={product.title} key={product.title} img={product.image} onClick={countProduct} />;
                    })}
                </div>
            </div>
            <div className="dialog" ref={dialog}  >
                    <h1>You added it </h1>
                    <button onClick={toggle}>OK</button>
            </div>
        </div>
    );
}
