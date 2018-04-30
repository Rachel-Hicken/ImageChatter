import React, {Component} from 'react';

export default class Comments extends Component{
    constructor(props){
        super(props);
        this.state = {
            editting: false,
            text: this.props.text
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.edit=this.edit.bind(this);
    }

    changeHandler(event){
        this.setState({text: event.target.value});
    }

    edit(event){
        const {text}= this.state;
        const {id, edit} = this.props;
        if(event.key=== "Enter" && text.length !== 0){
            edit(id, text);
            this.setState({editting: false});
        }
    }
    render(){
        const {id, text, edit, remove}=this.props;
        const {editting} = this.state;
        return(
            <div>
                <div>
                    {editting ? 
                    <input className="commentBox" 
                        value={this.state.text}
                        onChange={this.changeHandler}
                        onKeyPress={this.edittor}/>
                    :
                    <div className="commentText">{text}</div>
                    }
                    <button onClick={()=> this.setState({editting: !this.state.editting, text})}>Edit</button>
                    <button onClick={()=> remove(id)}>Delete</button>

                </div>
            </div>
        )
    }
}