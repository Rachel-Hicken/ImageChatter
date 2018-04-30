import React, {Component} from 'react';

import axios from 'axios';

export default class StarWars extends Component{
    constructor(){
        super()
        this.state={
            tatooine: ''
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/planets/1').then((res)=>{
            this.setState({
                tatooine: res.data
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Name: {this.state.tatooine.name}</h1> 
                <h1>Climate: {this.state.tatooine.climate}</h1>
            </div>
        )
    }
}