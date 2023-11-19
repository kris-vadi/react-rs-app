import { ResponseData, CardResponseData } from '../../types/types';

export const mockDataTestCards: ResponseData = {
  data: [
    {
      id: '42d8662b-24a2-434b-8394-945ff0daa194',
      attributes: {
        slug: 'harry-potter',
        blood_status: 'Half-blood',
        gender: 'Male',
        image:
          'http://static.wikia.nocookie.net/harrypotter/images/9/97/Harry_Potter.jpg',
        name: 'Harry James Potter',
        nationality: 'English',
        species: 'Human',
      },
    },
    {
      id: '9ebdfebf-a9d8-45be-9312-1c6fb339e61d',
      attributes: {
        slug: 'harry-trigg',
        blood_status: null,
        gender: 'Male',
        image: null,
        name: 'Harry Trigg',
        nationality: 'British',
        species: 'Human',
      },
    },
    {
      id: 'cc08084f-f651-4f1e-b9df-6b1598ac2673',
      attributes: {
        slug: 'unidentified-death-eater-who-was-stunned-by-harry-potter',
        blood_status: 'Pure-blood or half-blood',
        gender: 'Male',
        image: null,
        name: 'Unidentified Death Eater who was Stunned by Harry Potter',
        nationality: null,
        species: 'Human',
      },
    },
  ],
  meta: {
    pagination: {
      current: 1,
      next: 2,
      records: 3,
    },
    copyright: 'Copyright © Potter DB 2023',
    generated_at: '2023-11-19T1:2:12.229+0:00',
  },
};

export const mockDataTestCard: CardResponseData = {
  data: {
    id: '42d8662b-24a2-434b-8394-945ff0daa194',
    attributes: {
      slug: 'harry-potter',
      blood_status: 'Half-blood',
      gender: 'Male',
      image:
        'http://static.wikia.nocookie.net/harrypotter/images/9/97/Harry_Potter.jpg',
      name: 'Harry James Potter',
      nationality: 'English',
      species: 'Human',
    },
  },
  meta: {
    pagination: {
      current: 1,
      next: 2,
      records: 3,
    },
    copyright: 'Copyright © Potter DB 2023',
    generated_at: '2023-11-19T1:2:12.229+0:00',
  },
};
