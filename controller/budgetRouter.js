const express  = require('express');
const router = express();
// grabbing models modules
const budget = require('../models/budget.js');


//GET /budgets
router.get('/', (req,res) => {
    // res.render('index');
    res.render('budget_index.ejs', {
        allBudgets:budget
    })
});
// GET /budgets/:index
router.get('/:index', (req,res) => {
    const index = req.params.index;
    // res.render('Show');
    res.render(
        'budget_show.ejs', {
            oneBudget:budget[index]
        }
    )
})
// GET /budgets/new
router.get('/new', (req,res) => {
    //res.render('new');
})
// POST /budgets
router.post('', (req,res) => {

})
module.exports = router;