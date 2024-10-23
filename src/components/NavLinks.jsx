import { motion } from "framer-motion"
import { useAtom } from "jotai"
import { currentProjectAtom, projects } from "./Projects"

const Section = (props) => {
  const { children } = props
  return (
    <motion.section
      className='h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center'
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  )
}

export const NavLinks = (props) => {
  const { setSection } = props
  return (
    <div className='flex flex-col items-center w-screen'>
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

const AboutSection = (props) => {
  const { setSection } = props
  return (
    <Section>
      <div className='bg-black text-white p-8'>
        <style jsx>{`
          @keyframes slideIn {
            0% {
              width: 0;
              transform: translateX(100%);
            }
            100% {
              width: 100%;
              transform: translateX(0);
            }
          }

          @keyframes pushLeft {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .sliding-line {
            animation: slideIn 1.5s ease forwards;
          }

          .pushing-text {
            animation: pushLeft 1.5s ease forwards;
          }
        `}</style>

        <h1
          className='text-6xl font-light tracking-wide'
          style={{ fontFamily: 'Didot, "Times New Roman", serif' }}
        >
          Hello, my name is
          <br />
          <div className='flex items-center'>
            <span className='pushing-text whitespace-nowrap'>Angelynn</span>
            <div className='sliding-line h-0.5 bg-white ml-2 flex-grow'></div>
          </div>
        </h1>
      </div>
      <motion.p
        className='text-lg text-gray-600 my-4'
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I'm a fullstack software developer with a passion for crafting intuitive
        and impactful user experiences.
      </motion.p>
      <motion.button
        className='w-1/6 bg-black text-white py-4 px-8 text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors'
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        onClick={() => setSection(3)}
      >
        {" "}
        Let's Connect
      </motion.button>
    </Section>
  )
}

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "PostgreSQL",
    level: 40,
  },
]

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className='text-5xl font-bold text-white'>Skills</h2>
        <div className=' mt-8 space-y-4'>
          {skills.map((skill, index) => (
            <div className='w-64' key={index}>
              <motion.h3
                className='text-xl font-bold text-white'
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className='h-2 w-full bg-gray-200 rounded-full mt-2'>
                <motion.div
                  className='h-full bg-indigo-500 rounded-full '
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom)

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length)
  }

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length)
  }

  return (
    <Section>
      <div className='flex w-full h-full gap-8 items-center justify-center'>
        <button
          className='hover:text-indigo-600 transition-colors'
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className='text-5xl font-bold'>Projects</h2>
        <button
          className='hover:text-indigo-600 transition-colors'
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  )
}

const ContactSection = () => {
  return (
    <Section>
      <div className='w-1/3 mx-10 px-4'>
        <h1
          className='text-6xl font-light tracking-tight mb-14'
          style={{ fontFamily: 'Didot, "Times New Roman", serif' }}
        >
          Contact
        </h1>

        <form className='space-y-12 w-full'>
          <div className='relative w-full'>
            <input
              type='text'
              name='name'
              id='name'
              className='peer w-full border-b border-gray-600 py-3 focus:border-black focus:outline-none placeholder-transparent text-gray-900 transition-colors bg-transparent'
              placeholder='Name'
            />
            <label
              htmlFor='name'
              className='absolute left-0 -top-3.5 text-sm text-gray-800 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm'
            >
              Name
            </label>
          </div>

          <div className='relative'>
            <input
              type='email'
              name='email'
              id='email'
              className='peer w-full border-b border-gray-600 py-3 focus:border-black focus:outline-none placeholder-transparent text-gray-900 transition-colors bg-transparent'
              placeholder='Email'
            />
            <label
              htmlFor='email'
              className='absolute left-0 -top-3.5 text-sm text-gray-800 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm'
            >
              Email
            </label>
          </div>

          <div className='relative'>
            <textarea
              name='message'
              id='message'
              rows='4'
              className='peer w-full border-b border-gray-600 py-3 focus:border-black focus:outline-none placeholder-transparent text-gray-900 transition-colors resize-none bg-transparent'
              placeholder='Message'
            />
            <label
              htmlFor='message'
              className='absolute left-0 -top-3.5 text-sm text-gray-800 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm'
            >
              Message
            </label>
          </div>

          <button className='w-full bg-black text-white py-4 px-8 text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors'>
            Send Message
          </button>
        </form>
      </div>
    </Section>
  )
}
