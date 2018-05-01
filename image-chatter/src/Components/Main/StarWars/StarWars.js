import React, {Component} from 'react';

import axios from 'axios';

export default class StarWars extends Component{
    constructor(){
        super()
        this.state={
            tatooine: '',
            falcon: ''
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/planets/1/').then((res)=>{
            this.setState({
                tatooine: res.data
            })
        })
        axios.get('https://swapi.co/api/starships/10/').then((res)=>{
            falcon: res.data
        })
    }

    render(){
        return(
            <div>
                <h1>A Notable Planet</h1>
                <h2>Name: {this.state.tatooine.name}</h2> 
                <h2>Climate: {this.state.tatooine.climate}</h2>
                <h1>The Coolest Starship</h1>
                <h2>Name: {this.state.falcon.name}</h2>
                <h2>Maximum Atmosphering Speed: {this.state.falcon.max_atmosphering_speed}</h2>
            </div>
        )
    }
}