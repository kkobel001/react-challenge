import { MenuItem, TextField } from '@mui/material';
import React from 'react';
import { CategoryCell } from 'ui';
import { PropTypes } from 'prop-types';

export const CategoryField = ({
  value,
  onChange,
  categories,
  ...inputProps
}) => {
  return (
    <TextField
      select
      label="Kategoria"
      value={value}
      onchange={onChange}
      {...inputProps}
    >
      {categories.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          <CategoryCell color={option.color} name={option.name} />
        </MenuItem>
      ))}
    </TextField>
  );
};

CategoryField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  categories: PropTypes.any,
};
