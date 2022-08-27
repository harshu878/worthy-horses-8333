import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div class="navbar">
    <img src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg" alt="Time camp"/>
    <div>
    <p>Features</p>
     <p>
     <Link to="/Pricing">Pricing</Link>
     </p>
     <p>
     <Link to="/Integrations">Integrations</Link></p>
     <p>Blog</p>
     <p>Book a Demo</p>
    </div>
    <button>Go to app</button>
</div>

  )
}

export default Navbar