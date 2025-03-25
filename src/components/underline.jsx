import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const WaveAnimation = () => {
  const controls = useAnimation();

  const wavePath = "M0,100 C33.33,150 66.67,50 100,100 C133.33,150 166.67,50 200,100 C233.33,150 266.67,50 300,100 C333.33,150 366.67,50 400,100";

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" }
    },
    fadeOut: { 
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  const [key, setKey] = useState(0);

  useEffect(() => {
    const animationSequence = async () => {
      await controls.start("hidden");
      await controls.start("visible");
      await new Promise(resolve => setTimeout(resolve, 3000));
      await controls.start("fadeOut");
      await new Promise(resolve => setTimeout(resolve, 2000));
      animationSequence();
      setKey(prevKey => prevKey + 1); // Force remontage
    };

    animationSequence();
  }, [controls, key]);

  return (
    <svg width="400" height="200" className='wavy-line' key={key}>
      <motion.path
        d={wavePath}
        fill="none"
        stroke="#1E96FC"
        strokeWidth="4"
        initial="hidden"
        animate={controls}
        variants={pathVariants}
      />
    </svg>
  );
};

export default WaveAnimation;