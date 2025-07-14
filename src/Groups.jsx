import './Groups.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { CirclePlus, ChevronLeft, Settings } from 'lucide-react'
//import icons from lucide



export default function Groups() {
  const params = useParams()
  const navigate = useNavigate()
  const[msg, setMsg]=useState("")
  const [copy, setCopy]=useState('')
  const[oldmessages]=useState([{user:"Mtume", time:"08/06/2025 17:04", msg:"I love this class.", file:null}, {user:"Bob", time:"10/09/2025 13:00", msg:"I don't love this class."}])//populate with messages from object
  const[newmessages, setNewMessages]=useState([""])


  function LeaveGroup(){
    if(confirm("Are you sure you want to leave "+params.label)){
      navigate("/")
    }
  }


  async function InviteUser(){
    setCopy("https://StudyCircle.com/groups/"+params.label)
    try{
      await navigator.clipboard.writeText(copy)
      alert("Invite link copied to clipboard! \n You can also copy the text here: "+copy)
    }catch(error){
      console.log(error)
    }
  }

  function backHome(){
    navigate("/")
  }
  

  function onEnter(e){
      if (e.key === 'Enter') {
        const now = new Date()
        const msgobj = {user:"Mtume", msg:msg, time:now.toLocaleDateString()+" "+now.toLocaleTimeString()}
        setNewMessages(msgobj)
        oldmessages.push(msgobj)
      }
      console.log(newmessages)
  console.log("New Messages: ",newmessages)
  }
  return (
    <>
    <div className="header">
        <div className="title">
          <ChevronLeft onClick={backHome} className='back-arrow' size={40}/>
          <h1>{params.label}</h1>
        </div>
        <div className="flex-box">
          <button>
            <Settings  />
          </button>
          <button onClick={InviteUser}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus-icon lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
          </button>
          <button onClick={LeaveGroup} className="destructive-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-minus-icon lucide-circle-minus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
          </button>
        </div>
      </div>
      <div class='chat-box'>
        {oldmessages.map((msg, id)=>(

          msg.user=="Mtume"?
          <div key={id} className="new-message">
            <p>{msg.msg}</p>
            <p style={{color:"white"}} className="userlbl">{msg.user} <span className='time-text'>{msg.time}</span></p>
          </div>
          :
          <div key={id} className="message">
            <p>{msg.msg}</p>
            <p  className="userlbl">{msg.user} <span className='time-text'>{msg.time}</span></p>
          </div>
        ))}
      </div>
        <div className="input-box">
          <div className='input-flex-box'>
                <input 
                  onKeyDown={(e)=>{onEnter(e)}}
                  onChange={
                    (e)=>{
                      setMsg(e.target.value)
                    }}  
                  id="msginput" 
                  placeholder="Enter your message..."
                  />
                  <CirclePlus className="plus-icon" size={30} /> 
                </div>     
                <div className='banner'>
                    <h1>CAT Presentations on Thursday 10 July</h1>
                </div>  
        </div>
    </>
  )
}


