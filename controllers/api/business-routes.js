const router = require('express').Router();
const { Post, User, Business, Category } = require('../../models');
const sequelize = require('../../config/connection');

// GET all posts
router.get('/', (req, res) => {
    Business.findAll({
        attributes: [
            'id',
            'name',
            'business_url',
            'created_at'
            
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Category,
                attributes: [
                    'name'
                ]
            }
        ]
    })
        .then(dbBusinessData => res.json(dbBusinessData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// GET a Single Post
router.get('/:id', (req, res) => {
    Business.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'name',
            'business_url'
        ],
        include: [
            {
                model: Post,
                attributes: 
                [
                    'title',
                    'post_text',
                    'safety_measures'
                ]
            }
        ]
    })
        .then(dbBusinessData => {
            if (!dbBusinessData) {
                res.status(404).json({ message: 'No Business found with this id' });
                return;
            }
            res.json(dbBusinessData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Create a Post
router.post('/', (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    Business.create({
        name: req.body.name,
        business_url: req.body.business_url,
        category_id: req.body.category_id
    })
        .then(dbBusinessData => res.json(dbBusinessData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Update a Post's Title ***IN PROGRESS**
router.put('/:id', (req, res) => {
    Business.update(
        {
            name: req.body.name
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbBusinessData => {
            if (!dbBusinessData) {
                res.status(404).json({ message: 'No Business found with this id' });
                return;
            }
            res.json(dbBusinessData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete a Post
router.delete('/:id', (req, res) => {
    Business.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbBusinessData => {
            if (!dbBusinessData) {
                res.status(404).json({ message: 'No Business found with this id' });
                return;
            }
            res.json(dbBusinessData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;