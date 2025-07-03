import NavBar from "./Navbar";
import studentStudying from "/student-studying1.jpg"
import studentStudying2 from "/students-studying1.jpg"
import './Home.css'
import { SquarePlus } from "lucide-react";
import { useState } from "react";


const groups = [
    {name:'coa', label:"Computer Organization and Development", members:10, color:"#fdbf04"},
    {name:'webdev', label:"Web Application Development", members:30, color:"#3b9e7f" },
    {name:'ethics', label:"Principles of Ethics", members:15, color:"#9c025d" },
    {name:'stats', label:"Probability & Statistics", members:28, color:"#018fcf"},
    {name:'spanish', label:"Spanish", members:10, color:"#f36523" },
    {name:'dsa', label:"Data Structures & Algorithms", members:23, color:"#00df82" },
]

export default function Home(){
    const [formData, setFormData] = useState({
        name:"",
        label:"",
        members:0,
        color:""
    })


    const onSubmit = () =>{
        
    }




    return(
        <section>
            <NavBar />

          <div class="box">
            <img class="homepage-img1" src={studentStudying}/>
            <p class="box-text">
                <img class="box-text-img" src="/team.png"></img>
                Welcome to StudyCircle, your go-to hub for collaborative learning and academic success! 
                Whether you're preparing for exams, tackling tough assignments, or simply looking to expand 
                your knowledge, our platform connects you with like-minded students ready to learn and grow 
                together. Join or create study groups, share resources, schedule sessions, and stay motivated all
                in one convenient place. Let’s make studying smarter, not harder
            </p>
          </div>

           <div class="box">
            <p class="box-text">
                StudyCircle, you’ll find groups covering a wide range of subjects, from math and 
                science to languages, arts, and professional exams. Each group offers a supportive 
                space where members can discuss ideas, solve problems, exchange notes, and quiz each 
                other for better retention. Studying with peers not only boosts understanding and confidence 
                but also keeps you accountable and motivated. Plus, you’ll gain valuable collaboration skills
                 and maybe even make new friends along the way!
            </p>
            <img class="homepage-img2" src={studentStudying2}/>
          </div>


        <div class="groups-section">
            <h1>Join a Group</h1>


            <div class="groups-flexbox">
                {groups.map((g, id)=>(
                    <div key={id} class="group-box">
                        <div class="flex">
                            <h1 style={{color:g.color}}>{g.label}</h1>
                            <SquarePlus class="group-box-icon" color={g.color} />
                        </div>
                        <p>{g.members.toString()} members</p>
                    </div>
                ))}
            </div>
        </div>


        <div class="create-section">
            
            

            <form class="create-form">
                <div>
                <label for="groupname">Group name</label>
                <input id="groupname" placeholder=""/>
                </div>

                <div class="grid-box">
                    <label for="description">Description</label>
                    <textarea type="message" id="description" />
                    <p>Give a short description of the group</p>
                </div>

                <button>Create</button>
            </form>

            <div>
                <h1>Create a Group</h1>
            </div>


        </div>



    
            
       </section>
    )
}