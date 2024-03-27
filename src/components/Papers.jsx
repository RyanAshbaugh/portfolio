import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { papers } from '../constants';

const PapersCard = ({ index, paper, citation, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    {/* <p className="text-white font-black text-[48px]">"</p> */}

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{citation}</p>
      <a href={link} className="text-blue-500 text-[18px]">checkout the paper here</a>
    </div>
  </motion.div>
)

const Papers = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}
          >My papers</p>
          <h2 className={styles.sectionHeadText}
          >Papers</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {papers.map((paper, index) => (
          <PapersCard
            key={paper.citation}
            index={index}
            {...paper}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Papers, "");