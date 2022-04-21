import React, { useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
// Image
import searchIcon from '../../images/search-icon.svg';
// Styles
import { Wrapper, Content } from './SearchBar.styles';
// Types
type Props = {
  onChange: (searchTerm: string) => void;
};

const SearchBar: React.FC<Props> = ({ onChange }) => {
  const onChangeHandler = (e: { target: { value: string } }) => {
    onChange(e.target.value);
  };

  const debouncedChangeHanlder = useMemo(() => debounce(onChangeHandler, 500), []);

  useEffect(() => {
    return () => {
      debouncedChangeHanlder.cancel();
    };
  }, []);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input type="search" placeholder="Search Video" onChange={debouncedChangeHanlder} />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
