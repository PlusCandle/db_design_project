const express = require('express');
const dbConnPool = require('./dbms'); // modules.export로 가져옴
const {tableQueries} = require('./init_sql/create_table'); // exports로 가져옴
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false})) // req.body 가져오는 용도

app.get('', () => {

});

app.post('/create', async (req, res) => {
    try {
        let {  } = req.body;
        console.log()

        const conn = await dbConnPool.getConnection();

        let sql = "INSERT INTO player";
        //userName
        
    } catch (e) {
        console.log(e);
    }
});

app.put('', () => {

});

app.delete('', () => {

});

app.listen(8080, async () => {
    try {
        const conn = await dbConnPool.getConnection();
        let sql;
        for (const key in tableQueries) {
            if (tableQueries.hasOwnProperty(key)) {
                sql = tableQueries[key]
                try {
                    const [rows] = await dbConnPool.query(sql);
                    console.log('success to create : ', key);
                } catch(err){
                    console.log('Fail to create : ', key);
                }
            }
        }
        conn.release();
    } catch(err){
        console.log(err);
    }
});