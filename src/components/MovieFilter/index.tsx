import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
type MovieFilterProps = {
  options: string[];
  handleChange: (values: string[]) => void;
};
export default function MovieFilter({ options, handleChange }: MovieFilterProps) {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={options}
      getOptionLabel={(option) => option}
      renderInput={(params) => <TextField {...params} label="Catégories" />}
      sx={{ minWidth: "200px", maxWidth: "700px" }}
      onChange={(e, values) => handleChange(values)}
    />
  );
}
