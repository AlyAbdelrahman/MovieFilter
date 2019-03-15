import React from 'react';
import SimpleSchema from 'simpl-schema';
import axios from 'axios';


export default class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            name: '',
            email: '',
            body: '',
            errors: [],

        }


    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, body, userId } = this.state;
        const validatorContext = new SimpleSchema({
            userId: SimpleSchema.Integer,
            name: String,
            email: String,
            body: String
        }).newContext();
        //this +userId in the next line will alwayes convert
        //the user id to number and it will be true !! with strings
        validatorContext.validate({ name, email, body, userId: +userId });
        alert(validatorContext.isValid())
        console.log(e);
        if (validatorContext.isValid()) {
            // console.log(this.state )
            // debugger
            axios.post('https://jsonplaceholder.typicode.com/posts', { name, email, body })
                .then((response) => {
                    // handle success
                    console.log(response);
                    alert(" Post has Added")
                    this.props.history.push(`/posts`);
                })
                .catch((error) => {
                    // handle error
                    console.log(error);

                });
        }
        else {
            this.setState({ error: validatorContext.validationErrors() });
            // cancelFormSubmission();
            console.log(validatorContext.validationErrors());
            alert("plz enter " + validatorContext.validationErrors()[0].dataType + " in the " + validatorContext.validationErrors()[0].name + " field");
            // window.history.forward(-1);

        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
        // const userId = e.target.userId;



    }
    render() {
        return (
            <>
             <video width="1280" height="720" className="background" autoPlay muted loop>
  <source src="https://codepen.jonnitto.ch/BackgroundVideo.mp4" type="video/mp4"/>
</video>
                <form onSubmit={this.handleSubmit}>
                    <input name="userId" placeholder="What is your ID" className="name" required onChange={this.handleChange} value={this.state.userId} />

                    <input name="name" placeholder="What is your name?" className="name" required onChange={this.handleChange} value={this.state.name} />

                    <input name="emailaddress" placeholder="What is your email?" className="email" type="email" required onChange={this.handleChange}  />

                    <textarea rows="4" cols="50" name="subject" placeholder="What's Happening" className="message" required onChange={this.handleChange} ></textarea>

                    <input name="submit" className="btn" type="submit" value="Send"
                    />
                </form>

                <div>
                    {this.state.errors.length ? this.state.errors.map(e => (
                        <h1>
                            {e.name}
                            {' '}
                            is not valid
              </h1>
                    ))
                        : <h1>No Errors</h1>
                    }
                </div>

            </>



        )

    }

}