import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../Card/Card"
import 'swiper/css';
import 'swiper/css/navigation';
import './CardSlider.css'


function CardSlider() {
    return (
        <div className='container'>
            <div className='row'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={4} spaceBetween={30} >

                    <div className='col-6'>
                        <SwiperSlide>
                            <Card></Card>
                        </SwiperSlide>
                    </div>
                    <div className='col-6'>
                        <SwiperSlide>
                            <Card></Card>
                        </SwiperSlide>
                    </div>
                    <div className='col-6'>
                        <SwiperSlide>
                            <Card></Card>
                        </SwiperSlide>
                    </div>
                    <div className='col-6'>
                        <SwiperSlide>
                            <Card></Card>
                        </SwiperSlide>
                    </div>
                    <div className='col-6'>
                        <SwiperSlide>
                            <Card></Card>
                        </SwiperSlide>
                    </div>
                    <div className='col-6'>
                        <SwiperSlide>
                            <Card></Card>
                        </SwiperSlide>
                    </div>
                    <div className='col-6'>
                        <SwiperSlide>
                            <Card></Card>
                        </SwiperSlide>
                    </div>
                    <div className='col-6'>
                        <SwiperSlide>
                            <Card></Card>
                        </SwiperSlide>
                    </div>
                    <div className='col-6'>
                        <SwiperSlide>
                            <Card></Card>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default CardSlider 
