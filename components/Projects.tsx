"use client";

import { motion } from "framer-motion";


export default function Projects() {


const projects = [

{
title:"CineMaya AI",

category:"Generative AI | Recommendation System",

image:"/projects/cinemaya/images/homepage.png",

description:
"An AI-powered movie recommendation platform using Gemini API, semantic search, and vector-based retrieval to understand user queries and generate personalized recommendations.",

technologies:[
"Python",
"Gemini API",
"FAISS",
"Sentence Transformers",
"Streamlit"
],

link:"https://github.com/diptadaswork21-code/CineMaya-AI"

},


{
title:"Customer Churn Prediction AI",

category:"Machine Learning | Business Analytics",

image:"/projects/churn/images/homepage.png",

description:
"An XGBoost-based customer churn prediction platform with risk scoring, feature analysis, visualization, and AI-driven business recommendations.",

technologies:[
"Python",
"XGBoost",
"Machine Learning",
"Streamlit",
"Data Analytics"
],

link:"https://github.com/diptadaswork21-code/customer-churn-ai"

}

];



return(


<section
id="projects"
className="py-24 px-10 bg-black text-white"
>


<div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold mb-4">
Featured Projects
</h2>


<p className="text-gray-400 mb-12 text-lg">
AI applications developed using modern machine learning
and generative AI techniques.
</p>



<div
className="
grid
md:grid-cols-2
gap-8
"
>


{projects.map((project,index)=>(


<motion.div

key={project.title}


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:0.6,
delay:index*0.2
}}


viewport={{
once:true
}}


whileHover={{
y:-10
}}


className="
bg-zinc-900
border
border-zinc-800
rounded-3xl
overflow-hidden
transition
"


>



<img

src={project.image}

alt={project.title}

className="
w-full
h-64
object-cover
"

/>



<div className="p-7">



<p
className="
text-sm
text-blue-400
mb-3
"
>
{project.category}
</p>




<h3
className="
text-2xl
font-bold
"
>
{project.title}
</h3>




<p
className="
text-gray-400
mt-4
leading-relaxed
"
>
{project.description}
</p>





<div
className="
flex
flex-wrap
gap-2
mt-5
"
>


{project.technologies.map((tech)=>(


<span

key={tech}

className="
px-3
py-1
bg-zinc-800
rounded-full
text-sm
text-gray-300
"

>

{tech}

</span>


))}



</div>





<a

href={project.link}

target="_blank"

rel="noopener noreferrer"


className="
inline-block
mt-7
px-5
py-2
border
border-zinc-600
rounded-xl
hover:bg-white
hover:text-black
transition
"

>

View GitHub

</a>



</div>


</motion.div>



))}



</div>



</div>


</section>


);


}