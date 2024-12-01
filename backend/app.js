const express = require('express');
const dbConnPool = require('./dbms'); // modules.export로 가져옴
const {tableQueries} = require('./init_sql/create_table'); // exports로 가져옴
const {dataQueries} = require('./init_sql/create_data');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false})) // req.body 가져오는 용도

app.get('/api/read/', async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
    }
});

app.post('/api/create/user', async (req, res) => {
    try {
        let { name } = req.body;
        console.log("user name is ", name);
        const key = 'insertUser';

        const conn = await dbConnPool.getConnection();
        if (dataQueries.hasOwnProperty(key)){
            let sql = dataQueries[key];
            let data = [name];
            const [rows] = await dbConnPool.query(sql, data);
            res.status(200).json({result : rows});
        }
        conn.release();
    } catch (e) {
        console.log(e);
    }
});

app.put('/api/update', () => {

});

app.delete('/api/delete', () => {

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