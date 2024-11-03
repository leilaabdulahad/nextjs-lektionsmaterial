import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative max-w-screen-lg mx-auto text-center p-20  rounded-3xl shadow-2xl m-4 h-96 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full gap-8"
        variants={itemVariants}
      >
        <motion.p 
          className="text-lg font-medium text-white leading-relaxed max-w-sm mx-auto whitespace-pre-wrap"
          variants={itemVariants}
        >
          Lektionsmaterial för högstadiet och gymnasiet skapade av lärare för lärare.
        </motion.p>

        <div className="flex flex-col gap-4 absolute right-4">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ delay: 0.5 }}
            className="px-6 py-3 bg-white text-blue-800 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Gymnasiet
          </motion.button>
          <Link href="/grades/hogstadiet">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ delay: 0.7 }}
            className="px-6 py-3 bg-white text-blue-800 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Högstadiet
          </motion.button>
            </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Header