import { motion } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, BookOpen } from 'lucide-react'

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { 
        duration: 0.2 
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-[500px] lg:min-h-[600px] px-4 py-12 md:py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
      
      {/* Animated patterns */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,#fff,transparent)]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          variants={itemVariants}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Lärande utan gränser
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 max-w-2xl mb-12 px-4"
          >
            Lektionsmaterial för högstadiet och gymnasiet skapade av lärare för lärare.
            Utforska vårt omfattande bibliotek av pedagogiska resurser.
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row gap-4 w-full max-w-md md:max-w-2xl justify-center px-4"
            variants={itemVariants}
          >
            <Link href="/grades/gymnasiet" className="w-full md:w-auto">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="w-full md:w-auto group flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg"
              >
                <GraduationCap className="w-5 h-5 transition-transform group-hover:-rotate-12" />
                <span>Gymnasiet</span>
              </motion.button>
            </Link>

            <Link href="/grades/hogstadiet" className="w-full md:w-auto">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="w-full md:w-auto group flex items-center justify-center gap-2 px-8 py-4 bg-blue-900 text-white rounded-xl font-semibold shadow-lg"
              >
                <BookOpen className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Högstadiet</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Circles */}
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
    </motion.div>
  )
}

export default Header