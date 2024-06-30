import './css/maincategories.css';


import CatImg1 from './images/cats/1.webp';
import CatImg2 from './images/cats/2.webp';
import CatImg3 from './images/cats/3.webp';
import CatImg4 from './images/cats/4.webp';
import CatImg5 from './images/cats/5.webp';
import CatImg6 from './images/cats/6.webp';
import CatImg7 from './images/cats/7.webp';
import CatImg8 from './images/cats/8.webp';


import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Autoplay,Navigation,Pagination} from 'swiper';


import { Route, Link as RouterLink } from 'react-router-dom';


function MainCategories(){
    return(
        <>
            <section className='main-categories'>
                <div className='container'>
                    <div className='section-header'>
                

                        <RouterLink to="/categories"> 
                            
                        </RouterLink>

                        <h1>  الأقسام  </h1>


                    </div>
                    <div className='slider'>
                    <Swiper grabCursor={true} spaceBetween={50} slidesPerView={'auto'} navigation={{
                        nextEl: '.next-btn',
                        prevEl: '.prev-btn',
                        }} pagination={false}
                            
                            modules={[Autoplay,Navigation,Pagination]}
                        >

                            <SwiperSlide>
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg1} alt='category image'/>
                                        <div className='text'>
                                            <h2> أطباق نباتية </h2>
                                            <h3> 32  منتج </h3>
                                        </div>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg2} alt='category image'/>
                                        <div className='text'>
                                        <h2> ساندويشات </h2>
                                            <h3> 14  منتج </h3>
                                        </div>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg3} alt='category image'/>
                                        <div className='text'>
                                        <h2> مقبلات بحرية </h2>
                                            <h3> 16  منتج </h3>
                                        </div>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg4} alt='category image'/>
                                        <div className='text'>
                                        <h2> بيتزا </h2>
                                            <h3> 14  منتج </h3>
                                        </div>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>



                            <SwiperSlide>
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg5} alt='category image'/>
                                        <div className='text'>
                                        <h2> خضروات مشوية </h2>
                                            <h3> 18  منتج </h3>
                                        </div>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg6} alt='category image'/>
                                        <div className='text'>
                                        <h2> أسماك </h2>
                                            <h3> 16  منتج </h3>
                                        </div>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg7} alt='category image'/>
                                        <div className='text'>
                                        <h2> لحوم </h2>
                                            <h3> 77  منتج </h3>
                                        </div>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg8} alt='category image'/>
                                        <div className='text'>
                                        <h2> المشروبات المثلجة </h2>
                                            <h3> 15  منتج </h3>
                                        </div>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>



                        </Swiper>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MainCategories;