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

        req.io.emit('post', card);

        return res.json(card);
    };
    
    async index(req, res) {
        const card = await Card.find().sort('-createdAt');

        return res.json(card);
    };

    async change(req, res){
        const card = await Card.findById(req.params.id);
        
        card.status = req.params.idColumn;

        await card.save();

        req.io.emit('change', card);

        return res.json(card);
    }

}

module.exports = new CardController();