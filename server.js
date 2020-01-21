const express = require("express");
const bodyParser = require("body-parser")
const app = express();
// const path = require('path');
const mongoose = require('mongoose');
cors = require('cors');

const productRoute = require('./routes/Products.route')


app.use(bodyParser.json());
app.use(cors())
// app.use(express.static(path.join(__dirname, "public")));



mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/NewEx', {useNewUrlParser: true,  useUnifiedTopology: true}).then(
    () => {console.log('database is connected');
    },err => {console.log('can not connect to the database'+ err);
    }
)




app.use('/products', productRoute)

port = process.env.PORT || 4000

app.listen(port, function(){
    console.log(`Server is running on Port  ${port}`);
    
})