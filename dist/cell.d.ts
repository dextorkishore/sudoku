import { Column } from "column";
import { Grid } from "grid";
import { Row } from "row";
import { Sudoku } from "sudoku";
export declare class Cell {
    cellIndex: number;
    cellValue: number;
    PossibleValue: number[];
    associatedGrid: Grid;
    associatedRow: Row;
    associatedColumn: Column;
    associatedSuduko: Sudoku;
    constructor(index: number);
    findRow: (cIndex: number) => Row;
    findColumn: (cIndex: number) => Column;
    findGrid: (cIndex: number) => Grid;
    removePossibleValue: (cValue: number) => void;
    removePossileValueFromColumn: (cValue: number) => void;
    removePossileValueFromRow: (cValue: number) => void;
    removePossileValueFromGrid: (cValue: number) => void;
    setCellValue: (cValue: number) => void;
    linkRowColumnGridToCell: () => void;
}
