import React from 'react';
import SearchResult from '../../components/SearchResult';
import { shallow, mount } from 'enzyme';

describe('<SearchResult', () => {
  const result = {type: 'verb', defenition: 'this definition', example: 'example'}
  const searchTerm = 'run'
  const handleClick = jest.fn();
  const searchResult = shallow(
    <SearchResult save={handleClick} searchTerm={searchTerm} result={result}/>
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

  it('calls handleClick when Saved button clicked', () => {
    let button = searchResult.find('.save');
    button.simulate('click');
    expect(handleClick).toHaveBeenCalled;
    expect(handleClick).toHaveBeenCalledWith(searchTerm, result);
  })
});
