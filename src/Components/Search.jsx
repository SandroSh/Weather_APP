import React, { useState } from "react";
import { SearchContainer, SearchInnerContainer } from "./styled/Search.style.js";
import { AsyncPaginate } from "react-select-async-paginate";
import {Url, geoApiOptions} from '../api.jsx'


const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${Url}/cities?minPopulation=1000&namePrefix=${inputValue}`, geoApiOptions)
    .then(response => response.json())
    .then((response) =>  {
        return {
            options: response.data.map((city) => {
                return{
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`
                }
            })
        }
    })
    .catch(error => console.error(error))
  };
  
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <SearchContainer>
      <SearchInnerContainer>
        <AsyncPaginate
          placeholder="Search for City"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          
        />
      </SearchInnerContainer>
    </SearchContainer>
  );
};

export default Search;
