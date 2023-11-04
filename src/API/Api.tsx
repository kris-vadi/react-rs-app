import { ResponseData } from '../types/types';

const BASE_URL = 'https://swapi.dev/api/planets/';

const getCards = async (searchText?: string | null, page: number = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}?search=${searchText}&page=${page}`
    );
    const data: ResponseData = await response.json();
    console.log(data?.count);
    console.log(data?.results);
    console.log(data?.previous);
    console.log(data?.next);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCards;
