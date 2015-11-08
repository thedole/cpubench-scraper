// cpubench hack to find the good buys
// cputable headers Array.prototype.map.call(cputable.rows[0].cells, function (cell) { return cell.innerText; });
// ["CPU Name", "Passmark CPU Mark (higher is better)", "Rank (lower is better)", "CPU Value (higher is better)", "Price (USD)"]
var rp = require('request-promise'),
    domino = require('domino');

module.exports = (function (url) {
    return {
        getElementById: function (id, callback) {
            rp(url)
                .then(function (htmlstring) {
                var document = domino.createDocument(htmlstring);
                    var element = document.querySelector('#' + id);
                    callback(null, element);
            })
            .catch(function (err) {
                console.log(err);
            });
        },
        setUrl: function (newUrl){
            url = newUrl;
        }
    }
})('http://www.cpubenchmark.net/cpu_list.php');

