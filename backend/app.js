const express = require('express');
const dbConnPool = require('./dbms');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({extended:false}))

app.get('', () => {

});

app.post('', async (req, res) => {
    try {
        let {  } = req.body;
        console.log()

        const conn = await dbConnPool.getConnection();

        let sql = "";
        
    } catch (e) {
        console.log(e);
    }
});

app.put('', () => {

});

app.delete('', () => {

});

app.listen(8080, () => {

});