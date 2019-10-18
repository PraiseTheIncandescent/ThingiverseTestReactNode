import { ICreator } from "./ICreator";

export interface IThingDetail {
    id: number;
    name: string;
    thumbnail: string;
    creator: ICreator;
    description: string;
    license: string;
    view_count: number;
}