import React from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';


export default class UserDetails extends React.Component {
    state = {
        data: {}
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const data = response.data;
                this.setState({ data });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })

    }


    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <>
 <video width="1280" height="720" className="background" autoPlay muted loop>
  <source src="https://codepen.jonnitto.ch/BackgroundVideo.mp4" type="video/mp4"/>
</video>

<div className="container">
		  <div className="section">
			    <div className="col span_2_of_3">
      	<div className="blog-post">
        <h1 className="blog-title">User Name  : {data.username} ,  userId :{data.id} </h1>
        <h1 className="blog-title">{data.email}</h1>

        {/* <h2 class="date">Posted 28th Feb 2015</h2> */}
        <p className="blog-content">{data.body}</p>
        {/* <a href="#" class="post-link">Read More...</a> */}
			    <div id ="linkk">
                <Link to={`/posts/user/${data.id}`}><h1>View user Posts</h1></Link>
        {/* <Link to={`/users/${props.id}`}><h1>View Details</h1></Link> */}
        </div>
      				</div>
		
				    
			    </div>
				
		  </div>
	</div>











{/* 
            <div className="blog-card spring-fever">
                <div className="title-content">
                    <h3>{data.title}</h3>
                    <hr />
                    <div className="intro">User Name  : {data.username} ,  userId :{data.id}</div>
                </div>
                <div className="card-info">
                {data.email}
                  
                </div>
               

                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </div>
                <Link to={`/posts/user/${data.id}`}><h1>View user Posts</h1></Link> */}
            
</>















            // <div>
            //     <h1>{data.id}</h1>
            //     <h1>{data.title}</h1>
            //     <h1>{data.body}</h1>
            //     <h1>{data.userId}</h1>
            // </div>
    )
    }


}