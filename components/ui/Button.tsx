import { motion } from "framer-motion"; // Correct import

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button = ({ text, onClick }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
    onClick={onClick}
  >
    {text}
  </motion.button>
);