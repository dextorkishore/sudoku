import { Cell } from "./cell";
export class Column{
    columnIndex: number;
    associatedCells: Cell[]=[];
    
    constructor (index:number)
    {
        this.columnIndex=index;
    }
   
    
    
    
}