import { BsArrowRight } from 'react-icons/bs'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Image from 'next/image'
import Link from 'next/link'
import {
  ClubCard,
  FeedingFrenzyCard,
  PortfolioCard,
  SwayCard,
  SwayMobileCard,
  TastebookCard,
  WhiskCard,
  YardCard,
} from './work/WorkCard'

// data
export const workSlides = [
  {
    title: 'Sway Mobile',
    path: '/thumb1.jpg',
    link: '',
    description: '',
    id: 1,
    card: SwayMobileCard,
    visual: SwayMobileVisual,
  },
  {
    title: 'Sway',
    path: '/thumb2.jpg',
    link: '',
    description: '',
    id: 2,
    card: SwayCard,
    visual: SwayVisual,
  },
  {
    title: 'Yard',
    path: '/thumb3.jpg',
    link: '',
    description: '',
    id: 3,
    card: YardCard,
    visual: TestVisual,
  },
  {
    title: 'Whisk',
    path: '/thumb4.jpg',
    link: '',
    description: '',
    id: 4,
    card: WhiskCard,
    visual: SwayVisual,
  },

  {
    title: 'Tastebook',
    path: '/thumb4.jpg',
    link: '',
    description: '',
    id: 5,
    card: TastebookCard,
    visual: SwayMobileVisual,
  },
  {
    title: 'Club',
    path: '/thumb1.jpg',
    link: '',
    description: '',
    id: 6,
    card: ClubCard,
    visual: SwayVisual,
  },
  {
    title: 'Feeding Frenzy',
    path: '/thumb2.jpg',
    link: '',
    description: '',
    id: 7,
    card: FeedingFrenzyCard,
    visual: SwayMobileVisual,
  },
  {
    title: 'Portfolio',
    path: '/thumb3.jpg',
    link: '',
    description: '',
    id: 8,
    card: PortfolioCard,
    visual: TestVisual,
  },
]

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {item.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <Link href={`/work/${image.id}`}>
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* Image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                        {/* Overlay gradient */}
                        <div
                          className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd]
                      opacity-0 group-hover:opacity-80 transition-all duration-700"
                        ></div>
                        {/* Title */}
                        <div
                          className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                      group-hover:xl:-translate-y-20 transition-all duration-300"
                        >
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title*/}
                            <div className="delay-100 uppercase">
                              {image.title}
                            </div>
                            {/* icon */}
                            <div
                              className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all
                          duration-300 delay-200"
                            >
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default WorkSlider
