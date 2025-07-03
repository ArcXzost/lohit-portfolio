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
    const seed = 12345;
    let random = seed;
    
    const seededRandom = () => {
      random = (random * 9301 + 49297) % 233280;
      return random / 233280;
    };

    for (let i = 0; i < 20; i++) {
      const yOffset = seededRandom() * 60 - 30;
      const xOffset = seededRandom() * 60 - 30;
      const rotation = seededRandom() * 360;
      
      shapeArray.push({
        id: i,
        type: seededRandom() > 0.6 ? "circle" : seededRandom() > 0.3 ? "square" : "triangle",
        left: `${seededRandom() * 100}%`,
        top: `${seededRandom() * 100}%`,
        size: seededRandom() * 30 + 15,
        duration: seededRandom() * 15 + 10,
        delay: seededRandom() * 8,
        yOffset,
        xOffset,
        rotation,
        opacity: seededRandom() * 0.3 + 0.1,
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
          className={`absolute ${
            shape.type === "circle" 
              ? "rounded-full" 
              : shape.type === "triangle"
              ? "triangle"
              : "rounded-lg"
          }`}
          style={{
            left: shape.left,
            top: shape.top,
            width: shape.size,
            height: shape.size,
            background: shape.type === "triangle" 
              ? "transparent"
              : `linear-gradient(135deg, rgba(59, 130, 246, ${shape.opacity}), rgba(147, 51, 234, ${shape.opacity * 0.8}))`,
            opacity: shape.opacity,
          }}
          animate={{
            y: [0, shape.yOffset, 0],
            x: [0, shape.xOffset, 0],
            rotate: [0, shape.rotation, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: shape.delay,
          }}
        >
          {shape.type === "triangle" && (
            <div
              className="w-0 h-0"
              style={{
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid rgba(236, 72, 153, ${shape.opacity})`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;