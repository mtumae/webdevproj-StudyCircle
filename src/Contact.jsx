
import "./Contact.css"
import NavBar from "./Navbar"


export default function Contact(){

    
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
                    <form>
                        <label for="name">Name</label>
                        <input id="name"></input>

                        <label for="phone">Number</label>
                        <input id="phone"></input>

                        <label for="message">Message</label>
                        <textarea id="message"></textarea>

                        
                    </form>
                </div>

            </div>

        </section>
    )
}