import ClientStatus from "./status"
import { motion } from "framer-motion";

const ClientStatistics = () =>{
   return (
    <div className="px-10 md:px-24 flex flex-col-reverse gap-10 md:flex-row md:justify-between items-center py-16">
        <ClientStatus/>
       <motion.div
  initial={{ y: 100, opacity: 0 }}   // start lower
  whileInView={{ y: 0, opacity: 1 }} // move up
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex flex-col gap-5 w-full md:w-3/6"
>
  <h1 className="text-dark text-3xl md:text-5xl font-bold">
    Our achievements
  </h1>

  <p className="text-2xl pr-0 md:pr-14">
    Abracadabra, here are a few numbers we’ve pulled out of our hat these last couple of years.
  </p>
</motion.div>
    </div>
   )
}

export default ClientStatistics