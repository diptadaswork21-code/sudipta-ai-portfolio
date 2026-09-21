"use client";

import { motion } from "framer-motion";


export default function Research(){

const interests = [

{
title:"Multimodal AI & Vision-Language Models",

description:
"My research focuses on multimodal misinformation detection using CLIP-based image-text representation learning, exploring vision-language models, domain adaptation, fine-tuning, and cross-domain evaluation."
},


{
title:"Trustworthy & Responsible AI",

description:
"Interested in developing reliable AI systems that improve model transparency, robustness, and trustworthiness for real-world applications."
},


{
title:"Healthcare AI",

description:
"Exploring AI applications in healthcare including medical data analysis, predictive modeling, and intelligent decision-support systems."
},


{
title:"AI for Business Applications",

description:
"Interested in applying AI for business intelligence, predictive analytics, recommendation systems, and customer behavior analysis."
},


{
title:"AI Security & Cybersecurity",

description:
"Interested in secure AI systems, anomaly detection, adversarial learning, and AI-driven approaches for cybersecurity challenges."
}

];



return(

<section
id="research"
className="py-24 px-10 bg-zinc-950 text-white"
>


<div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold mb-4">
Research Interests
</h2>


<p className="text-gray-400 text-lg mb-12">
Exploring intelligent systems through multimodal learning,
trustworthy AI, and real-world AI applications.
</p>



<div className="grid md:grid-cols-2 gap-6">


{interests.map((item,index)=>(


<motion.div


key={item.title}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:0.5,
delay:index*0.1
}}


viewport={{
once:true
}}


whileHover={{
y:-8
}}


className="
bg-zinc-900
p-6
rounded-3xl
border
border-zinc-800
"


>


<h3
className="
text-xl
font-bold
"
>
{item.title}
</h3>



<p
className="
text-gray-400
mt-3
leading-relaxed
"
>
{item.description}
</p>


</motion.div>


))}


</div>



</div>


</section>

)

}