import { Cell } from "./cell.js";
import { Column } from "./column.js";
import { Row } from "./row.js";
import { Grid } from "./grid.js";

export class Sudoku {
  cells: Cell[] = [];
  rows: Row[] = [];
  columns: Column[] = [];
  grids: Grid[] = [];
  continuesolving: boolean = true;
  constructor() {
    this.createRows();
    this.createColumns();
    this.createGrid();
    this.createCells();
  }

  solve = async () => {
    while (this.continuesolving) {
      this.internalSolve();
    }
  };
  internalSolve = async () => {
    this.continuesolving = false;
    for (const element of this.cells) {
      let c = element;

      if (c.PossibleValue.length == 1) {
        c.setCellValue(c.PossibleValue[0]);
      }
      if (c.cellValue == 0) {
        this.continuesolving = true;
      }
    }
  };
  decodeSudokuInputString = async (input: string) => {
    let cIndex = 0;
    for (let index = 0; index < input.length; index++) {
      let inCharacter = input.substring(index, index + 1);
      if (!isNaN(parseInt(inCharacter))) {
        let cellObj = this.cells[cIndex++];
        if (parseInt(inCharacter) != 0) {
          cellObj.setCellValue(parseInt(inCharacter));
        }
      }
    }
  };
  createCells = () => {
    for (let index = 0; index < 81; index++) {
      let c = new Cell(index);
      c.associatedSuduko = this;
      this.cells[index] = c;

      this.cells[index].linkRowColumnGridToCell();
    }
  };
  createRows = () => {
    for (let index = 0; index < 9; index++) {
      this.rows[index] = new Row(index);
    }
  };
  createColumns = () => {
    for (let index = 0; index < 9; index++) {
      this.columns[index] = new Column(index);
    }
  };
  createGrid = () => {
    for (let index = 0; index < 9; index++) {
      this.grids[index] = new Grid(index);
    }
  };
  printSuduko = async () => {
    let counter = 0;
    let input = `
---------------------------
|| ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } ||
|| ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } ||
|| ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } ||
---------------------------
|| ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } ||
|| ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } ||
|| ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } ||
---------------------------
|| ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } ||
|| ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } ||
|| ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
      this.cells[counter++].cellValue
    } ||
---------------------------`;
    return input;
  };
}
