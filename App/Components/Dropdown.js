import React from 'react';
import { Dropdown as RNEDropdown } from 'react-native-element-dropdown'; // Adjust this import based on the library you're using

const Dropdown = ({
  style = {},
  placeholderStyle = {},
  selectedTextStyle = {},
  inputSearchStyle = {},
  iconStyle = {},
  data,
  search = false,
  maxHeight = 300,
  labelField = "label",
  valueField = "value",
  placeholder = "Select item",
  searchPlaceholder = "Search...",
  value,
  onChange,
}) => {
  return (
    <RNEDropdown
      style={style}
      placeholderStyle={placeholderStyle}
      selectedTextStyle={selectedTextStyle}
      inputSearchStyle={inputSearchStyle}
      iconStyle={iconStyle}
      data={data}
      search={search}
      maxHeight={maxHeight}
      labelField={labelField}
      valueField={valueField}
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Dropdown;
