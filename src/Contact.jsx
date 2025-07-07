
import { useState } from "react"
import "./Contact.css"
import NavBar from "./Navbar"


export default function Contact(){
    const [numerrormsg, setnumErrormsg]=useState('')
    const [nameerrormsg, setnameErrormsg]=useState('')

    function handleSubmit(e){
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const formDataobj = Object.fromEntries(formData);
        console.log(formDataobj)
        alert("Your message has been recorded:\n "+formDataobj.message)
    }


    return(
        <section>
            <NavBar />

            <div className="contact-us">
                <div>
                    <h1 style={{fontSize:'30px'}}>Contact Us</h1>
                    <p>We’d love to hear from you! If you have questions, feedback, or need help using StudyCircle, our team is ready to assist. You can reach us anytime through our “Contact Us” page by filling out the quick form with your message and contact details. Prefer email? Drop us a line at support@studycircle.com, and we’ll get back to you as soon as possible. 
                        Follow us on social media for updates, tips, and community news. Let’s stay connected and keep learning together!</p>
                </div>
                <div className="contact-form">
                    <form method="post" onSubmit={handleSubmit}>
                        <label for="name">Name</label>
                        <input name="name" onChange={(e)=>{e.target.value.length<=2?setnameErrormsg('Name must be more than 2 characters!'):setnameErrormsg('')}} id="name"></input>
                        <p style={{color:'red'}}>{nameerrormsg}</p>

                        <label for="phone">Number</label>
                        <input name="number" onChange={(e)=>{e.target.value.length<9?setnumErrormsg('Phone number must be 10 characters!'):setnumErrormsg('')}} id="phone"></input>
                        <p style={{color:'red'}}>{numerrormsg}</p>

                        <label for="message">Message</label>
                        <textarea name="message" id="message"></textarea>

                        <button type="submit">Send message</button>

                        
                    </form>
                </div>

            </div>

        </section>
    )
}