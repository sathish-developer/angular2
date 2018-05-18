import { Address } from "./address";

export interface User {
    name: string; 
    password :string;
    on:boolean;
    off:boolean;
    address:Address;
}