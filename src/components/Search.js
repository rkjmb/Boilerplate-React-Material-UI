import React from 'react'
import TextField from '@material-ui/core/TextField';
import useDebounce from '../hooks/useDebounce';

const Search = ({ label = 'Search', value = "", setValue }) => {
    const [debouncedValue, setdebouncedValue] = useDebounce(value, setValue);
    return (
        <TextField value={debouncedValue} label={label} onChange={(e) => setdebouncedValue(e.target.value)} variant="outlined" />
    )
}

export default Search
