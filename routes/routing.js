var friends = require("../friendsData/friendsList.js");

module.exports = function(app) {
    app.get("/api/friends", fucntion(req, res),{
        res,json(friends)
    })
}