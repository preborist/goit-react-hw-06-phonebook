import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ inputFilterName, changeFilter }) => {
  return (
    <label>
      Find contacs by name{' '}
      <input
        name="filter"
        type="text"
        value={inputFilterName}
        onChange={changeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  inputFilterName: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
