import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

const SearchInput = ({searchAction, minLength}) => {
    const [searchValue, setsearchValue] = useState("");
    const handleChange = (event) => {
        setsearchValue(event.target.value);
    }
    useEffect(() => {
        searchAction(searchValue, minLength);
    }, [searchValue]);
    return (
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <TextField
          sx={{ width: "75%" }}
          label="Ingrese su busqueda"
          onChange={handleChange}
        />
      </Box>
    )
}

export default SearchInput;
