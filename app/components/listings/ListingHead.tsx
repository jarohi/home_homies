'use client';

import Image from "next/image";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  bhk: number;
  rent: number;
  images_url: string;
  id: string;
  currentUser?: SafeUser | null
  location_type: String;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  bhk,
  rent,
  images_url,
  id,
  currentUser,
  location_type
}) => {
  const { getByValue } = useCountries();

  // const location = getByValue(locationValue);

  return ( 
    <>
      <Heading
        title={`Occupancy in ${bhk?.toString()} bhk in ${location_type}`}
      />
      <div className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={images_url}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton 
            listingId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </>
   );
}
 
export default ListingHead;