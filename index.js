/**
 * Created by yoyo on 16-8-14.
 */
let express = require('express');
let products = require('./products');
let app = express();

app.get('/products', function (req, res) {
    res.json(products.getAll());
});
app.post('/products',function(req,res){
    products.save(req.body);
    res.sendStatus(201);
})
app.get('/products/:name', function (req, res) {
        let found = products.find(req.params.name);
        if (found) {
            res.json(found);
        } else {
            res.sendStatus(404);
        }
    }
);
app.listen(3000, function () {
    console.log('Listen on!');
});

