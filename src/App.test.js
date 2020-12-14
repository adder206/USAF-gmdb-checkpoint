import { render, screen } from '@testing-library/react';
import App from './App';
import MovieList from './components/MovieList'
import { shallow } from 'enzyme';

describe("Home page", () => {
  it('renders without crashing', () => {
    const appWrapper = shallow(<App/>);
    expect(appWrapper).toBeTruthy()
  });

  it('display movie selections', () => {
    const appWrapper = shallow(<App/>);
    const movieList = appWrapper.find(MovieList)
    expect(movieList).toHaveLength(1)
  });




})

describe('Movie List', () => {
  it('renders a list of movies', () => {
    const movieListWrapper = shallow(<MovieList/>);
    const movie = movieListWrapper.find(Movie);

    expect(movie).toHaveLength(3);
  })
})