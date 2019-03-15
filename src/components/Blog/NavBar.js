import React from 'react';
import { Link } from 'react-router-dom'


const Nav = (props) => {

    return (




<>
      <nav>
  			<ul>
				    <li className="nav-item"><Link to="/">Home</Link></li>
				    <li className="nav-item"><Link to="/users">Users</Link></li>
				    <li className="nav-item"><Link to="/posts">Posts</Link></li>
				    <li className="nav-item"><Link to="/create">Create Post</Link></li>

    				{/* <li class="nav-item"><a href="#" >Contact</a></li> */}
			  </ul>
				  <div className="menu-bar">Menu
					    <span className="hamburger-icon"><i className="fa fa-bars"></i></span>
			  </div>
		</nav>
</>

      //   <div className="nav">
      //   <ul>
      //   <li><Link to="/">Home</Link></li>
          
      //   <li><Link to="/users">Users</Link></li>
      //     <li><Link to="/posts">Posts</Link></li>
      //   </ul>
      // </div> 

    )



}


export default Nav;