import './Groups.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { CirclePlus } from 'lucide-react'
//import icons from lucide



export default function Groups() {
  const params = useParams()
  const navigate = useNavigate()
  const[msg, setMsg]=useState("")
  const [copy, setCopy]=useState('')
  const[oldmessages]=useState([{user:"Mtume", msg:"I love this class.", file:null}, {user:"Bob", msg:"I don't love this class."}])//populate with messages from object
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
  

  function onEnter(e){
      if (e.key === 'Enter') {
        const msgobj = {user:"Mtume", msg:msg}
        setNewMessages(msgobj)
        oldmessages.push(msgobj)
      }
      console.log(newmessages)
  console.log("New Messages: ",newmessages)
  }





  return (
    <>
    <div class="header">
        <div class="title">
          <h1>{params.label}</h1>
        </div>
        <div class="flex-box">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
          </button>
          <button onClick={InviteUser}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus-icon lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
          </button>
          <button onClick={LeaveGroup} class="destructive-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-minus-icon lucide-circle-minus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
          </button>
        </div>
      </div>

      <div class='chat-box'>
        {oldmessages.map((msg, id)=>(

          msg.user=="Mtume"?
          <div key={id} class="new-message">
            <p>{msg.msg}</p>
            <p class="userlbl">{msg.user}</p>
          </div>
          :
          <div key={id} class="message">
            <p>{msg.msg}</p>
            <p class="userlbl">{msg.user}</p>
          </div>
        ))}
      </div>
        <div class="input-box">
                <input 
                  onKeyDown={(e)=>{onEnter(e)}}
                  onChange={
                    (e)=>{
                      setMsg(e.target.value)
                      
                    }}  
                  id="msginput" 
                  placeholder="Enter your message..."
                  />
                <CirclePlus class="plus-icon" size={30} />        
        </div>
    </>
  )
}


