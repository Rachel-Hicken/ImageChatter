import React, {Component} from 'react';
import axios from 'axios';

import './Comments.css'

// const baseURL = "/api/comments"; this didn't work
export default class Comments extends Component{
    
    constructor(){
        super()
        this.state={
            comments: [],
            input: ''

        }
        this.createHandler = this.createHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.updateHandler = this. updateHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    //methods: create, read(didmount), update, delete
   
    componentDidMount(){
        axios.get('/api/comments').then((res)=>{
            this.setState({
                comments: res.data
            })
        })   
    }

    createHandler(){
        const {input} = this.state;
        axios.post('/api/comments', {date, text}).then((res)=>{
            this.setState({
                comments: res.data
            })
        });
        this.setState({input: ''})
    }

    updateHandler(){
        //map, 
    }

    deleteHandler(){
        axios.delete('/api/comments').then((res)=>{
            this.setState({
                comments: res.data
            })
        })
    }
    changeHandler(){

    }




    render(){
        return(
            <div>
                <p>Stuff and Stuff</p>
                <input type="text" placeholder="Type your comment here"/>
                <button className="submitButton" >Submit Comment</button> 
                {/* Need to add onclick update comment and create */}
                <button className="deleteButton" onClick={this.deleteHandler}>Delete</button>
                <button className="editButton">Edit</button>
                {/* Need to set onclick to bring text by id in to comment box */}
            </div>
        )
    }


}