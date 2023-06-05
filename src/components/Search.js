import { useState } from "react";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const Search = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const handleSearchClick = () => {
    onSubmit(value);
  };
  return (
    <OutlinedInput
      fullWidth
      placeholder="Please enter name to search..."
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      endAdornment={
        <InputAdornment position="end">
          <Button onClick={handleSearchClick}>Search</Button>
        </InputAdornment>
      }
    />
  );
};

export default Search;
