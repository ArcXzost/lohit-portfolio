"use client";
import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

const FloatingShapes = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const shapes = useMemo(() => {
    if (!mounted) return [];
    
    const shapeArray = [];
    // Use a seed-based approach to ensure consistent results
    const seed = 12345;
    let random = seed;
    
    const seededRandom = () => {
      random = (random * 9301 + 49297) % 233280;
      return random / 233280;
    };

    for (let i = 0; i < 15; i++) {
      const yOffset = seededRandom() * 100 - 50;
      const xOffset = seededRandom() * 100 - 50;
      shapeArray.push({
        id: i,
        type: seededRandom() > 0.5 ? "circle" : "square",
        left: `${seededRandom() * 100}%`,
        top: `${seededRandom() * 100}%`,
        size: seededRandom() * 20 + 10,
        duration: seededRandom() * 10 + 10,
        delay: seededRandom() * 5,
        yOffset,
        xOffset,
      });
    }
    return shapeArray;
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.type === "circle" ? "rounded-full" : ""}`}
          style={{
            left: shape.left,
            top: shape.top,
            width: shape.size,
            height: shape.size,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          animate={{
            y: [0, shape.yOffset, 0],
            x: [0, shape.xOffset, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
