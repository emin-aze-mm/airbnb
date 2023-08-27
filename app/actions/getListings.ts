import prisma from "@/app/libs/prismadb"
import { SafeUser } from "../types";

export interface IListingsParams{
    userId?: string;
}

export default async function getListings(params:IListingsParams){
    try{

        const {userId} = params;

        let query: any ={};

        if(userId){
            query.userId = userId;
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy:{
                createdAt:"desc"
            }
        });
       const safeListings = listings.map((listing)=>({
        ...listing,
        createdAt: listing.createdAt.toISOString(),
       }));
       
    //    await wait(3000)
       
        return safeListings;

        
       
    }
    catch(error: any){
        throw new Error(error)
    }
    
}
    // export async function wait(ms:any){
    //     return new Promise(resolve => setTimeout(resolve,ms))
    // }