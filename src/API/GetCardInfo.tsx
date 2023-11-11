import { CardResponseData } from '../types/types';
import { BASE_URL } from './constants';

const getCardInfo = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`);
    const data: CardResponseData = await response.json();

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export default getCardInfo;
