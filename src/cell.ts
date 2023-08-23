import { Column } from "column";
import { Grid } from "grid";
import { Row } from "row";
import { Sudoku } from "sudoku";

export class Cell {
  cellIndex: number;
  cellValue: number = 0;
  PossibleValue: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  associatedGrid: Grid;
  associatedRow: Row;
  associatedColumn: Column;
  associatedSuduko: Sudoku;

  constructor(index: number) {
    this.cellIndex = index;
  }
  findRow = (cIndex: number) => {
    let rowIndex = Math.floor(cIndex / 9);
    // console.log(`row index is ${rowIndex}`);
    let row = this.associatedSuduko.rows[rowIndex];
    return row;
  };

  findColumn = (cIndex: number) => {
    let columnIndex = Math.floor(cIndex % 9);
    // console.log(`column index is ${columnIndex}`);
    let column = this.associatedSuduko.columns[columnIndex];
    return column;
  };
  findGrid = (cIndex: number) => {
    let gridIndex = Math.floor(cIndex / 27) * 3 + Math.floor((cIndex % 9) / 3);
    // console.log(`grid index is ${gridIndex}`);
    let grid = this.associatedSuduko.grids[gridIndex];
    return grid;
  };
  removePossibleValue = (cValue: number) => {
    let indx = this.PossibleValue.indexOf(cValue);
    if (indx != -1) {
      this.PossibleValue.splice(indx, 1);
    }
  };
  removePossileValueFromColumn = (cValue: number) => {
    let column = this.associatedColumn;
    let cellArray = column.associatedCells;
    for (const element of cellArray) {
      element.removePossibleValue(cValue);
    }
  };
  removePossileValueFromRow = (cValue: number) => {
    let row = this.associatedRow;
    let cellArray = row.associatedCells;
    for (const element of cellArray) {
      element.removePossibleValue(cValue);
    }
  };
  removePossileValueFromGrid = (cValue: number) => {
    let grid = this.associatedGrid;
    let cellArray = grid.associatedCells;
    for (const element of cellArray) {
      element.removePossibleValue(cValue);
    }
  };
  setCellValue = (cValue: number) => {
    this.cellValue = cValue;
    this.PossibleValue = [];
    this.removePossileValueFromColumn(cValue);
    this.removePossileValueFromRow(cValue);
    this.removePossileValueFromGrid(cValue);
  };
  linkRowColumnGridToCell = () => {
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
}
