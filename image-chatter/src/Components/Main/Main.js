import React, {Component} from 'react';
import axios from 'axios';

import Comments from './CommentView/CommentView'
import Images from './Images/Images'
import './Main.css'


export default class Main extends Component{
    render(){
        return(
            <div>
                <Images/>
                <img className="mainPic" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Jan_Asselijn_-_De_bedreigde_zwaan%3B_later_opgevat_als_allegorie_op_Johan_de_Witt_-_Google_Art_Project.jpg/450px-Jan_Asselijn_-_De_bedreigde_zwaan%3B_later_opgevat_als_allegorie_op_Johan_de_Witt_-_Google_Art_Project.jpg" 
                alt="Threatened Swan"/>
                <Comments/>
                {/* <img className="mainPic" 
                src="https://i.pinimg.com/564x/af/50/30/af50302c553657de6726a901575a3ce6.jpg" 
                alt="warm/cool portrait"/>
                <Comments/>
                <img className="mainPic"
                src="https://www.claude-monet.com/images/paintings/water-lilies-claude-monet.jpg" 
                alt="Water Lilies"/>
                <Comments/>
                <img className="mainPic"
                src="http://media.giuntiscuola.it/_tdz/@media_manager/2616690/" 
                alt="Irises"/>
                <Comments/> */}
            </div>
        )
    }
}