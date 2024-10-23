import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"

const BurgerIngredient = ({ ingredient, delay, techStack, shouldAnimate }) => {
  const controls = useAnimation()

  useEffect(() => {
    if (shouldAnimate) {
      controls.start({
        y: [-500, 0],
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: delay,
        },
      })
    }
  }, [controls, delay, shouldAnimate])

  return (
    <motion.div
      initial={{ y: -500 }}
      animate={controls}
      className='relative group'
    >
      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 z-10'>
        <p className='text-white text-sm text-center px-4 font-medium'>
          {techStack}
        </p>
      </div>
      <div className={ingredient} />
    </motion.div>
  )
}

const WavyLettuce = () => (
  <div className='relative h-8 w-72 -mt-2'>
    <div className='absolute inset-0'>
      <svg viewBox='0 0 288 32' className='w-full h-full'>
        <path
          d='M0 16 Q 36 0, 72 16 Q 108 32, 144 16 Q 180 0, 216 16 Q 252 32, 288 16 L 288 32 L 0 32 Z'
          className='fill-green-400'
        />
      </svg>
    </div>
    <div className='absolute inset-0 -mt-1'>
      <svg viewBox='0 0 288 32' className='w-full h-full'>
        <path
          d='M0 16 Q 36 32, 72 16 Q 108 0, 144 16 Q 180 32, 216 16 Q 252 0, 288 16 L 288 32 L 0 32 Z'
          className='fill-green-300'
        />
      </svg>
    </div>
  </div>
)

const Tomato = () => (
  <div className='relative h-6 w-72 -mt-1 flex justify-center items-center'>
    <div className='h-full w-[90%] bg-red-500 rounded-full shadow-md flex'>
      <div className='w-1/2 h-full bg-red-400 rounded-l-full' />
      <div className='w-1/2 h-full bg-red-600 rounded-r-full' />
    </div>
  </div>
)

export default function Burger() {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)
  const tomatoControls = useAnimation()
  const lettuceControls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Animate tomato and lettuce
          tomatoControls.start({
            y: [-500, 0],
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.4,
            },
          })
          lettuceControls.start({
            y: [-500, 0],
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            },
          })
        }
      },
      {
        threshold: 0.5, // Triggers when 50% of the section is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [tomatoControls, lettuceControls])

  const resetAnimation = () => {
    setIsInView(false)
    setTimeout(() => setIsInView(true), 100)
    tomatoControls.set({ y: -500 })
    lettuceControls.set({ y: -500 })
  }

  return (
    <section
      ref={sectionRef}
      className='min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 flex items-center justify-center'
    >
      <div className='relative h-[600px] w-[400px] flex flex-col items-center justify-end'>
        <BurgerIngredient
          ingredient='h-16 w-80 rounded-t-full bg-gradient-to-b from-amber-200 to-amber-300 shadow-lg'
          delay={1.0}
          techStack='JavaScript, TypeScript, Python'
          shouldAnimate={isInView}
        />

        <BurgerIngredient
          ingredient='h-3 w-72 -mt-2 bg-gradient-to-r from-yellow-300 to-yellow-400 shadow-md'
          delay={0.8}
          techStack='React, Next.js, Redux, MobX'
          shouldAnimate={isInView}
        />

        <BurgerIngredient
          ingredient='h-12 w-72 -mt-1 rounded-lg bg-gradient-to-b from-[#8B4513] to-[#654321] shadow-md'
          delay={0.6}
          techStack='Node.js, Express, FastAPI'
          shouldAnimate={isInView}
        />

        <motion.div
          initial={{ y: -500 }}
          animate={tomatoControls}
          className='relative group'
        >
          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 z-10'>
            <p className='text-white text-sm text-center px-4 font-medium'>
              MySQL, PostgreSQL, MongoDB
            </p>
          </div>
          <Tomato />
        </motion.div>

        <motion.div
          initial={{ y: -500 }}
          animate={lettuceControls}
          className='relative group'
        >
          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 z-10'>
            <p className='text-white text-sm text-center px-4 font-medium'>
              Webpack, Vite, Docker, Vercel
            </p>
          </div>
          <WavyLettuce />
        </motion.div>

        <BurgerIngredient
          ingredient='h-12 w-80 -mt-2 rounded-b-full bg-gradient-to-b from-amber-400 to-amber-500 shadow-lg'
          delay={0}
          techStack='Jest, Vitest, llm, ai voice'
          shouldAnimate={isInView}
        />

        {/* Plate */}
        <div className='h-4 w-96 bg-gradient-to-b from-gray-100 to-gray-200 rounded-full mt-8 shadow-xl' />
      </div>

      {/* Reset button */}
      <button
        onClick={resetAnimation}
        className='absolute bottom-8 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors'
      >
        Reset Animation
      </button>
    </section>
  )
}
