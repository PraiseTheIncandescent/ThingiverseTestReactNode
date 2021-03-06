import { ICreator } from "./ICreator";

export interface IThing {
    id: number;
    name: string;
    thumbnail: string;
    creator: ICreator;
}