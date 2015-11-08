// cpubench hack to find the good buys
// cputable headers Array.prototype.map.call(cputable.rows[0].cells, function (cell) { return cell.innerText; });
// ["CPU Name", "Passmark CPU Mark (higher is better)", "Rank (lower is better)", "CPU Value (higher is better)", "Price (USD)"]
var cpubench = require('./cpubench.js'),
    cpulist = require('./cpulist.js');

    cpubench.getElementById('cputable', function (err, cputable) {
        if (!err) {
            var cpubenchlist = cpulist(cputable);
            console.log(cpubenchlist.header());
        } else {
            console.log(err);
        }
    });

