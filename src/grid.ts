import { Cell } from "./cell";

export class Grid {
    gridIndex:number;
    associatedCells:Cell[]=[];

    constructor(index:number) {
        this.gridIndex=index;
    }
}