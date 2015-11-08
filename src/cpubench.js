// cpubench hack to find the good buys
// cputable headers Array.prototype.map.call(cputable.rows[0].cells, function (cell) { return cell.innerText; });
// ["CPU Name", "Passmark CPU Mark (higher is better)", "Rank (lower is better)", "CPU Value (higher is better)", "Price (USD)"]
var jsdom = require("jsdom");

module.exports = (function (url) {
    return {
        getElementById: function (id, callback) {
            jsdom.env(url, function (err, window) {
                if (!err) {
                    var element = window.document.getElementById(id);
                    callback(null, element);
                } else {
                    callback(err);
                }
            });
        },
        setUrl: function (newUrl){
            url = newUrl;
        }
    }
})('http://www.cpubenchmark.net/cpu_list.php');

