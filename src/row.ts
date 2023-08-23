import { Cell } from "./cell";

export class Row {
    rowIndex:number;
    associatedCells:Cell[]=[];
    
    
    constructor(index:number) {
        this.rowIndex=index;
        
    }
}