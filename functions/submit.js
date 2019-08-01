require("dotenv").config()
const Trello = require("trello")
const trello = new Trello(process.env.TRELLO_KEY, process.env.TRELLO_TOKEN)

exports.handler = (event, context, callback) => {
    console.log(process.env.TRELLO_TOKEN);
    const body = JSON.parse(event.body);

    if(!body.story) {
        return callback(null, {
            statusCode: 400,
            body: "Invalid fields",
        })
    }
    
    trello.addCard(body.story.substring(0,20), body.story, process.env.TRELLO_LIST_ID)
      .then(res => {
        return callback(null, {
          statusCode: 200,
          body: "Ok",
        })
      })
      .catch(err => {
        console.log("Err", err)
        return callback(null, {
          statusCode: 500,
          body: "Something went wrong",
        })
      })
}