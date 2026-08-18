import { motion } from "motion/react";
import { div } from "motion/react-client";
import React, { Dispatch, SetStateAction } from "react";

type ActiveStatus = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

const Button = ({ isActive, setIsActive }: ActiveStatus) => {
  return (
    <div
      className="h-[40px] w-[100px] overflow-hidden top-5 right-5 absolute rounded-[25px] cursor-pointer"
      onClick={() => setIsActive(!isActive)}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ y: isActive ? "-100%" : "0%" }}
        transition={{
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <motion.div className="group h-full w-full bg-[#D0FF71] text-[#010202] uppercase">
          <PerspectiveText label={"Menu"} />
        </motion.div>
        <div className="group bg-[#010202] text-[#D0FF71] uppercase absolute top-full h-full w-full">
          <PerspectiveText label={"Close"} />
        </div>
      </motion.div>
    </div>
  );
};

export default Button;

type Label = {
  label: string;
};

// const PerspectiveText = ({ label }: Label) => {
//   return (
//     <motion.div
//       className="
//         h-full w-full flex items-center justify-center
//         transform-3d
//         group-hover:rotate-x-90
//         group-hover:[&>p:nth-of-type(1)]:-translate-y-full
//         group-hover:[&>p:nth-of-type(1)]:opacity-0
//         group-hover:[&>p:nth-of-type(2)]:opacity-100
//         transition-transform duration-[0.75s] ease-[cubic-bezier(0.76, 0, 0.24, 1)]
//       "
//     >
//       <p className="transition-all duration-[0.75s] ease-[cubic-bezier(0.76, 0, 0.24, 1)]">
//         {label}
//       </p>
//       <p
//         className="
//           absolute opacity-0
//           [transform:rotateX(-90deg)_translateY(9px)]
//           origin-bottom
//           transition-all duration-[0.75s] ease-[cubic-bezier(0.76, 0, 0.24, 1)]
//         "
//       >
//         {label}
//       </p>
//     </motion.div>
//   );
// };

const PerspectiveText = ({ label }: Label) => {
  return (
    <motion.div
      initial={false}
      whileHover={"hovered"}
      className="relative h-full w-full flex items-center justify-center transform-3d"
      variants={{
        hovered: { rotateX: 90 },
      }}
      transition={{
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <motion.p
        variants={{
          hovered: {
            y: "-100%",
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {label}
      </motion.p>

      <motion.p
        className="absolute [transform:rotateX(-90deg)_translateY(10px)] opacity-0 origin-bottom"
        variants={{
          hovered: {
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};
