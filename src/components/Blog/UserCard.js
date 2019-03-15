import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = props => (
  <>
 <video width="1280" height="720" className="background" autoPlay muted loop>
  <source src="https://codepen.jonnitto.ch/BackgroundVideo.mp4" type="video/mp4"/>
</video>

<div className="container">
		  <div className="section">
			    <div className="col span_2_of_3">
      	<div className="blog-post">
        <h1 className="blog-title">{props.username}</h1>

        {/* <h2 class="date">Posted 28th Feb 2015</h2> */}
        {/* <p className="blog-content">{data.body}</p> */}
        <div id ="linkk">
        <Link to={`/users/${props.id}`}><h1>View Details</h1></Link>
        </div>
        {/* <a href="#" class="post-link">Read More...</a> */}
      				</div>
		
				    
			    </div>
				
			   
		  </div>
	</div>

{/* 

  <div className="postContainer">
    <h1>{props.username}</h1>
    
    <Link to={`/users/${props.id}`}><h1>View Post</h1></Link>
    </div> */}
  </>
);


export default UserCard;

