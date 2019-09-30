const mongoose = require(`mongoose`);


mongoose.connect(`mongodb://localhost/notasdb`, {
useCreateIndex: true,
useNewUrlParser: true,
useFindAndModify: false

})

.then(db => console.log(`baseD conectada`))
.catch(err => console.error(err));