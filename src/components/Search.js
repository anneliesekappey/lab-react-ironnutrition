import { Input } from 'antd';
import React, { useState } from 'react';

const Search = (props) => {
  const [searchEntry, setSearchEntry] = useState('');

  return (
    <div>
      <label> Search </label>
      <Input onChange={(e) => props.filterFoods(e.target.value)} />
    </div>
  );
};

export default Search;
