"use client";

import { motion } from "framer-motion";


export default function Skills(){


const skills = [

{
title:"Programming & Data Processing",

items:
"Python, SQL, Pandas, NumPy"
},


{
title:"Machine Learning",

items:
"Scikit-learn, XGBoost, Random Forest, Classification, Regression, Feature Engineering"
},


{
title:"Deep Learning & Computer Vision",

items:
"PyTorch, Deep Learning, Computer Vision, Transfer Learning, Model Fine-tuning"
},


{
title:"Multimodal AI",

items:
"CLIP, Vision-Language Models, Image-Text Representation Learning, Multimodal Learning"
},


{
title:"Generative AI & NLP",

items:
"Gemini API, Sentence Transformers, FAISS, Natural Language Processing, Semantic Search"
},


{
title:"Development & Deployment",

items:
"Streamlit, REST APIs, Requests, Git, GitHub"
}


];



return(


<section
id="skills"
className="py-24 px-10 bg-black text-white"
>


<div className="max-w-6xl mx-auto">


<h2
className="
text-4xl
font-bold
mb-4
"
>
Technical Skills
</h2>



<p
className="
text-gray-400
text-lg
mb-12
"
>
Technologies and tools I use to build machine learning
and AI-powered applications.
</p>





<div
className="
grid
md:grid-cols-2
gap-6
"
>


{skills.map((skill,index)=>(



<motion.div


key={skill.title}



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
mb-4
"
>
{skill.title}
</h3>



<p
className="
text-gray-400
leading-relaxed
"
>
{skill.items}
</p>



</motion.div>



))}



</div>



</div>


</section>


)

}