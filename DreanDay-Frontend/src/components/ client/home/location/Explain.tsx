import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";


const ExplanationLocation = () =>{
    return (
        
       <motion.div
  initial={{ y: 100, opacity: 0 }}   // start lower
  whileInView={{ y: 0, opacity: 1 }} // move up
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex flex-col gap-8 w-full md:w-3/6"
>
  <h1 className="text-universal text-3xl md:text-5xl font-bold">
    We work nationwide
  </h1>

  <p className="text-2xl pr-0 md:pr-14">
    Since the end of 2023, we've been hustling hard and building partnerships with some major players all over the country.
  </p>
  <Link to="/services" className="text-secondary font-bold flex gap-2">ABOUT US <ArrowRight className="w-10 h-5" /></Link>
</motion.div>
   
    )
}
export default ExplanationLocation