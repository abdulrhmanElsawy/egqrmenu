import './css/product.css';
import ProductImg from './images/cats/1.webp';
import { useState, useEffect } from 'react';

function Product() {
    const [quantity, setQuantity] = useState(1);
    const [basePrice] = useState(48.8); // Initial base price
    const [sizePrice, setSizePrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(basePrice);

    useEffect(() => {
        // Calculate and update the total price
        setTotalPrice((basePrice + sizePrice) * quantity);
    }, [quantity, sizePrice, basePrice]);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleSizeChange = (event) => {
        const selectedSizePrice = parseFloat(event.target.nextSibling.innerText.split(' ')[1]) || 0;
        setSizePrice(selectedSizePrice);
    };

    const handleBookmark = () => {
        const productName = 'ستيك لحم بقر مشوي';
        const size = document.querySelector('input[name="size"]:checked').nextSibling.innerText;
        const productLink = window.location.pathname;
        const productImage = ProductImg;

        let bookmarkedProducts = JSON.parse(localStorage.getItem('bookmarkedProducts')) || [];

        const existingProduct = bookmarkedProducts.find(product => product.name === productName);

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            const productDetails = {
                name: productName,
                quantity: quantity,
                size: size,
                price: totalPrice.toFixed(2),
                link: productLink,
                img: productImage
            };

            bookmarkedProducts.push(productDetails);
        }

        localStorage.setItem('bookmarkedProducts', JSON.stringify(bookmarkedProducts));
    };

    return (
        <>
            <section className='product-page'>
                <img src={ProductImg} alt='product img' />
                <div className='product-content'>
                    <h1>ستيك لحم بقر مشوي</h1>

                    <div className='rate'>
                        <h3><i className="las la-star"></i> 4.8 <span> (125) </span></h3>
                    </div>

                    <div className='whatsin'>
                        <span> عجينة بيتزا </span>
                        <span> صلصة طماطم </span>
                        <span> جبنة موزاريلا </span>
                        <span> ريحان طازج </span>
                        <span> زيت زيتون </span>
                    </div>

                    <div className='add-min'>
                        <h2> الكمية </h2>

                        <div>
                            <button className='increase-num' onClick={handleIncrease}><i className="las la-plus"></i></button>
                            <span className="quantity">{quantity}</span>
                            <button className='decrease-num' onClick={handleDecrease}><i className="las la-minus"></i></button>
                        </div>
                    </div>

                    <div className='integ'>
                        <h2> الحجم </h2>

                        <ul>
                            <li>
                                <div>
                                    <input type='radio' name='size' value='صغير' defaultChecked onChange={handleSizeChange} />
                                    <label> صغير </label>
                                </div>
                                <span> + 0 جم </span>
                            </li>

                            <li>
                                <div>
                                    <input type='radio' name='size' value='وسط' onChange={handleSizeChange} />
                                    <label> وسط </label>
                                </div>
                                <span> + 10 جم </span>
                            </li>

                            <li>
                                <div>
                                    <input type='radio' name='size' value='كبير' onChange={handleSizeChange} />
                                    <label> كبير </label>
                                </div>
                                <span> + 15 جم </span>
                            </li>
                        </ul>
                    </div>

                    <div className='options'>
                        <button className='add-to-bookmark' onClick={handleBookmark}> <i className="las la-bookmark"></i> اضافة الى الطلب </button>
                        <h4>
                            <span> السعر النهائي</span>
                            <h6>{totalPrice.toFixed(2)}</h6> جم
                        </h4>
                    </div>

                    <div className='section-header'></div>
                </div>
            </section>
        </>
    );
}

export default Product;
