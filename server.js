const express = require('express');
const app = express();
const PORT = 9000


const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hour = now.getHours();
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
      res.send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
    }
  };

  app.get('/',checkWorkingHours,(req, res) => {
    res.send('<h1>Welcome</h1>')
  });
  
  
  app.get('/home',checkWorkingHours,(req, res) => {
    res.sendFile(__dirname + '/WorkShop/home.html')});
  
  app.get('/contact',checkWorkingHours,(req, res) => {
    res.sendFile(__dirname + '/WorkShop/contact.html')});

    app.get('/services',checkWorkingHours,(req, res) => {
        res.sendFile(__dirname + '/WorkShop/services.html')});

    app.get('/Style.css', (req, res) => {
         res.sendFile(__dirname + '/WorkShop/Style.css')});

  
app.listen(PORT , (err)=>{
    if(err){
        console.log(err)
    } else{
        console.log('server running on port' , PORT)
    }
})