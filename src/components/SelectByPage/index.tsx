import { FormControl, NativeSelect } from "@mui/material";
type SelectByPageProps = {
  value: number;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
const SelectByPage = ({ value, handleChange }: SelectByPageProps) => {
  return (
    <FormControl sx={{ ml: "16px", width: "50px", height: "12px" }}>
      <NativeSelect value={value} onChange={handleChange} sx={{ borderRadius: "none" }}>
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
      </NativeSelect>
    </FormControl>
  );
};

export default SelectByPage;
