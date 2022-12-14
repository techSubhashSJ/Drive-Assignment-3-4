import Link from "next/link";
import React from "react";

const CarCardFooter = (props: { id: number }) => {
  return (
    <div className="flex flex-col justify-between px-4 pb-4 pt-2 lg:flex-row lg:space-x-2">
      <Link href={"/"}>
        <a className="px-4 py-2 mt-2 tracking-wide rounded-lg font-bold text-center text-white bg-primary hover:bg-primary_hover">
          Enquire Now
        </a>
      </Link>

      <Link href={`/cars-for-sale/car/${props.id}`}>
        <a className="px-4 py-2 mt-2 tracking-wide rounded-lg  font-bold text-center text-primary opacity-80 border border-primary hover:bg-primary_hover hover:text-white">
          View Details
        </a>
      </Link>
    </div>
  );
};

export default CarCardFooter;
