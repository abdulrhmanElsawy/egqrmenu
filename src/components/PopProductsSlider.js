import './css/popproductsslider.css';

import ProductImg1 from './images/cats/1.webp';
import ProductImg2 from './images/cats/2.webp';
import ProductImg3 from './images/cats/3.webp';
import ProductImg4 from './images/cats/4.webp';
import ProductImg5 from './images/cats/5.webp';
import ProductImg6 from './images/cats/6.webp';
import ProductImg7 from './images/cats/7.webp';
import ProductImg8 from './images/cats/8.webp';

import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper';

function PopProductsSlider() {
    const [bookmarkedProducts, setBookmarkedProducts] = useState([]);

    useEffect(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedProducts')) || [];
        setBookmarkedProducts(savedBookmarks);
    }, []);

    const handleBookmark = (product) => {
        let updatedBookmarks = [...bookmarkedProducts];
        let existingProduct = updatedBookmarks.find(item => item.name === product.name);

        if (existingProduct) {
            existingProduct.quantity = (existingProduct.quantity || 1) + 1;
        } else {
            updatedBookmarks.push({ ...product, quantity: 1 });
        }

        setBookmarkedProducts(updatedBookmarks);
        localStorage.setItem('bookmarkedProducts', JSON.stringify(updatedBookmarks));
    };

    const products = [
        { img: ProductImg1, name: 'ستيك لحم بقر مشوي', price: 125, link: 'product', rating: 4.8, reviews: 125 },
        { img: ProductImg2, name: 'منتج 2', price: 82, link: 'product', rating: 4.4, reviews: 41 },
        { img: ProductImg3, name: 'كالاماري مشوية', price: 255, link: 'product', rating: 4.1, reviews: 90 },
        { img: ProductImg4, name: 'بيتزا ببروشيتو وفطر', price: 110, link: 'product', rating: 4.6, reviews: 47 },
        { img: ProductImg5, name: 'برجر لحم مع صلصة الباربيكيو', price: 125, link: 'product', rating: 4.8, reviews: 125 },
        { img: ProductImg6, name: 'رولات خضراوات مشوية', price: 125, link: 'product', rating: 4.8, reviews: 125 },
        { img: ProductImg7, name: 'باذنجان محشي', price: 125, link: 'product', rating: 4.8, reviews: 125 },
        { img: ProductImg8, name: 'كبسة لحم', price: 125, link: 'product', rating: 4.8, reviews: 125 },
    ];

    return (
        <section className='pop-products'>
            <div className='container'>
                <div className='section-header'>
                    <RouterLink to="/popular-products">
                        <i className="las la-angle-left"></i> مشاهدة الكل
                    </RouterLink>
                    <h1>المنتجات الأكثر طلبا</h1>
                </div>
                <div className='pop-products-slider'>
                    <Swiper
                        grabCursor={true}
                        spaceBetween={50}
                        slidesPerView={'auto'}
                        navigation={{
                            nextEl: '.next-btn',
                            prevEl: '.prev-btn',
                        }}
                        pagination={false}
                        modules={[Autoplay, Navigation, Pagination]}
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <div className='product'>
                                    <RouterLink to={product.link}>
                                        <img src={product.img} alt='product img' />
                                    </RouterLink>
                                    <div className='text'>
                                        <RouterLink to={product.link}>
                                            <h2>{product.name}</h2>
                                        </RouterLink>
                                        <div className='rate'>
                                            <h3><i className="las la-star"></i> {product.rating} <span> ({product.reviews}) </span></h3>
                                        </div>
                                        <div className='options'>
                                            <h4 className='price'><span> جم </span> <h6> {product.price} </h6></h4>
                                            <button className='add-product-to-bookmark' onClick={() => handleBookmark(product)}><i className="las la-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default PopProductsSlider;
