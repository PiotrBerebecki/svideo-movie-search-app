import reducers from './../flux/reducers';

describe('reducers', () => {
  it('adds search term to state', () => {
    const state = reducers(
      { searchTerm: '', apiData: {} },
      { type: 'SET_SEARCH_TERM', payload: 'black' }
    );
    expect(state).toEqual({ searchTerm: 'black', apiData: {} });
  });

  it('adds api data', () => {
    const state = reducers(
      { searchTerm: '', apiData: {} },
      {
        type: 'ADD_API_DATA',
        payload: {
          rating: '2.1',
          title: 'Westworld',
          year: '2016–',
          description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
          poster: 'ww.jpg',
          imdbID: 'tt0475784',
          trailer: 'eX3u0IlBBO4',
        },
      }
    );
    expect(state).toEqual({
      searchTerm: '',
      apiData: {
        tt0475784: {
          rating: '2.1',
          title: 'Westworld',
          year: '2016–',
          description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
          poster: 'ww.jpg',
          imdbID: 'tt0475784',
          trailer: 'eX3u0IlBBO4',
        },
      },
    });
  });
});
