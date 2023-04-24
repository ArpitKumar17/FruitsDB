const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ArpitKumar:Arpitkr1730@host.gcp.mongodb.net/test?retryWrites=true/fruitsDB");
const fruitSchema= new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});
const Fruit =mongoose.model("Fruit",fruitSchema);
const fruit =new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty solid as a fruit"
},
{
    name:"Banana",
    rating:9,
    review:"Good"
});