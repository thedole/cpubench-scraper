// JavaScript source code
module.exports = function (table) {
    var list = {
        create: function (table) {
            var map = Array.prototype.map,
                slice = Array.prototype.slice,
                listPrototype = {
                    cellText: function (cell) { return cell.textContent; },
                    headerRow: function () { return slice.call(this.rows, 0, 1).pop(); },
                    header: function () {
                        return map.call(this.headerRow().cells, this.cellText);
                    }
                },
                newList = Object.create(listPrototype);

            newList.rows = table.rows;

            return newList;
        }
    },
    cpuList = list.create(table);

    return cpuList;
};