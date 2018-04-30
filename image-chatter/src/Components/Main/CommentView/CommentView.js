import React, {Component} from 'react';
import axios from 'axios';

import './CommentView.css'
import Comments from  '../Comments/Comments'

// const baseURL = "/api/comments"; this didn't work
export default class CommentView extends Component{
    
    constructor(){
        super()
        this.state={
            comments: [],
            text: ''

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
        const {text} = this.state;
        if(event.key === 'Enter' && text.length !== 0){
        axios.post('/api/comments', {text}).then((res)=>{
            this.setState({
                comments: res.data
            })
        });
        this.setState({text: ''})
        }
    }

    updateHandler(id, text){
        console.log('updateHandler: ', id, text);
        axios.put('/api/comments' + `/${id}`, {text}).then((res)=>{
            this.setState({comments: res.data})
        })
    }

    deleteHandler(id){
        axios.delete('/api/comments' + `/${id}`).then((res)=>{
            this.setState({
                comments: res.data
            })
        })
    }
    changeHandler(event){
        this.setState({
            text: event.target.value
        })
    }




    render(){
        return(
            <div>
                {console.log("blah2")}
                <h2>The Threatened Swan by Jan Asselijn</h2>
                <div>
                {this.state.comments.map((comments)=>(
                    <Comments id={comments.id} 
                    key={comments.id} 
                    text={comments.text} 
                    edit={this.updateHandler} 
                    remove={this.deleteHandler}/>
                ))}
                </div>
                <div>
                    <input value={this.state.text}
                    onChange={this.changeHandler}
                    onKeyPress={this.createHandler}
                    placeholder="Leave comments here"/>
                    <button onClick={this.createHandler}>Submit</button>
                </div>
            
            </div>
        )
    }


}