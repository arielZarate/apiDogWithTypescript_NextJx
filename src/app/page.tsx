"use client";
import { fetchDog } from "@/services/dog_services";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import DogList from "@/components/DogList";

//=============================================

interface Dog {
  id: string;
  url: string;
}

interface DogListProps {
  dog: Dog[] | null;
}

//===========HOME===========================
export default function Home() {
  const [dog, setDog] = useState<Dog[] | null>(null); //opcion 3
  //TODO: cargamos el estado global dog con la data de fetch
  useEffect(() => {
    fetchDog()
      .then((res) => {
        //guardo los datos en el estado de dog
        setDog(res);
      })
      .catch((error) => console.log(error));
  }, []);

  //========================================================
  return (
    <main className=" m-1 ">
      {dog !== null ? (
        <DogList dog={dog} />
      ) : (
        <p className="text-bold text-3xl text-slate-900 text-center my-3">
          Loading...
        </p>
      )}
    </main>
  );
}
