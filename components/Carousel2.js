import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import home1 from '../public/images/home1.jpg'
import home2 from '../public/images/home2.jpg'
import JoinUs from '../public/images/JoinUs.jpg'
import Image from 'next/image';
export default function Carousel2() {
    return (
        <div className='w-[500px]'>
            <Carousel showThumbs>
                <div>
                    <Image width={'500px'} height={'200px'} src="/../public/images/home1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="../public/images/home2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}
