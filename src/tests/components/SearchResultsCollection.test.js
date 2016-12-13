import React from 'react';
import SearchResultsCollection from '../../components/SearchResultsCollection';
import { shallow, mount } from 'enzyme';

describe('<SearchResultsCollection', () => {
  const searchResults = ['result1', 'result2'];
  const wrapper = shallow(
    <SearchResultsCollection searchResults={searchResults} />
  );

  it('renders a div with className results', () => {
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.props().className).toEqual('results');
  });

  it('renders the correct number of children', () => {
    expect((wrapper.props().children.length)).toEqual(2);
  })
});
