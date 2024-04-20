import {
  url_images,
  url_random,
  url_breeds,
  url_imagesByBreeds,
} from "@/Utils/GLOBAL";

export const fetchDog = async () => {
  const res = await fetch(`${url_images}`);
  const data = await res.json();
  //console.log(data);
  return data;
};

export const fetchOneDog = async () => {
  const res = await fetch(`${url_random}`);
  const data = await res.json();
  //console.log(data);
  return data;
};

export const fetchBreeds = async () => {
  const res = await fetch(`${url_breeds}`);
  const data = await res.json();
  //console.log(data);
  return data;
};

export const fetchDogByBreed = async (name) => {
  try {
    const res = await fetch(
      `${url_imagesByBreeds}${name}&api_key=${process.env.API_KEY}`
    );
    const data = await res.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
