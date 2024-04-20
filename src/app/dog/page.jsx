//==========================================
"use client";
//========================================

import React, { useState, useEffect, ChangeEvent } from "react";
import {
  fetchOneDog,
  fetchBreeds,
  fetchDogByBreed,
} from "@/services/dog_services";
fetchOneDog();

////////////////==============================
/**
 * 
 interface Breed {
  id: string;
  name: string;
}

interface DogBreed {
  id: string;
  url: string;
}
 */

//=======================================

function Dog() {
  const [breed, setBreed] = useState([]);
  const [dogBredd, setDogBreed] = useState({});

  ///============handleChamge===========0
  const handleChange = async (e) => {
    // console.log(e.target.value);
    //setNameSelected(e.target.value);
    let dog = await fetchDogByBreed(e.target.value);

    ///lo cargo al estado
    setDogBreed(dog[0]);
  };

  console.log("breed selected", dogBredd);

  //========================================
  useEffect(() => {
    fetchBreeds().then((r) => {
      //console.log(r);
      setBreed(r);
    });
  }, []);

  return (
    <>
      <div className="mt-8 flex flex-col items-center">
        <div className="">
          <select
            onChange={(e) => handleChange(e)}
            name="selectDog"
            id="selectDog"
            className=" bg-slate-400  w-48 rounded-md  py-3 px-1  border-4 border-cyan-600 mb-5 "
          >
            <option value="">Selecciona una raza</option>
            {breed.length > 0 &&
              breed.map((b) => (
                <>
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                </>
              ))}
          </select>
        </div>

        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-full bg-gray-200 lg:aspect-none  lg:h-80 ">
            <div className="absolute inset-0  rounded-full bg-black opacity-0 transition-opacity group-hover:opacity-15"></div>
            {dogBredd.url ? (
              <img
                src={dogBredd.url}
                alt={dogBredd.id}
                // width={300}
                //height={400}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                //style={{ objectFit: "fill" }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "9999px",
                }}
              />
            ) : (
              <div className="h-full w-full flex justify-center items-center text-gray-500 p-8">
                <span>Selecciona una raza de perro para ver</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dog;
