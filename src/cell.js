"use strict";
exports.__esModule = true;
exports.Cell = void 0;
var Cell = /** @class */ (function () {
    function Cell(index) {
        var _this = this;
        this.cellValue = 0;
        this.PossibleValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.findRow = function (cIndex) {
            var rowIndex = Math.floor(cIndex / 9);
            var row = _this.associatedSuduko.rows[rowIndex];
            return row;
        };
        this.findColumn = function (cIndex) {
            var columnIndex = Math.floor(cIndex % 9);
            var column = _this.associatedSuduko.columns[columnIndex];
            return column;
        };
        this.findGrid = function (cIndex) {
            var gridIndex = Math.floor(cIndex / 27) * 3 + Math.floor((cIndex % 9) * 3);
            var grid = _this.associatedSuduko.grids[gridIndex];
            return grid;
        };
        this.removePossibleValue = function (cValue) {
            var indx = _this.PossibleValue.indexOf(cValue);
            if (indx == -1) {
                _this.PossibleValue.splice(indx, 1);
            }
        };
        this.removePossileValueFromColumn = function (cValue) {
            var column = _this.associatedColumn;
            var cellArray = column.associatedCells;
            for (var _i = 0, cellArray_1 = cellArray; _i < cellArray_1.length; _i++) {
                var element = cellArray_1[_i];
                element.removePossibleValue(cValue);
            }
        };
        this.removePossileValueFromRow = function (cValue) {
            var row = _this.associatedRow;
            var cellArray = row.associatedCells;
            for (var _i = 0, cellArray_2 = cellArray; _i < cellArray_2.length; _i++) {
                var element = cellArray_2[_i];
                element.removePossibleValue(cValue);
            }
        };
        this.removePossileValueFromGrid = function (cValue) {
            var grid = _this.associatedGrid;
            var cellArray = grid.associatedCells;
            for (var _i = 0, cellArray_3 = cellArray; _i < cellArray_3.length; _i++) {
                var element = cellArray_3[_i];
                element.removePossibleValue(cValue);
            }
        };
        this.setCellValue = function (cValue) {
            _this.cellValue = cValue;
            _this.PossibleValue = [];
            _this.removePossileValueFromColumn(cValue);
            _this.removePossileValueFromRow(cValue);
            _this.removePossileValueFromGrid(cValue);
        };
        this.linkRowColumnGridToCell = function () {
            var row = _this.findRow(_this.cellIndex);
            row.associatedCells.push(_this);
            _this.associatedRow = row;
            var column = _this.findColumn(_this.cellIndex);
            column.associatedCells.push(_this);
            _this.associatedColumn = column;
            var grid = _this.findGrid(_this.cellIndex);
            grid.associatedCells.push(_this);
            _this.associatedGrid = grid;
        };
        this.cellIndex = index;
    }
    return Cell;
}());
exports.Cell = Cell;
