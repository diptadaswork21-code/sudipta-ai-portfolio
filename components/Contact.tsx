"use client";

import { motion } from "framer-motion";


export default function Contact(){

return(

<section
id="contact"
className="py-24 px-10 bg-black text-white"
>


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.7
}}

viewport={{
once:true
}}

className="
max-w-4xl
mx-auto
text-center
"

>



<h2
className="
text-4xl
font-bold
"
>
Let's Connect
</h2>




<p
className="
text-gray-400
mt-5
text-lg
leading-relaxed
"
>
Interested in AI engineering, machine learning projects,
research collaboration, or building intelligent AI systems?
Feel free to reach out.
</p>





<div
className="
mt-10
flex
flex-wrap
justify-center
gap-5
"
>




<motion.a
  whileHover={{
    scale: 1.05
  }}
  href="https://mail.google.com/mail/?view=cm&fs=1&to=diptadaswork21@gmail.com&su=Portfolio%20Inquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="
  px-6
  py-3
  border
  border-zinc-700
  rounded-xl
  hover:bg-white
  hover:text-black
  transition
  "
>
  Email
</motion.a>





<motion.a

whileHover={{
scale:1.05
}}

href="https://github.com/diptadaswork21-code"

target="_blank"

rel="noopener noreferrer"

className="
px-6
py-3
border
border-zinc-700
rounded-xl
hover:bg-white
hover:text-black
transition
"

>

GitHub

</motion.a>







<motion.a

whileHover={{
scale:1.05
}}

href="https://linkedin.com/in/sudipta-das-0537212b3"

target="_blank"

rel="noopener noreferrer"

className="
px-6
py-3
border
border-zinc-700
rounded-xl
hover:bg-white
hover:text-black
transition
"

>

LinkedIn

</motion.a>




</div>





<div
className="
mt-10
bg-zinc-900
border
border-zinc-800
rounded-2xl
p-6
inline-block
"
>


<p className="text-gray-400">

📧 diptadaswork21@gmail.com

</p>


<p className="text-gray-400 mt-2">

📱 01881627991

</p>


</div>




</motion.div>


</section>

)

}