const Card = require('../models/Card');

class CardController{
    async store(req, res) {
        
        const card = await Card.create(
            {
                title: req.body.title,
                status: req.body.status,
                duration: req.body.duration,
                points: req.body.points
            }
        );

        return res.json(card);
    };
    
    async index(req, res) {
        const card = await Card.find().sort('-createdAt');

        return res.json(card);
    };

    /*async index(req, res) {
        //const card = await Card.find().sort('-createdAt');

        return res.json("Hello Word");
        //return res.json(card);
    };*/
}

module.exports = new CardController();