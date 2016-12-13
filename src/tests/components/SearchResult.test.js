import React from 'react';
import SearchResult from '../../components/SearchResult';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('<SearchResult', () => {
  const result = {type: 'verb', defenition: 'this definition', example: 'example'}
  const searchResult = shallow(
    <SearchResult searchTerm={'run'} result={result}/>
  );
  it('displays the result content correctly', () => {
    expect(searchResult.type()).toEqual('div');
    expect(searchResult.find('.result-content').text()).toEqual('verb - this definition');
    expect(searchResult.text()).not.toContain('run');
  });

  it('has a Save button', () => {
    let button = searchResult.find('.save');
    expect(button.text()).toEqual('Save');
  })
});
