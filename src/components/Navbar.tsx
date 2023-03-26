import {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
const [isVisible, setIsVisible] = useState(false)

const dropDown = () => {
    setIsVisible(!isVisible)
    
}

const clicked = () => {
    setIsVisible(false)
}

  return (
    <nav>
        <div className="nav-bar">
            <Link to='/' className='title'>Cars 'R' Us</Link>
            <div className="">
                <button 
                    onClick={dropDown}
                    className={"btn"}>
                    <i className="fa-solid fa-bars"></i>
                    </button>
            </div>
        </div>
       
        {isVisible ? (
            <div className='drop-down'>
                <button className='btn'>
                    <div>
                        <Link to='/'  onClick={clicked} className='btn-text'>
                            Home
                        </Link>
                    </div>
                </button>
                <button className='btn'>
                    <div>
                        <Link to='/dashboard'  onClick={clicked} className='btn-text'>
                            Dashboard
                        </Link>
                    </div>
                </button>
            </div>) : (<></>)}
    </nav>
  )
}

export default Navbar