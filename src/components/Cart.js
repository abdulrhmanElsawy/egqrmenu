import './css/cart.css';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Retrieve bookmarked products from local storage
        const bookmarkedProducts = JSON.parse(localStorage.getItem('bookmarkedProducts')) || [];
        setCartItems(bookmarkedProducts);

        // Calculate subtotal and total
        let calculatedSubtotal = 0;
        bookmarkedProducts.forEach(item => {
            calculatedSubtotal += parseFloat(item.price);
        });
        setSubtotal(calculatedSubtotal);
        setTotal(calculatedSubtotal); // Adjust this if you need to add tax or service charge
    }, []);

    const handleRemoveItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem('bookmarkedProducts', JSON.stringify(updatedCartItems));

        // Update subtotal and total
        let calculatedSubtotal = 0;
        updatedCartItems.forEach(item => {
            calculatedSubtotal += parseFloat(item.price);
        });
        setSubtotal(calculatedSubtotal);
        setTotal(calculatedSubtotal); // Adjust this if you need to add tax or service charge
    };

    return (
        <>
            <section className='cart'>
                <div className='container'>
                    <div className='cart-content'>
                        {cartItems.map((item, index) => (
                            <div className='cart-item' key={index}>
                                <div className='cat-product'>
                                    <button className='remove-item' onClick={() => handleRemoveItem(index)}> 
                                        <i className="las la-times"></i> 
                                    </button>
                                    <RouterLink to={item.link}>
                                        <img src={item.img} alt='product img' />
                                    </RouterLink>
                                    <div className='text'>
                                        <RouterLink to={item.link}>
                                            <h2>{item.name}</h2>
                                        </RouterLink>
                                        <div className='rate'>
                                            <h3> <i className="las la-star"></i> 4.8 <span> (125) </span></h3>
                                        </div>
                                        <div className='options'>
                                            <h4 className='price'> <span> جم </span> {item.price} </h4>
                                            <span className='quantity'> {item.quantity} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h4 className='subtotal'><span> السعر قبل الضريبة والخدمة </span> {subtotal} جم</h4>
                        <h3 className='total'><span> السعر النهائي </span> {total} جم</h3>

                        <div className='section-header'></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;
