let comments = [];
let id =0;

module.exports = {
    create: (req, res) => {
        const {date, text} = req.body;
        comments.push({id, date, text});
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

        comments[commentIndex] = {
            id: comment.id,
            date: comment.date,
            text: text || comment.text
        };
        res.status(200).send(comments);
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        commentIndex = comments.findIndex(comment => Number(comment.id)===Number(deleteID))
        message.splice(commentIndex, 1);
        res.status(200).send(comments);
    }
}