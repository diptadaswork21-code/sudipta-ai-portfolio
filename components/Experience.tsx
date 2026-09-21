"use client";

import { motion } from "framer-motion";


export default function Experience() {

return (

<section
id="experience"
className="py-24 px-10 bg-zinc-950 text-white"
>

<div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold mb-4">
Experience & Education
</h2>


<p className="text-gray-400 text-lg mb-12">
Academic background and practical exposure in Artificial Intelligence
and Machine Learning.
</p>



<div className="grid md:grid-cols-2 gap-8">



{/* Experience */}


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
duration:0.6
}}

viewport={{
once:true
}}

whileHover={{
y:-8
}}

className="
bg-zinc-900
p-7
rounded-3xl
border
border-zinc-800
"

>


<h3 className="text-2xl font-bold">
Brain Station 23
</h3>


<p className="text-blue-400 mt-2">
Machine Learning Industrial Attachment
</p>


<p className="text-gray-500 mt-1">
2025
</p>



<p className="text-gray-400 mt-5 leading-relaxed">
Gained practical experience in machine learning workflows,
including data preprocessing, model development, evaluation,
and understanding AI application development processes.
</p>



<div className="flex flex-wrap gap-2 mt-5">


<span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
Python
</span>


<span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
Machine Learning
</span>


<span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
Data Analysis
</span>


</div>



</motion.div>





{/* Education */}



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
duration:0.8
}}

viewport={{
once:true
}}

whileHover={{
y:-8
}}

className="
bg-zinc-900
p-7
rounded-3xl
border
border-zinc-800
"

>


<h3 className="text-2xl font-bold">
Chittagong University of Engineering and Technology
</h3>


<p className="text-blue-400 mt-3">
B.Sc. in Electronics and Telecommunication Engineering
</p>


<p className="text-gray-500 mt-1">
2022 – 2026
</p>



<p className="text-gray-400 mt-5">
CGPA: 3.49 / 4.00
</p>



<p className="text-gray-400 mt-5 leading-relaxed">
Focused on Artificial Intelligence, Machine Learning,
Deep Learning, and intelligent system development.
</p>



<div className="flex flex-wrap gap-2 mt-5">


<span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
AI Research
</span>


<span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
Deep Learning
</span>


<span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
Computer Vision
</span>


</div>



</motion.div>



</div>


</div>


</section>

)

}