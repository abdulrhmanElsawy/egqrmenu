import './css/category.css';
import ProductImg1 from './images/cats/1.webp';
import ProductImg2 from './images/cats/2.webp';
import ProductImg3 from './images/cats/3.webp';
import ProductImg4 from './images/cats/4.webp';
import ProductImg5 from './images/cats/5.webp';
import ProductImg6 from './images/cats/6.webp';
import ProductImg7 from './images/cats/7.webp';
import ProductImg8 from './images/cats/8.webp';

import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

const products = [
    { id: 1, name: 'ستيك لحم بقر مشوي', price: 125, img: ProductImg1, rating: 4.8, reviews: 125 },
    { id: 2, name: 'كالاماري مشوية', price: 255, img: ProductImg2, rating: 4.4, reviews: 41 },
    { id: 3, name: 'بيتزا ببروشيتو وفطر', price: 110, img: ProductImg3, rating: 4.7, reviews: 86 },
    { id: 4, name: 'برجر لحم مع صلصة الباربيكيو', price: 125, img: ProductImg4, rating: 4.5, reviews: 90 },
    { id: 5, name: 'رولات خضراوات مشوية', price: 125, img: ProductImg5, rating: 4.3, reviews: 67 },
    { id: 6, name: 'سمك السلمون المشوي', price: 125, img: ProductImg6, rating: 4.6, reviews: 123 },
    { id: 7, name: 'دجاج مشوي بالزبادي والثوم', price: 125, img: ProductImg7, rating: 4.4, reviews: 89 },
    { id: 8, name: 'أطباق نباتية', price: 82, img: ProductImg8, rating: 4.2, reviews: 56 }
];

function Category() {
    const [bookmarkedProducts, setBookmarkedProducts] = useState(() => {
        const saved = localStorage.getItem('bookmarkedProducts');
        return saved ? JSON.parse(saved) : [];
    });

    const handleBookmark = (product) => {
        const existingProduct = bookmarkedProducts.find(p => p.name === product.name);
        let updatedBookmarks;

        if (existingProduct) {
            updatedBookmarks = bookmarkedProducts.map(p =>
                p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
            );
        } else {
            updatedBookmarks = [...bookmarkedProducts, { ...product, quantity: 1 }];
        }

        setBookmarkedProducts(updatedBookmarks);
        localStorage.setItem('bookmarkedProducts', JSON.stringify(updatedBookmarks));
    };

    return (
        <>
            <section className='category'>
                <div className='container'>
                    <div className='row search-container-ele'>
                        <div className='section-header'>
                            <RouterLink to="/category/egqrmenu"></RouterLink>
                            <h1> أطباق نباتية </h1>
                        </div>
                        {products.map(product => (
                            <div key={product.id} className='col-lg-4 col-md-12 col-sm-12 col-12'>
                                <div className='cat-product'>
                                    <RouterLink to="/product/egqrmenu">
                                        <img src={product.img} alt='product img' />
                                    </RouterLink>
                                    <div className='text'>
                                        <RouterLink to="/product/egqrmenu">
                                            <h2>{product.name}</h2>
                                        </RouterLink>
                                        <div className='rate'>
                                            <h3><i className="las la-star"></i> {product.rating} <span> ({product.reviews}) </span></h3>
                                        </div>
                                        <div className='options'>
                                            <h4 className='price'> <span> جم </span> {product.price} </h4>
                                            <button className='add-product-to-bookmark' onClick={() => handleBookmark(product)}> <i className="las la-plus"></i> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Category;
