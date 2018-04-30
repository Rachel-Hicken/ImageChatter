import React, {Component} from 'react';
import axios from 'axios';

import './CommentView.css'

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
        this.updateHandler = this.updateHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    //methods: create, read(didmount), update, delete
   
    componentDidMount(){
        console.log("blah");
        axios.get('/api/comments').then((res)=>{
            this.setState({
                comments: res.data
            })
        })   
        console.log("blah5");
    }

    createHandler(event){
        const {input} = this.state;
        if(event.key === 'Enter' && input.length !== 0){
        axios.post('/api/comments', {input}).then((res)=>{
            this.setState({
                comments: res.data
            })
        });
        this.setState({input: ''})
        }
    }

    updateHandler(id, text){
        console.log('updateHandler: ', id, text);
        axios.put('/api/comments' + `/${id}`, {text}).then((res)=>{
            this.setState({comments: res.data})
        })
    }

    deleteHandler(){
        axios.delete('/api/comments').then((res)=>{
            this.setState({
                comments: res.data
            })
        })
    }
    changeHandler(event){
        this.setState({
            input: event.target.value
        })
    }




    render(){
        return(
            <div>
                {console.log("blah2")}
                <p>Info about this Pic</p>
                {this.state.input}
                <input type="text" placeholder="Type your comment here"/>
                <button className="submitButton" onClick={this.createHandler} >Submit Comment</button> 
                {/* Need to add onclick update comment and create */}
                <button className="deleteButton" onClick={this.deleteHandler}>Delete</button>
                <button className="editButton">Edit</button>
                {/* Need to set onclick to bring text by id in to comment box */}
            </div>
        )
    }


}