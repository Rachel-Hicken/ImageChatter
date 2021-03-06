let comments = [{"id":"0.3","text":"This is my favorit painting!"},{"id":"0.2","text":"Very impressive"}];
let id =0;

module.exports = {
    create: (req, res) => {
        const {text} = req.body;
        comments.push({id, text});
        id++;
        res.status(200).send(comments)
    },
    read: (req, res) => {
        res.status(200).send(comments)
    },
    update: (req, res) => {
        const {text} = req.body;
        const updateID = req.params.id;
        const commentIndex = comments.findIndex(comment => Number(comment.id)===Number(updateID))
        console.log(commentIndex);
        let comment = comments[commentIndex];
        if(comment){
            comments[commentIndex] = {
                id: comment.id,
                // date: comment.date,
                text: text || comment.text
            };
            res.status(200).send(comments);
        }
        else{
            res.status(400).send("Please enter valid ID");
        }
 
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        commentIndex = comments.findIndex(comment => Number(comment.id)===Number(deleteID))
        console.log(commentIndex)
        comments.splice(commentIndex, 1);
        res.status(200).send(comments);
    }
}