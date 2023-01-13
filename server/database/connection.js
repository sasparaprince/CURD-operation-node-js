const mongoose = require('mongoose');
mongoose.set('strictQuery',false);

const connectDB = async()=>{
    try {
        const con = await mongoose.connect("mongodb://127.0.0.1:27017/CURDoperation",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log(`mongoDB connected`);
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}
module.exports = connectDB