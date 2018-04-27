const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cc = require(__dirname + '/controllers/comment_controller') 

app.use(bodyParser.json());

const baseURL = "/api/comments";
app.post( baseURL, cc.create)
app.get( baseURL, cc.read)
app.put( `${baseURL}/:id`, cc.update)
app.delete( `${baseURL}/:id`, cc.delete)



const port = 3000;
app.listen(port, ()=>{
    console.log(`The server is listening to ${port}`)
})