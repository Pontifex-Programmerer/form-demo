const get_index = (req, res)=> {
    res.render('index');
}

const post_index = (req, res)=>{
    const {name,phone} = req.body;
    console.log(name,phone);
    res.render('index', {
        name,
        phone
    })
}
module.exports= {
    get_index,
    post_index
}