import { motion } from "framer-motion"
import { useAtom } from "jotai"
import { currentProjectAtom, projects } from "./Projects"
import Burger from "./Burger"

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
      <div className='p-8'>
        <style jsx='true'>{`
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
          className='text-6xl text-bold tracking-wide'
          style={{
            fontFamily: 'Didot, "Times New Roman", serif',
            textTransform: "uppercase",
          }}
        >
          Hello, I'm
          <br />
          <div className='flex items-center'>
            <span className='pushing-text whitespace-nowrap'>Angelynn</span>
            <span className='sliding-line'>.</span>
          </div>
        </h1>
      </div>
      <motion.p
        className='text-lg text-gray-600 my-4 px-8'
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
        A fullstack software developer with a passion for crafting intuitive and
        impactful user experiences.
      </motion.p>
      <div className='flex gap-5 px-8'>
        <motion.button
          className='bg-black text-white py-4 px-6 text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors'
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
          Contact
        </motion.button>
        <motion.button
          className='bg-black text-white py-3 px-6 text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors'
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
          Projects
        </motion.button>
      </div>
    </Section>
  )
}

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2
          className='text-6xl text-white font-light tracking-tight mb-14'
          style={{ fontFamily: 'Didot, "Times New Roman", serif' }}
        >
          Skills
        </h2>
        <Burger />
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
        <h2
          className='text-6xl text-bold tracking-tight mb-14'
          style={{ fontFamily: 'Didot, "Times New Roman", serif' }}
        >
          Let's Connect
        </h2>

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
