/**
 live_gUEtgXbKVS9dJ33NGDhS9qMJ5i4sUI7yjkFF8yzsJQdlk8bCS7wBGLv2jdYo1X6P
 */

//&breed_ids=beng&api_key=

let key = process.env.API_KEY;
export const url_images = `https://api.thecatapi.com/v1/images/search?&mime_types=jpg&format=json&limit=100&api_key=${key}`;

export const url_random = `https://api.thecatapi.com/v1/images/search`;
export const url_imagesByBreeds = `https://api.thecatapi.com/v1/images/search?&breed_ids=`;

export const url_breeds = `https://api.thecatapi.com/v1/breeds`;
