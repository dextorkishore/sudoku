import { Cell } from "./cell.js";
import { Column } from "./column.js";
import { Row } from "./row.js";
import { Grid } from "./grid.js";
export declare class Sudoku {
    cells: Cell[];
    rows: Row[];
    columns: Column[];
    grids: Grid[];
    continuesolving: boolean;
    constructor();
    solve: () => Promise<void>;
    internalSolve: () => Promise<void>;
    decodeSudokuInputString: (input: string) => Promise<void>;
    createCells: () => void;
    createRows: () => void;
    createColumns: () => void;
    createGrid: () => void;
    printSuduko: () => Promise<string>;
}
