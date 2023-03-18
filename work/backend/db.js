const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = 'mongodb+srv://ikramm:ikramm@cluster0.qmovqhg.mongodb.net/?retryWrites=true&w=majority'
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("connected");
    } catch (err) {
        console.log(err);
    }
};

module.exports = mongoDB;
