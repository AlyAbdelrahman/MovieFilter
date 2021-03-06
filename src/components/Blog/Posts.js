
import React from 'react';
// import PostCard from './components/Blog/PostCard';
import PostCard from './PostCard'
import axios from 'axios';


export default class PostsList extends React.Component {
    state = {
      data: [],
    }
    componentDidMount() {
        // Call api
        // set data in state
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
        return this.state.data.map(p => (<PostCard key={p.id} title={p.title} id={p.id} />));
      }
}

