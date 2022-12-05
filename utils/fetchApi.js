import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "75eeb7b472msh120f3c09e845497p19ff2fjsne8810cb8a5fa",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

	return data;
};
