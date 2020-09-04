const router = require('express').Router();
const { Category } = require("../../models");

// GET /api/users
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    Category.findAll()
        .then(dbCategoryData => res.json(dbCategoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// GET /api/users/1
router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'name']
    })
        .then(dbCategoryData => {
            if (!dbCategoryData) {
                res.status(404).json({ message: 'No Category found with this id' });
                return;
            }
            res.json(dbCategoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/categories
router.post('/', (req, res) => {
    // expects {name: 'food'}
    Category.create({
        name: req.body.name
    })
        .then(dbCategoryData => res.json(dbCategoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});



module.exports = router;