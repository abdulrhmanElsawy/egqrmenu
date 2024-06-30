import './css/catproducts.css';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';
import $ from 'jquery';

// Product Images
import ProductImg1 from './images/cats/1.webp';
import ProductImg2 from './images/cats/2.webp';
import ProductImg3 from './images/cats/3.webp';
import ProductImg4 from './images/cats/4.webp';
import ProductImg5 from './images/cats/5.webp';
import ProductImg6 from './images/cats/6.webp';
import ProductImg7 from './images/cats/7.webp';
import ProductImg8 from './images/cats/8.webp';

const products = [
    { id: 1, name: 'ستيك لحم بقر مشوي', img: ProductImg1, rating: 4.8, reviews: 125, price: 82 },
    { id: 2, name: '', img: ProductImg2, rating: 4.4, reviews: 41, price: 82 },
    { id: 3, name: 'كالاماري مشوية', img: ProductImg3, rating: 4.1, reviews: 90, price: 82 },
    { id: 4, name: 'بيتزا ببروشيتو وفطر', img: ProductImg4, rating: 4.6, reviews: 47, price: 82 },
    { id: 5, name: 'برجر لحم مع صلصة الباربيكيو', img: ProductImg5, rating: 4.8, reviews: 125, price: 82 },
    { id: 6, name: 'رولات خضراوات مشوية', img: ProductImg6, rating: 4.8, reviews: 125, price: 82 },
    { id: 7, name: 'سمك السلمون المشوي', img: ProductImg7, rating: 4.8, reviews: 125, price: 82 },
    { id: 8, name: 'دجاج مشوي بالزبادي والثوم', img: ProductImg8, rating: 4.8, reviews: 125, price: 82 },
];

function CatProducts() {
    useEffect(() => {
        $(document).ready(function() {
            $('.add-product-to-bookmark').off('click').on('click', function() {
                const productCard = $(this).closest('.cat-product');
                const productName = productCard.find('h2').text();
                const productPrice = productCard.find('.price h6').text();
                const productLink = productCard.find('a').attr('href');
                const productImage = productCard.find('img').attr('src');

                let bookmarkedProducts = JSON.parse(localStorage.getItem('bookmarkedProducts')) || [];
                let existingProduct = bookmarkedProducts.find(product => product.name === productName);

                if (existingProduct) {
                    existingProduct.quantity = (existingProduct.quantity || 1) + 1;
                } else {
                    const productDetails = {
                        name: productName,
                        price: productPrice,
                        link: productLink,
                        img: productImage,
                        quantity: 1
                    };
                    bookmarkedProducts.push(productDetails);
                }

                localStorage.setItem('bookmarkedProducts', JSON.stringify(bookmarkedProducts));
            });
        });
    }, []);

    return (
        <>
            <section className='cat-products'>
                <div className='container'>
                    <div className='row search-container-ele'>
                        <div className='section-header'>
                            <RouterLink to="/egqrmenu/category">
                                <i className="las la-angle-left"></i> مشاهدة الكل
                            </RouterLink>
                            <h1> أطباق نباتية </h1>
                        </div>

                        {products.map(product => (
                            <div className='col-lg-4 col-md-12 col-sm-12 col-12' key={product.id}>
                                <div className='cat-product'>
                                    <RouterLink to="/egqrmenu/product">
                                        <img src={product.img} alt='product img' />
                                    </RouterLink>
                                    <div className='text'>
                                        <RouterLink to="/egqrmenu/product">
                                            <h2>{product.name}</h2>
                                        </RouterLink>
                                        <div className='rate'>
                                            <h3>
                                                <i className="las la-star"></i> {product.rating} <span>({product.reviews})</span>
                                            </h3>
                                        </div>
                                        <div className='options'>
                                            <h4 className='price'>
                                                <span> جم </span> <h6>{product.price}</h6>
                                            </h4>
                                            <button className='add-product-to-bookmark'>
                                                <i className="las la-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className='section-header'>
                            <RouterLink to="/egqrmenu/category">
                                <i className="las la-angle-left"></i> مشاهدة الكل
                            </RouterLink>
                            <h1> ساندويشات </h1>
                        </div>

                        {products.map(product => (
                            <div className='col-lg-4 col-md-12 col-sm-12 col-12' key={product.id}>
                                <div className='cat-product'>
                                    <RouterLink to="/egqrmenu/product">
                                        <img src={product.img} alt='product img' />
                                    </RouterLink>
                                    <div className='text'>
                                        <RouterLink to="/egqrmenu/product">
                                            <h2>{product.name}</h2>
                                        </RouterLink>
                                        <div className='rate'>
                                            <h3>
                                                <i className="las la-star"></i> {product.rating} <span>({product.reviews})</span>
                                            </h3>
                                        </div>
                                        <div className='options'>
                                            <h4 className='price'>
                                                <span> جم </span> <h6>{product.price}</h6>
                                            </h4>
                                            <button className='add-product-to-bookmark'>
                                                <i className="las la-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className='section-header'>
                            <RouterLink to="/egqrmenu/category">
                                <i className="las la-angle-left"></i> مشاهدة الكل
                            </RouterLink>
                            <h1> مقبلات بحرية </h1>
                        </div>

                        {products.map(product => (
                            <div className='col-lg-4 col-md-12 col-sm-12 col-12' key={product.id}>
                                <div className='cat-product'>
                                    <RouterLink to="/egqrmenu/product">
                                        <img src={product.img} alt='product img' />
                                    </RouterLink>
                                    <div className='text'>
                                        <RouterLink to="/egqrmenu/product">
                                            <h2>{product.name}</h2>
                                        </RouterLink>
                                        <div className='rate'>
                                            <h3>
                                                <i className="las la-star"></i> {product.rating} <span>({product.reviews})</span>
                                            </h3>
                                        </div>
                                        <div className='options'>
                                            <h4 className='price'>
                                                <span> جم </span> <h6>{product.price}</h6>
                                            </h4>
                                            <button className='add-product-to-bookmark'>
                                                <i className="las la-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className='section-header'>
                            <RouterLink to="/egqrmenu/category">
                                <i className="las la-angle-left"></i> مشاهدة الكل
                            </RouterLink>
                            <h1> بيتزا </h1>
                        </div>

                        {products.map(product => (
                            <div className='col-lg-4 col-md-12 col-sm-12 col-12' key={product.id}>
                                <div className='cat-product'>
                                    <RouterLink to="/egqrmenu/product">
                                        <img src={product.img} alt='product img' />
                                    </RouterLink>
                                    <div className='text'>
                                        <RouterLink to="/egqrmenu/product">
                                            <h2>{product.name}</h2>
                                        </RouterLink>
                                        <div className='rate'>
                                            <h3>
                                                <i className="las la-star"></i> {product.rating} <span>({product.reviews})</span>
                                            </h3>
                                        </div>
                                        <div className='options'>
                                            <h4 className='price'>
                                                <span> جم </span> <h6>{product.price}</h6>
                                            </h4>
                                            <button className='add-product-to-bookmark'>
                                                <i className="las la-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


<div className='section-header'>
                            <RouterLink to="/egqrmenu/category">
                                <i className="las la-angle-left"></i> مشاهدة الكل
                            </RouterLink>
                            <h1> أسماك </h1>
                        </div>


                        </div>
                </div>
            </section>
        </>
    );
}

export default CatProducts;