import { Link } from '@tanstack/react-router'
import { motion } from "motion/react";

import "./GameDisplay.css";

interface GameDisplayProps {
    name: string;
    url: string;
    icon: string;
}

function GameDisplay({ name, icon, url }: GameDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="GameContents"
    >
      <h2 className="GameTitle">{name}</h2>
      <Link to={url} className="GameLink">
        <img className="GameImg" src={icon} alt={name} />
      </Link>
    </motion.div>
  );
}

export { GameDisplay };
