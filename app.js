var express= require('express');
var app=   express();
var bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set('view enjine','ejs');

app.get('/',function(req,res){
    res.render('index.ejs');
});











app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started!!!");
})