
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    
    name: {type : String, required : true},
    description: {type : String, required : true},
    type: {type : String, required : true},
    scent: {type : String, required : true},
    price: {type : Number, required : true},
    hexcode: {type : String, required : true},
    imagepath:[String],

});

export default mongoose.model('laundrProducts', productSchema);