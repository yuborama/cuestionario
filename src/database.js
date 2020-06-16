const mongoose = require('mongoose');

const {mongoose_host,mongoose_database}=process.env;

const mongoose_url=`mongodb://${mongoose_host}/${mongoose_database}`;

mongoose.connect(mongoose_url,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(db => console.log("DB is connected"))
.catch(err => console.error(err));