const express = require('express');

const router = express.Router();

//ROutes


router.get('',(req,res)=>{
    const locals ={
        title : "NodeJs Blog",
        description : " Simple BLog Created with NOdeJS,Express & Mongodb."
    }
    res.render('index',{locals});
});

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('/contact',(req,res)=>{
    res.render('contact');
});

module.exports = router;