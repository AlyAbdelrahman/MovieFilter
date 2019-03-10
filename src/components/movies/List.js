import React from 'react';
import data from '../../data';
import Movie from './Movie';

export default class filterMovie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // MoviesInit: this.props.data,
            data: [],
            search: true,
            searchWord: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.watched = this.watched.bind(this);
        this.notwatched = this.notwatched.bind(this);


    }

    componentDidMount() {
        this.setState({ data });
    }


    handleChange(e) {
        const { search } = this.state;
        var x = e.target.value;
        const result = data.filter(m => (m.Title.includes(x) && m.watched === search));
        this.setState({ data: result, searchWord: x })

    }

    watched() {
        this.state.search = true;
        const { searchWord, search } = this.state;
        const result = data.filter(m => (m.Title.includes(searchWord) && m.watched === search));
        this.setState({ data: result })
    }

    notwatched() {
        this.state.search = false;
        const { searchWord, search } = this.state;
        const result = data.filter(m => (m.Title.includes(searchWord) && m.watched === search));
        this.setState({ data: result })
    }

    render() {
        const { data } = this.state;
        return (
            <>
                <div id="cover">
                    <input id="searchmovie" type="text" placeholder="Search" onChange={this.handleChange} />
                </div>

                <div href="#" class="myButton" onClick={this.watched} >watched</div>
                <div href="#" class="myButton2" onClick={this.notwatched}>Not Watched Yet</div>
                
                <input type="radio" name="gender" onChange={this.watched}/> watched
                <input type="radio" name="gender" onChange={this.notwatched}/> notwatched
            



                {data.map(m => <Movie key={m.imdbID} {...m} />)}

            </>
        )
    }
}
