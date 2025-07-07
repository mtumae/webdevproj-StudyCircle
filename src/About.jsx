import NavBar from "./Navbar";
import "./About.css"
import { Star, CircleUser } from "lucide-react";


const testimonials = [
    {name:"Mtume Owino", title:"Software Engineer🧑🏿‍💻", description:"StudyCircle completely changed how I prepare for my exams. Joining a group for Fluid Mechanics helped me finally get the concepts I’d struggled with for months. The discussions and shared resources made such a difference. I highly recommend my group to anyone studying mechanical engineering—it’s supportive and super organized!"},
    {name:"Priya S.", title:"Scientist🧪", description:"I used to study alone and felt overwhelmed, but since joining StudyCircle’s AP Chemistry group, I’ve been more confident and my grades have improved. Everyone’s willing to help, and we even do practice tests together. I encourage other AP students to join—it’s way less stressful when you’re not alone!"},
    {name:"David M.", title:"Economist🤑", description:"I joined a Finance study group on StudyCircle, and it’s been a game-changer. We share notes, solve practice questions, and help each other understand tricky topics like derivatives and valuation models. I’d definitely recommend joining our group if you’re in business school—it’s helped me stay on top of my workload."},
    {name:"Lina T.", title:"Language🗣️", description:"I love practicing my Spanish in my StudyCircle group. We chat daily, share videos and vocab lists, and even correct each other’s writing. It’s fun and way more effective than studying alone. I’d invite anyone who’s learning Spanish to join us—the community vibe keeps you motivated!"}
]


const employees = [
    {name:"Mtume Owino", label:"Developer"},
    {name:"Emmanuel Munida", label:"Developer"},
    {name:"Shekinah Gloria", label:"Developer"},
    {name:"Flaviour Muiga", label:"Developer"},
]



export default function About(){
    return(
        <section>
            <NavBar />

            <h1 style={{color:'#fdbf04', textAlign:'right'}}>Testimonials</h1>
            <div className="flex-container">
                {testimonials.map((test, id)=>(
                    <div className="card" key={id}>
                        <div className="card-title">
                            <h1>{test.name}</h1>
                            <p>{test.title}</p>
                        </div>
                        <p>{test.description}</p>
                    </div>
                ))}
            </div>


            <div>
                <h1 style={{color:'#fdbf04'}}>Created by</h1>
                {employees.map((emp, id)=>(
                    <div key={id} style={{marginBottom:'10px'}} className="card">
                        <div className="flex-container">
                            <CircleUser color="#46454a" size={40} />
                            <h1 style={{fontSize:'18px'}}>{emp.name}</h1>
                        </div>
                    </div>
                ))}
           
            </div>
            

        </section>
    )
}