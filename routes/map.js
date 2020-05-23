var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
    console.log(req.isAuthenticated());
    res.render("map")
});

router.post('/travel_list/:place_id', async function(req, res) {
    await travelList.create(({user_id: req.user.id, place_id: req.params.place_id})
    .then(function(result){
        console.log(result)
    }))
    .catch(function(e){
        console.log(e)
    })
});

module.exports = router;