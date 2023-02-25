import { Select, SelectProps, MenuItem, FormControl } from '../mui';

type SelectOption = {
  id: number | string;
  label: number | string;
  value: number | string;
};

type Props = SelectProps & {
  options: SelectOption[];
};

export const Dropdown = ({ options, ...props }: Props) => (
  <FormControl variant='standard'>
    <Select {...props}>
      {options.map(({ id, label, value }) => (
        <MenuItem key={id} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
