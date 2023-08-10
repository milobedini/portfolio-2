import {
  RxArrowTopRight,
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from 'react-icons/rx'
import { FreeMode, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// data

const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building dynamic web applications tailored to client needs.',
  },
  {
    icon: <RxCrop />,
    title: 'Mobile Apps',
    description: 'Crafting user-centric mobile solutions using React Native.',
  },
  {
    icon: <RxReader />,
    title: 'Fullstack',
    description:
      'Delivering seamless integration of frontend and backend systems.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Consultancy',
    description:
      'Providing expert tech guidance and best practice recommendations.',
  },
  {
    icon: <RxRocket />,
    title: 'Training',
    description:
      'Mentoring and upskilling teams in modern development techniques.',
  },
]

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex 
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
            >
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & description */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* Arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ServiceSlider
