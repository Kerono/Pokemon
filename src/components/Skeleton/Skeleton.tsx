import { motion } from "motion/react";
import { FC } from "react";

type Props = {
  width: string;
  height: string;
};

export const Skeleton: FC<Props> = ({ width = "180px", height = "180px" }) => {
  return (
    <motion.div
      animate={{
        backgroundPosition: [0, width],
        transition: {
          repeat: Infinity,
          duration: 2,
        },
      }}
      style={{
        width,
        height,
        background: `linear-gradient(
          to right, 
        hsl(0, 0.00%, 92.50%) 0%,
        hsl(0, 0.00%, 95.70%) 10%,
        hsl(0, 0.00%, 92.50%) 20%
        )`,
      }}
    >
      <div></div>
    </motion.div>
  );
};
