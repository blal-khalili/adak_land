import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../Card/Card"
import 'swiper/css';
import 'swiper/css/navigation';
import './CardSlider.css'
import { useMediaQuery } from 'react-responsive'
import { useQuery, useQueryClient } from '@tanstack/react-query';



function CardSlider(props) {

    const isBigScreen = useMediaQuery({ query: '(min-width: 992px)' })
    const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" })
    const isSamllScreen = useMediaQuery({ query: "(max-width: 576px)" })

    const slidesPerViewResponsiveValue = () => {
        if (isBigScreen) {
            return 4
        } else if (isMediumScreen) {
            return 2
        } else if (isSamllScreen) {
            return 1
        }
    }


    return (
        <div className='container'>
            <div className='row'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={slidesPerViewResponsiveValue()} spaceBetween={30} >
                    {props.p && props.p.map((list) => (
                        <div className='col-6'>
                        <SwiperSlide>
                            {/* TODO: add other props to card component */}
                            <Card id={list.id} title={list.title}></Card>
                        </SwiperSlide>
                    </div>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default CardSlider 
