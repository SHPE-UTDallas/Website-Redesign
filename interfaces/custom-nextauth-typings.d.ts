import { User } from "next-auth";

declare module "next-auth" {
    export interface User {
        id?: string;
        imageUrl?: string;
        paidMember?: boolean;
        joinDate?: Date;
        standing?: string;
    }
}