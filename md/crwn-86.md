# First ome

![](https://i.imgur.com/P2ucJ7h.png)

index.ejs

```HTML
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
    <p></p>
    <h3>My name is <%= name %></h3>
    <h3>My student id is <%= id %></h3>
  </body>
```

index.js

```JS
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name:'許琦涓', id:'209410686' });
});

```

---

# Second

![](https://i.imgur.com/S3R10rc.png)

```HTML
  <div class="homepage">
    <%= name %>
    <%= id %>
    <div class="directory-menu">
      <div class="menu-item">
          <img class="background-image" src="https://i.ibb.co/cvpntL1/hats.png" alt="">
        <a href="./hats.html" class="content">
            <h1 class="title">HATS</h1>
            <span class="subtitle">SHOP NOW</span>
        </a>
      </div>

```

```JS
router.get('/', function(req, res, next) {
  res.render('crown_86', { title: 'Express', name:'許琦涓', id:'209410686' });
});

```

---

# Third

![](https://i.imgur.com/NcvU6dm.png)

---

# Fourth

![](https://i.imgur.com/9s7nQbn.png)

---

# Fifth

```Js

const {Pool} = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crown_86',
  password: '0000',
  port: 5432,
})
pool.query('SELECT * from category', (err, res) => {
  console.log(JSON.stringify(res.rows));
  pool.end();
});

module.exports = pool;

```
