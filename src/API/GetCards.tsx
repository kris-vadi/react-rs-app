import { ResponseData } from '../types/types';
import { BASE_URL } from './constants';

const getCards = async (
  searchText?: string | null,
  page: number = 1,
  limit: number = 10
) => {
  try {
    const response = await fetch(
      `${BASE_URL}??filter[name_cont]=${searchText}&page[number]=${page}&page[size]=${limit}`
    );
    const data: ResponseData = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCards;
