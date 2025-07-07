import NavBar from "./Navbar";
import studentStudying from "/student-studying1.jpg"
import studentStudying2 from "/students-studying1.jpg"
import './Home.css'
import { SquarePlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const groups = [
    {name:'coa', label:"Computer Organization and Development", members:10, color:"#fdbf04"},
    {name:'web', label:"Web Application Development", members:30, color:"#3b9e7f" },
    {name:'eth', label:"Principles of Ethics", members:15, color:"#9c025d" },
    {name:'net', label:"Networking", members:35, color:"#293133" },
    {name:'stats', label:"Probability & Statistics", members:28, color:"#018fcf"},
    {name:'spanish', label:"Spanish", members:10, color:"#f36523" },
    {name:'german', label:"German", members:5, color:"#755C48" },
    {name:'itp', label:"Introduction to Philosophy", members:12, color:"#6D3F5B" },
    {name:'dbms', label:"Database Management Systems", members:6, color:"#9B111E" },
    {name:'pa', label:"Philosophical Antrhopology", members:13, color:"#606E8C" },
    {name:'dsa', label:"Data Structures & Algorithms", members:23, color:"#00df82" },
    {name:'pom', label:"Principles of Management", members:12, color:"#A98307" },
    {name:'app', label:"Assembly Programming", members:19, color:"#6A5F31" },
    {name:'gad', label:"Game Development", members:32, color:"#316650" },

]

export default function Home(){
    const navigate = useNavigate()
    const [color, setColor]=useState("")
    const [newGroups] = useState([])

    
    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target)
        const formDataobj = Object.fromEntries(formData);
        console.log(formDataobj)
        newGroups.push(formDataobj)
        console.log(newGroups)
    }

    return(
        <section>
            <NavBar />
          <div class="box">
            <img class="homepage-img1" src={studentStudying}/>
            <p class="box-text">
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
                            <SquarePlus onClick={()=>{navigate("/groups/"+g.label)}} class="group-box-icon" color={g.color} />
                        </div>
                        <p>{g.members.toString()} members</p>
                    </div>
                ))}
                {newGroups>0?
                newGroups.map((n, id)=> (
                    <div key={id} class="group-box">
                        <div class="flex">
                            <h1 style={{color:new.target}}>{new.target}</h1>
                            <SquarePlus onClick={()=>{navigate("/groups/"+new.target)}} class="group-box-icon" color={new.target}/>
                        </div>
                        <p>0 members</p>
                    </div>
                )):<div></div>}
            </div>
        </div>
        <div class="create-section">
            <form method="post" id="create-form" class="create-form" onSubmit={handleSubmit}>
                <div>
                    <label for="group-name">Group name</label>
                    <input name="group-name" style={{color:color}} id="group-name" placeholder=""/>
                </div>
                <div className="flex-box">
                <label htmlFor="color">Pick a color</label>
                <select 
                onChange={(e)=>{setColor(e.target.value)}}
                name="color" id="color">
                    <option value={"black"}>Black</option>
                    <option value={"red"}>Red</option>
                    <option value={"green"}>Green</option>
                    <option value={"blue"}>Blue</option>
                </select>
                </div>
                <div class="grid-box">
                    <label for="description">Description</label>
                    <textarea name="description" id="description" />
                    <p>Give a short description of the group</p>
                </div>
                <button>Create</button>
            </form>
            <div>
                <h1>Create a Group</h1>
                <p>
                    Creating a study group on StudyCircle is quick and easy! Fill out the form with your group’s name, description, and preferred color. 
                    Once your group is set up, you’ll receive a unique invite link you can share via email, messaging apps, or 
                    social media. You can also search for friends directly on the platform and send them invitations to join. 
                    Start your own learning community today and enjoy the benefits of studying together!
                </p>
            </div>
        </div>
       </section>
    )
}