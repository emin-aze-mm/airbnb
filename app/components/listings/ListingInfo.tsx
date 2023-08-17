"use client"

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import React from "react";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";


const Map = dynamic(()=>import('../Map'),{
    ssr:false
});

interface ListingInfoProps{
    user: SafeUser;
    description: string;
    guestCount:number;
    roomCount:number;
    bathroomCount:number;
    category:{
        icon:IconType;
        label:string;
        description:string;
    } | undefined
    locationValue:string;

}

const ListingInfo:React.FC<ListingInfoProps> = ({
    user,
    description,
    guestCount,
    roomCount,
    bathroomCount,
    category,
    locationValue
    
}) => {

    const {getByValue} = useCountries();

    const coordinates = getByValue(locationValue)?.latlng;


    return ( 
        <div className="col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="text-lg  font-semibold flex flex-row items-center gap-2">
                    <div>Hosted by {user?.name}</div>
                    <Avatar src={user?.image}/>
                </div>
                <div className="flex flex-row items-center gap-4 font light text-neutral-500">
                    <div>
                        {guestCount} guests
                    </div>
                    <div>
                        {roomCount} rooms
                    </div>
                    <div>
                        {bathroomCount} bathrooms
                    </div>
                </div>
                
            </div>
            <hr className="h-0.5 bg-neutral-800 opacity-20"/>
            {category && (
                <ListingCategory
                    icon={category.icon}
                    label={category.label}
                    description={category.description}
                />
            )}
            <hr className="h-0.5 bg-neutral-800 opacity-20"/>
            <div className="text-lg font-light text-neutral-500">
                {description}
            </div>
            <hr className="h-0.5 bg-neutral-800 opacity-20"/>
            <Map center={coordinates}/>
        </div>
     );
}
 
export default ListingInfo;