import { Sun } from 'lucide-react'
import './Navbar.css'
import { Sunset } from 'lucide-react'
import { Moon } from 'lucide-react'
import { Sunrise } from 'lucide-react'


export default function NavBar(){
    const date = new Date()
    console.log(date)


    return(
        <div class="header">
            <h1>StudyCirlce</h1>
            <div class="inner-header">
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
                {date.getHours()>=12&&date.getHours()<17?
                <p className='flex-box'>Good afternoon <Sun /></p>
                :date.getHours()>=17&&date.getHours()<19?
                <p className='flex-box'>Good evening <Sunset /></p>
                :date.getHours()>=19&&date.getHours()<24?
                <p className='flex-box'>Good night <Moon /></p>
                :<p className='flex-box'>Good morning <Sunrise /></p>
            }
            </div>
        </div>

    )
}