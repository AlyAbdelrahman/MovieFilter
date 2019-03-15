import React from 'react'
import axios from 'axios';


export default class PostDetails extends React.Component {
    state = {
        data: {}
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
        return (
            <>
            <video width="1280" height="720" className="background" autoPlay muted loop>
            <source src="https://codepen.jonnitto.ch/BackgroundVideo.mp4" type="video/mp4"/>
          </video>

<div className="container">
		  <div className="section">
			    <div className="col span_2_of_3">
      	<div className="blog-post">
        <h1 className="blog-title"> Data id : {data.id}   userId :{data.userId} </h1>
        <h1 className="blog-title">{data.title} </h1>

        {/* <h2 class="date">Posted 28th Feb 2015</h2> */}
        <p className="blog-content">{data.body}</p>
        {/* <a href="#" class="post-link">Read More...</a> */}
      				</div>
		
				    
			    </div>
				
			   
		  </div>
	</div>

</>












            // <div className="blog-card spring-fever">
            //     <div className="title-content">
            //         <h3>{data.title}</h3>
            //         <hr />
            //         <div className="intro">Data id : {data.id} ,  userId :{data.userId}</div>
            //     </div>
            //     <div className="card-info">
            //     {data.body}
            //         {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. */}
            //     </div>
            //     {/* <div class="utility-info">
            //         <ul class="utility-list">
            //             <li class="comments">12</li>
            //             <li class="date">03.12.2015</li>
            //         </ul>
            //     </div> */}

            //     <div className="gradient-overlay"></div>
            //     <div className="color-overlay"></div>
            // </div>

















            // <div>
            //     <h1>{data.id}</h1>
            //     <h1>{data.title}</h1>
            //     <h1>{data.body}</h1>
            //     <h1>{data.userId}</h1>
            // </div>
    )
    }


}