"use client"

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";

interface ListingProps{
    data:Listing;
    reservation?: Reservation;
    onAction?: (id:string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?:string;
    currentUser?: SafeUser | null


}

const ListingCard:React.FC<ListingProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionId,
    actionLabel,
    currentUser
}) => {

    const router = useRouter() 
    const {getByValue} = useCountries();

    const location = getByValue(data.locationValue);

    
    return ( 
        <div>Listing</div>
     );
}
 
export default ListingCard;