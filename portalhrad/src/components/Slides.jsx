'use client'
import { useState, useEffect } from 'react';
import styles from './Slides.module.css';
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Sliders(){

    const [slidePreview, setSlidePreview] = useState(2)
    const data = [ 
        {id: '2', image : '/hrad.jpg'},
        {id: '2', image : '/HRAD2.jpg'},
        {id: '3', image : '/HRAD3.jpg'},
    ];


    useEffect(() => {

        function handleResize(){
            if(window.innerWidth < 800){
                setSlidePreview(1);
            } else{
                setSlidePreview(2);
            }
        }
        
        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    },[])


    return (
        <div>
            <Swiper 
                slidesPerView={slidePreview}
                pagination={{ clickable: true}}
                navigation
            >
                {data.map( (item) => (
                    <SwiperSlide key={item.id} className={styles.slides}>
                        <img src={item.image} alt="Slider" className={styles.slide_item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
