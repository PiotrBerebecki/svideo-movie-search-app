import { setSearchTerm, addApiData, getApiDetails } from './../flux/actions';
import moxios from 'moxios';

describe('actions', () => {
  it('setSearchTerm', () => {
    const searchTerm = 'black';
    expect(setSearchTerm(searchTerm)).toEqual({
      type: 'SET_SEARCH_TERM',
      payload: searchTerm,
    });
  });

  it('setSearchTerm - using SnapShot', () => {
    expect(setSearchTerm('black')).toMatchSnapshot();
  });

  const atlanta = {
    title: 'Atlanta',
    year: '2008–2013',
    description: 'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
    poster: 'a.jpg',
    imdbID: 'tt4288182',
    trailer: 'MpEdJ-mmTlY',
    ratings: '4.0',
  };

  it('addApiData - using SnapShot', () => {
    expect(addApiData(atlanta)).toMatchSnapshot();
  });

  it('getApiDetails', done => {
    const dispatchMock = jest.fn();

    moxios.withMock(() => {
      const thunk = getApiDetails(atlanta.imdbID);
      thunk(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: atlanta,
          })
          .then(() => {
            expect(request.url).toEqual(
              `http://localhost:3000/${atlanta.imdbID}`
            );
            expect(dispatchMock).toBeCalledWith(addApiData(atlanta));
            done();
          });
      });
    });
  });
});
