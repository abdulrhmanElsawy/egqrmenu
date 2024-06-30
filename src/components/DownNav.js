import './css/downnav.css';
import { Link as RouterLink } from 'react-router-dom';

import {  useLocation } from 'react-router-dom';

import { useEffect } from 'react';


function DownNav(){

    const { pathname } = useLocation();

    useEffect(() => {
    window.scrollTo(0, 0);
    }, [pathname]);

            
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path) => {
        return currentPath === path ? 'active' : '';
    };

    return(
        <>
            <section className='down-nav'>
                <div className='container'>
                    <div className='nav-content'>
                        <ul>
                            <li>
                                <RouterLink  className={isActive('/egqrmenu')} to="/egqrmenu">
                                    <i class="las la-home"></i>
                                    الرئيسية
                                </RouterLink>
                            </li>

                            <li>
                                <a href="#" target="_blank" >
                                <i class="las la-star"></i>
                                    التقييم
                                </a>
                            </li>

                            <li>
                                <a  href="#" target="_blank">
                                    <i class="las la-map-marked"></i>
                                    الخريطة
                                </a>
                            </li>

                            <li>
                                <RouterLink  className={isActive('/egqrmenu/bookmark')} to="/egqrmenu/bookmark">
                                    <i class="las la-bookmark"></i>
                                    طلبك
                                </RouterLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DownNav;