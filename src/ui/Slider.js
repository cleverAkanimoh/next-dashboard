"use client";
import {Suspense} from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/bundle";
import Card from "./Card"

export default function Slider({ records }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <Suspense fallback={<Spinner />}>
      {records.map((r) => (
        <SwiperSlide key={r.data.ID}>
          <Card
            icon={undefined}
            heading={r.data.NAME}
            date={r.data.EFFDATE}
            href={r.data.ID}
            zip={r.data.ZIP}
            state={r.data.STNAME}
            district={r.data.OCCDISTDESC}
          />
        </SwiperSlide>
      ))}
      </Suspense>
      
    </Swiper>
  );
}
