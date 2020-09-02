const router = require('express').Router();
const { Post, User, Business } = require('../../models');
const sequelize = require('../../config/connection');

// GET all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_text',
            'safety_measures',
            'mask_required',
            'staff_mask',
            'staff_gloves',
            'contactless_payment',
            'handsanitizer_provided',
            'social_distancing',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Business,
                attributes: ['name']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// GET a Single Post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'post_text',
            'safety_measures',
            'mask_required',
            'staff_mask',
            'staff_gloves',
            'contactless_payment',
            'handsanitizer_provided',
            'social_distancing',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Business,
                attributes: ['name']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Create a Post
router.post('/', (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    console.log("BODY:", req.body)
    Post.create({
        title: req.body.title,
        post_text: req.body.post_text,
        user_id: req.session.user_id,
        // business_id: req.body.business_id,
        business_id: parseInt(req.body.business_id),
        safety_measures: req.body.safety_measures,
        mask_required: req.body.mask_required,
        staff_mask: req.body.staff_mask,
        staff_gloves: req.body.staff_gloves,
        contactless_payment: req.body.contactless_payment,
        handsanitizer_provided: req.body.handsanitizer_provided,
        social_distancing: req.body.social_distancing,
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Update a Post's Title
router.put('/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete a Post
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;