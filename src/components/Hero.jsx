

import {styles } from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap-5  `}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="h-5 w-5 bg-[#915eff] rounded-full"/>
          <div className='w-1 violet-gradient h-40 sm:h-80 '/>
        </div>
        <div>
        <h1 className={` ${styles.heroHeadText}  text-white`}>
          Hi, I&apos;m <span className='text-[#915eff]'> Amir Hamza</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`} >
          I develop 3D visuals, user <br className='sm:block hidden' /> interfaces and web applications
        </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero