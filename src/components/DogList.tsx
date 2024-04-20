import React from "react";

interface Dog {
  id: string;
  url: string;
}

interface DogListProps {
  dog: Dog[] | null;
}

/***
 * 
 interface DogListProps {
  dog: Dog[] | null;
}
 */

// dog es una props
const DogList: React.FC<DogListProps> = ({ dog }) => {
  // console.log(dog);
  return (
    <div className=" grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5   xl:gap-x-8 mt-12">
      {dog &&
        dog.map((dg) => (
          <div key={dg.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-80 lg:h-80">
              <img
                src={dg.url}
                alt={dg.id}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div>
              <p></p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DogList;
