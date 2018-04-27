import React, {Component} from 'react';
import axios from 'axios';

import Comments from './Comments/Comments'
import Images from './Images/Images'


export default class Main extends Component{
    render(){
        return(
            <div>
                <Images/>
            </div>
        )
    }
}