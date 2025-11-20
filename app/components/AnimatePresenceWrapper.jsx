// // components/AnimatePresenceWrapper.jsx
// 'use client'

// import { AnimatePresence, motion } from 'motion/react'
// import { usePathname } from 'next/navigation'

// export default function AnimatePresenceWrapper({ children }) {
//   const pathname = usePathname()

//   // Variants for the slider overlay
//   const sliderVariants = {
//     // The initial state of the slider, completely below the screen
//     initial: {
//       y: '100vh'
//     },
//     // The animation sequence
//     animate: {
//       y: ['100vh', '0vh', '-100vh'], // 1. From bottom to center, 2. From center to top
//       transition: {
//         duration: 1.2, // Total duration of the sequence
//         times: [0, 0.5, 1], // At 50% of the duration, the slider is covering the screen
//         ease: 'easeInOut',
//       },
//     },
//   }

//   // Variants for the page content (simple fade)
//   const pageVariants = {
//     initial: {
//       opacity: 0,
//     },
//     animate: {
//       opacity: 1,
//       transition: {
//         delay: 0.6, // Wait for the slider to cover the screen before fading in the new page
//         duration: 0.4,
//       },
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         duration: 0.2, // Fade out the old page quickly
//       },
//     },
//   }

//   return (
//     <AnimatePresence mode="wait">
//       <div key={pathname} className="relative"> {/* Use a keyed div to wrap everything */}
//         {/* The SLIDER div */}
//         <motion.div
//           variants={sliderVariants}
//           initial="initial"
//           animate="animate"
//           className="absolute top-0 left-0 w-dvw h-dvh bg-[#222] z-50"
//         />

//         {/* The PAGE CONTENT */}
//         <motion.div
//           variants={pageVariants}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//         >
//           {children}
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   )
// }