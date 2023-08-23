export class Cell {
    constructor(index) {
        this.cellValue = 0;
        this.PossibleValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.findRow = (cIndex) => {
            let rowIndex = Math.floor(cIndex / 9);
            let row = this.associatedSuduko.rows[rowIndex];
            return row;
        };
        this.findColumn = (cIndex) => {
            let columnIndex = Math.floor(cIndex % 9);
            let column = this.associatedSuduko.columns[columnIndex];
            return column;
        };
        this.findGrid = (cIndex) => {
            let gridIndex = Math.floor(cIndex / 27) * 3 + Math.floor((cIndex % 9) / 3);
            let grid = this.associatedSuduko.grids[gridIndex];
            return grid;
        };
        this.removePossibleValue = (cValue) => {
            let indx = this.PossibleValue.indexOf(cValue);
            if (indx != -1) {
                this.PossibleValue.splice(indx, 1);
            }
        };
        this.removePossileValueFromColumn = (cValue) => {
            let column = this.associatedColumn;
            let cellArray = column.associatedCells;
            for (const element of cellArray) {
                element.removePossibleValue(cValue);
            }
        };
        this.removePossileValueFromRow = (cValue) => {
            let row = this.associatedRow;
            let cellArray = row.associatedCells;
            for (const element of cellArray) {
                element.removePossibleValue(cValue);
            }
        };
        this.removePossileValueFromGrid = (cValue) => {
            let grid = this.associatedGrid;
            let cellArray = grid.associatedCells;
            for (const element of cellArray) {
                element.removePossibleValue(cValue);
            }
        };
        this.setCellValue = (cValue) => {
            this.cellValue = cValue;
            this.PossibleValue = [];
            this.removePossileValueFromColumn(cValue);
            this.removePossileValueFromRow(cValue);
            this.removePossileValueFromGrid(cValue);
        };
        this.linkRowColumnGridToCell = () => {
            let row = this.findRow(this.cellIndex);
            row.associatedCells.push(this);
            this.associatedRow = row;
            let column = this.findColumn(this.cellIndex);
            column.associatedCells.push(this);
            this.associatedColumn = column;
            let grid = this.findGrid(this.cellIndex);
            grid.associatedCells.push(this);
            this.associatedGrid = grid;
        };
        this.cellIndex = index;
    }
}
//# sourceMappingURL=cell.js.map