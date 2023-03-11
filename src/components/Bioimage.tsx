import React from "react";

export type BioImage = {
  name?: string;
  store?: string;
  src?: string;
  className?: string;
};

export const BioImage = ({ image }: { image: BioImage }) => {
  return (
    <div className="p-2 flex flex-row bg-black text-white border-gray-200 border border-1 rounded ">
      {image.name}
    </div>
  );
};
