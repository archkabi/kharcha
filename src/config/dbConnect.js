const mongoose = require('mongoose');
const dbConnect = () => {
    const connection = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    mongoose.connect('mongodb+srv://kabi:1738@cluster0.pfsdohf.mongodb.net/?retryWrites=true&w=majority'
    , connection)
        .then(() => {
            console.log('Connected to database ');
        }
        )
        .catch((err) => {
            console.error(`Error connecting to the database. \n${err}`);
        }
        );
}

module.exports = dbConnect;