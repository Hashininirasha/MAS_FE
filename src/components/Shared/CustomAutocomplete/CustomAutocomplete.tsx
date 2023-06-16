import { Autocomplete } from "@mui/material";
import { StyledTextField } from "../../../assets/theme/theme";

const CustomAutocomplete: React.FC<{
    label: string,
    placeholder: string,
    required: boolean,
    options: { label: string; value: string | number; }[],
    value: string,
    onChange:any,
}> = ({ label,placeholder, required, options, value, onChange, ...rest }) => {
    return (
      <Autocomplete
        {...rest}
        options={options}
        // value={value}
        onChange={onChange}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            required={required}
            variant="outlined"
            label={label}
            placeholder={placeholder}
            // error={!!rest.error}
            // helperText={rest.error ? rest.error : null}
            size="small"
            inputProps={{ ...params.inputProps }}
            InputLabelProps={{ ...params.InputLabelProps }}
          />
        )}
      />
    );
  };
  
  export default CustomAutocomplete;