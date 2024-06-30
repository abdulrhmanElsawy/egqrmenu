import './css/categoriesslider.css';

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


import { Link as RouterLink } from 'react-router-dom';




function CategoriesSlider(){
    return(
        <>
            <section className='categories-slider'>
                <div className='container'>
                    <div className='slider'>
                    <Swiper grabCursor={true} spaceBetween={50} slidesPerView={'auto'} navigation={{
                        nextEl: '.next-btn',
                        prevEl: '.prev-btn',
                        }} pagination={false}
                            
                            modules={[Autoplay,Navigation,Pagination]}
                        >

                            <SwiperSlide >
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg1} alt='category image' />
                                        <h2> أطباق نباتية </h2>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>


                            
                            <SwiperSlide >
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg2} alt='category image' />
                                        <h2> ساندويشات </h2>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>


                            
                            <SwiperSlide >
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg3} alt='category image' />
                                        <h2> مقبلات بحرية </h2>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide >
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg4} alt='category image' />
                                        <h2> بيتزا </h2>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide >
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg5} alt='category image' />
                                        <h2> خضروات مشوية </h2>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide >
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg6} alt='category image' />
                                        <h2> أسماك </h2>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>

                            
                            <SwiperSlide >
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg7} alt='category image' />
                                        <h2> لحوم </h2>
                                    </RouterLink>
                                </div>
                            </SwiperSlide>


                            
                            <SwiperSlide >
                                <div className='category'>
                                    <RouterLink to="/category">
                                        <img src={CatImg8} alt='category image' />
                                        <h2> المشروبات المثلجة </h2>
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

export default CategoriesSlider;