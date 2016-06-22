
var app = exports.app = require('express')();

var stor = {};

function storKey(unq) {
    return "stor_" + unq;
}

app.get('/', function (req, res) {
    res.send("I'm alive!");
});

app.get('/:key', function (req, res) {

    if (req.params.key == "all") {
            res.send(getAll());
    }

    res.send(get(req.params.key));
});

app.get('/:key/:val', function (req, res) {
    try{
    set(req.params.key, req.params.val);
    res.send('OK')
    } catch(e){
    res.statusCode(500).send(e);
    }
   
   
});

app.listen(process.env.PORT || 80);

function get(k){
    return stor[k];
}
function getAll(){
    return JSON.stringify(stor, null, 2);
}
function set(k, v){
    stor[k] = v;
}
