import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

export default function Advertising() {
    return (
        <Swiper className="mySwiper"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            grabCursor={true}
            modules={[Autoplay]}>
            <SwiperSlide>< img src="image/advertising-01.webp" alt='تصویر تبلیغات' style={{ width: "100%", borderRadius: "15px" }
            } /></SwiperSlide>

            <SwiperSlide>< img src="image/advertising-02.webp" alt='تصویر تبلیغات' style={{ width: "100%", borderRadius: "15px" }
            } /></SwiperSlide>

            <SwiperSlide>< img src="image/advertising-03.webp" alt='تصویر تبلیغات' style={{ width: "100%", borderRadius: "15px" }
            } /></SwiperSlide>

            <SwiperSlide>< img src="image/advertising-04.webp" alt='تصویر تبلیغات' style={{ width: "100%", borderRadius: "15px" }
            } /></SwiperSlide>

            <SwiperSlide>< img src="image/advertising-05.webp" alt='تصویر تبلیغات' style={{ width: "100%", borderRadius: "15px" }
            } /></SwiperSlide>

            <SwiperSlide>< img src="image/advertising-06.webp" alt='تصویر تبلیغات' style={{ width: "100%", borderRadius: "15px" }
            } /></SwiperSlide>
        </Swiper>
    );
}