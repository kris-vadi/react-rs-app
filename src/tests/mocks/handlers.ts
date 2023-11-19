import { HttpResponse, http } from 'msw';
import { mockDataTestCards, mockDataTestCard } from './mock';

export const handlers = [
  http.get(
    `https://api.potterdb.com/v1/characters/42d8662b-24a2-434b-8394-945ff0daa194`,
    () => {
      return HttpResponse.json(mockDataTestCard);
    }
  ),

  http.get(`https://api.potterdb.com/v1/characters`, ({ request }) => {
    const url = new URL(request.url);
    url.searchParams.set('page', '1');
    url.searchParams.set('pageLimit', '10');
    url.searchParams.set('searchInputValue', `Harry`);

    return HttpResponse.json({ url, request, data: mockDataTestCards });
  }),
];
