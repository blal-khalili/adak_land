import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../Card/Card"
import 'swiper/css';
import 'swiper/css/navigation';
import './CardSlider.css'


function CardSlider(){
    return <div className='container mt-5'>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper"  slidesPerView={3} spaceBetween={100} >
        
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
      </Swiper>
    </div>
}

export default CardSlider 
