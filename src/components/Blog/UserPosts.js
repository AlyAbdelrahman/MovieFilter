
import React from 'react';
// import UserCard from './UserCard';
import axios from 'axios';
import PostCard from './PostCard';


export default class PostsList extends React.Component {
    state = {
      data: [],
    }
    componentDidMount() {
        // Call api
        // set data in state
        const id = this.props.match.params.id;

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .then((response) => {
            // handle success
            const data = response.data;
            this.setState({ data });
          })
          .catch((error) => {
            // handle error
            console.log(error);
          });
      }
    
      render() {
        
        // console.log( this.state.data.title);
        return this.state.data.map(p => (<PostCard key={p.id} title={p.title} id={p.id} />));
      }
}

