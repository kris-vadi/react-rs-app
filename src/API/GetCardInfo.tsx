import { CardParams } from '../types/types';

const BASE_URL = 'https://swapi.dev/api/planets/';

const getCardInfo = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}${id}/`);
    const data: CardParams = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCardInfo;
