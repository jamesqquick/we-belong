require("dotenv").config()
const Trello = require("trello")
const trello = new Trello(process.env.TRELLO_KEY, process.env.TRELLO_TOKEN)

exports.handler = (event, context, callback) => {
    const body = JSON.parse(event.body);

    if(!body.story) {
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify({msg: "Invalid fields"}),
        })
    }
    
    trello.addCard(body.story.substring(0,20), body.story, process.env.TRELLO_LIST_ID)
      .then(res => {
        console.log("Story submitted", body.story);
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify({msg: "Ok"}),
        })
      })
      .catch(err => {
        console.log("Err", err)
        return callback(null, {
          statusCode: 500,
          body: JSON.stringify({msg: "Something went wrong"}),
        })
      })
}