const express = require("express");
const router = express.Router();

//item model
const Item = require('../../model/Item');

//router request to get all items
router.get('/', (req,res) => {
    Item.find()
        .sort({date : -1})
        .then((items) => {
            res.json(items); 
        })
})

//creating a post endpoint to add a new item
router.post('/', (req,res) => {
    const newItem = new Item({
        name : req.body.name
    });
    newItem.save().then((item) => {
        res.json(item);
    })
})

//router endpoint to delete an item
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
        .then((item) => {
            item.remove()
                .then((item) => {
                    res.json({
                                'name' : item.name,
                                'status' : 'deleted'
                            });
                })
        }).catch((err)=>{
            res.status(404).json({success:false});
        })
})

module.exports = router;