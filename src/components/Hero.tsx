import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ArrowRight, Brain, Sparkles, Server, Database, Code } from 'lucide-react';

function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = 70;
    const maxDistance = 150;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 1.5 + 0.5
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Add slight attraction to mouse position
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          particle.vx += dx * 0.0001;
          particle.vy += dy * 0.0001;
        }

        // Limit velocity
        const maxVel = 0.8;
        const vel = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (vel > maxVel) {
          particle.vx = (particle.vx / vel) * maxVel;
          particle.vy = (particle.vy / vel) * maxVel;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect particles
        particles.slice(i + 1).forEach(other => {
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.globalAlpha = 1 - (distance / maxDistance);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40 dark:opacity-25"
      style={{ background: 'transparent' }}
    />
  );
}

const FeatureIcon = ({ icon: Icon, delay }: { icon: React.ElementType, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay
      }}
      whileHover={{ 
        scale: 1.2,
        rotate: [0, 10, -10, 0],
        transition: { duration: 0.5 }
      }}
      className="relative"
    >
      <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-30" />
      <div className="relative bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
    </motion.div>
  );
};

const TextReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const TypewriterEffect = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const controls = useAnimation();
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [text, delay]);
  
  return <span>{displayText}</span>;
};

const FloatingCards = () => {
  const cards = [
    { title: "Machine Learning", icon: Brain, color: "from-blue-400 to-indigo-500" },
    { title: "Data Analysis", icon: Database, color: "from-purple-400 to-pink-500" },
    { title: "Neural Networks", icon: Server, color: "from-emerald-400 to-teal-500" },
    { title: "Algorithms", icon: Code, color: "from-amber-400 to-orange-500" }
  ];

  return (
    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.7 + index * 0.1,
            type: "spring",
            stiffness: 150,
            damping: 20
          }}
          whileHover={{ 
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          className={`relative overflow-hidden rounded-l-xl rounded-r-none bg-gradient-to-br ${card.color} p-6 text-white shadow-lg border-r border-r-white/10`}
        >
          <div className="absolute right-2 top-2 opacity-20">
            <card.icon size={60} />
          </div>
          <h3 className="font-bold">{card.title}</h3>
          <p className="text-sm opacity-80 mt-2">Advanced solutions for enterprise needs</p>
        </motion.div>
      ))}
    </div>
  );
};

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const cards = [
    { title: "Machine Learning", icon: Brain, color: "from-blue-400 to-indigo-500" },
    { title: "Data Analysis", icon: Database, color: "from-purple-400 to-pink-500" },
    { title: "Neural Networks", icon: Server, color: "from-emerald-400 to-teal-500" },
    { title: "Algorithms", icon: Code, color: "from-amber-400 to-orange-500" }
  ];
  
  return (
    <div className="relative overflow-hidden pt-16 min-h-screen bg-gray-900 text-white">
      <NetworkAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <div className="relative mb-10 flex justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-6 -right-6 z-10"
            >
              <Sparkles className="h-12 w-12 text-yellow-400" />
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px 10px rgba(37, 99, 235, 0.2)",
                    "0 0 40px 20px rgba(37, 99, 235, 0.4)",
                    "0 0 20px 10px rgba(37, 99, 235, 0.2)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 rounded-full"
              />
              <Brain className="relative z-10 h-20 w-20 text-blue-600" />
            </motion.div>
            
            <div className="absolute left-0 right-0 flex justify-around top-2">
              <FeatureIcon icon={Server} delay={1.1} />
              <FeatureIcon icon={Database} delay={1.3} />
              <FeatureIcon icon={Code} delay={1.5} />
            </div>
          </div>
          
          <TextReveal delay={0.2}>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Next Generation
              <motion.span
                animate={{
                  color: ['#4e7bfd', '#637afc', '#8b5cf6', '#4e7bfd'],
                  textShadow: [
                    "0 0 7px rgba(78, 123, 253, 0.6)",
                    "0 0 10px rgba(99, 122, 252, 0.6)",
                    "0 0 7px rgba(78, 123, 253, 0.6)"
                  ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="block text-blue-500"
              >
                <TypewriterEffect text="AI Solutions" delay={0.8} />
              </motion.span>
            </h1>
          </TextReveal>
          
          <TextReveal delay={0.4}>
            <p className="mt-6 text-lg text-gray-400">
              Transforming businesses through innovative artificial intelligence solutions.
              We help companies leverage the power of AI to drive growth and efficiency.
            </p>
          </TextReveal>
          
          <TextReveal delay={0.6}>
            <div className="mt-10 flex gap-x-6 justify-center">
              <motion.a
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
              >
                <AnimatePresence>
                  {hovered && (
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      exit={{ x: "100%" }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 bg-white opacity-20"
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">Get Started</span>
                <motion.div
                  animate={hovered ? { x: 5 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="relative z-10"
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="text-sm font-semibold leading-6 text-gray-300 flex items-center gap-2"
              >
                Learn more <ArrowRight size={16} />
              </motion.a>
            </div>
          </TextReveal>
        </motion.div>
      </div>
      
      {/* Tab-style cards at the bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="flex overflow-x-auto pb-4 hide-scrollbar">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 150,
                  damping: 20
                }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCardIndex(index)}
                className={`cursor-pointer flex-shrink-0 w-64 overflow-hidden rounded-t-xl ${
                  selectedCardIndex === index 
                    ? `bg-gradient-to-r ${card.color} translate-y-0 shadow-lg z-10` 
                    : 'bg-gray-800 translate-y-4 opacity-70'
                } p-4 mx-1 transition-all duration-300`}
              >
                <div className="flex items-center">
                  <div className={`mr-3 ${selectedCardIndex === index ? 'text-white' : 'text-gray-400'}`}>
                    <card.icon size={24} />
                  </div>
                  <h3 className={`font-bold ${selectedCardIndex === index ? 'text-white' : 'text-gray-300'}`}>
                    {card.title}
                  </h3>
                </div>
                
                {selectedCardIndex === index && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-sm text-white/80 mt-2"
                  >
                    Advanced solutions for enterprise needs
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <motion.div
  animate={{
    opacity: [0.2, 0.3, 0.2],
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse",
  }}
  className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
>
  <div
    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-purple-400 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
    style={{
      clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    }}
  />
</motion.div>

    </div>
  );
}