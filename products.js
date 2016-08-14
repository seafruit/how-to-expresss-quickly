/**
 * Created by yoyo on 16-8-14.
 */
let _ =require('lodash');
let count = require('./count');
let products = [
    {
        name: 'apple',
        price: 15,
        number: count()
    },
    {
        name: 'banana',
        price: 15,
        number: count()
    }
];

function getAll() {
    return products;
}

function find(name){
    return _.find(products, function (item){
        return item.name === name;
        /*如果是数字最好加上parseInt*/
        // return item.name ===parseInt( req.params.id);
    });

}
function save(data){
    products.push({
        id:count(),
        name:data.name,
        price:data.price
    });
}
module.exports = {getAll,find,save};
