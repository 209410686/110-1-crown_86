const {Pool} = require('pg')

const isProduction = process.env.MoDE_ENV ==="production" 

const pool = new Pool({
  //user: 'postgres',
  //host: 'localhost',
  //database: 'crown_86',
  //password: '0000',
  //port: 5432,
  connectionString: isProduction? process.env.DATABASE : `postgresql://postgres:0000@localhost:5432/crown86`
})
//pool.query('SELECT * from category', (err, res) => {
 // console.log(JSON.stringify(res.rows));
 //pool.end();
//});

module.exports = pool;

