import { motion } from 'framer-motion';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies, tools } from '../constants';
import { textVariant } from '../utils/motion';
import { styles } from '../styles'


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Skills
        </p>
        <h2 className={styles.sectionHeadText}>
          Technologies.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology, index) => (
          <div className="w-28 h-28" key={index}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-10">
        <h2 className={styles.sectionHeadText}>
          Tools and Frameworks.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {tools.map((tool, index) => (
          <div className="w-28 h-28" key={index}>
            <BallCanvas icon={tool.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");