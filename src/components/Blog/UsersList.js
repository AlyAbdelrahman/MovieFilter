
import React from 'react';
import UserCard from './UserCard';
import axios from 'axios';


export default class PostsList extends React.Component {
    state = {
      data: [],
    }
    componentDidMount() {
        // Call api
        // set data in state
        axios.get('https://jsonplaceholder.typicode.com/Users')
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
        return this.state.data.map(p => (<UserCard key={p.id} username={p.username} id={p.id} />));
      }
}

