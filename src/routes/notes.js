const express = require(`express`);
const router = express.Router();

router.get(`/notes/add`, (req, res) =>{
    res.render(`notes/new-note`);
});

router.get(`/notes`,(req, res) => {
res.send(`Notas de la base de datos`);
});
module.exports = router;