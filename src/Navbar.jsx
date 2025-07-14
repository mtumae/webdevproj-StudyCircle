import { Sun } from 'lucide-react'
import './Navbar.css'
import { Sunset } from 'lucide-react'
import { Moon } from 'lucide-react'
import { Sunrise } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function NavBar(){
    const date = new Date()
    return(
        <div className="header">
            <h1>StudyCirlce</h1>
            <div className="inner-header">
                <NavLink   to='/' >
                    {({isActive})=>(
                        <span className={isActive?"active-link":''}>Home</span>
                    )}
                </NavLink>
                <NavLink  to='/about'>
                    {({isActive})=>(
                        <span className={isActive?"active-link":''}>About</span>
                    )}
                </NavLink>
                <NavLink to='/contact'>
                    {({isActive})=>(
                        <span className={isActive?"active-link":''}>Contact</span>
                    )}
                </NavLink>
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