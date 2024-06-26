import axios from "axios";

const UNSPLASH_API_URL = "https://api.unsplash.com/search/photos";
const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

export const fetchImageByCountry = async (country) => {
  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      params: {
        query: country,
        client_id: UNSPLASH_API_KEY,
        per_page: 5, // Get only one image
      },
    });
    return response.data.results[0].urls.regular; // Get the regular size image URL
  } catch (error) {
    console.error("Error fetching image from Unsplash", error);
    throw error;
  }
};
