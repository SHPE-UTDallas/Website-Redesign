import { User } from "next-auth";

declare module "next-auth" {
    export interface User {
        id?: string;
    }
}