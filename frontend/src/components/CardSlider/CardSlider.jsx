import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../Card/Card"
import 'swiper/css';
import 'swiper/css/navigation';
import './CardSlider.css'
import { useMediaQuery } from 'react-responsive'



function CardSlider() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 992px)' })
    const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" })
    const isSamllScreen = useMediaQuery({ query: "(max-width: 576px)" })

    const slidesPerViewResponsiveValue = () =>{
        if (isBigScreen){
            return 4
        }else if (isMediumScreen){
            return 2
        }else if (isSamllScreen){
            return 1
        }
    }
    

    return (
        <div className='container'>
            <div className='row'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={slidesPerViewResponsiveValue()} spaceBetween={30} >

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
