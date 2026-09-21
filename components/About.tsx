"use client";

import { motion } from "framer-motion";


export default function About(){

return(

<section
id="about"
className="py-24 px-10 bg-zinc-950 text-white"
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

className="max-w-5xl mx-auto"

>


<h2 className="text-4xl font-bold mb-8">
About Me
</h2>


<p
className="
text-gray-300
text-lg
leading-relaxed
"
>

I am an AI Engineer specializing in Machine Learning,
Deep Learning, Generative AI, and Multimodal Artificial Intelligence.
I build practical AI systems that combine data-driven modeling
with real-world applications.

<br/><br/>

My research focuses on multimodal misinformation detection using
CLIP-based image-text representation learning, exploring
vision-language models, domain adaptation, fine-tuning, and
cross-domain evaluation.

<br/><br/>

Alongside research, I have developed AI applications including a
Gemini-powered movie recommendation system and an XGBoost-based
customer churn prediction platform, applying AI techniques in
consumer and business domains.

<br/><br/>

My future interests include Healthcare AI, AI-powered business
solutions, Cybersecurity AI, Trustworthy AI, and advanced
multimodal learning systems.

</p>


</motion.div>


</section>

)

}