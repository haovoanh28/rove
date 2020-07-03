require('dotenv').config();

const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_LOCAL, {
    useCreateIndex : true,
    useNewUrlParser : true,
    useFindAndModify : false
}).then(() => console.log('Connect to MongoDB successfully'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
})
