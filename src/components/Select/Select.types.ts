export type TSelectMenu = {
  onChange: (value: string) => void;
  label: string;
  value: string;
  options: { value: string; name: string }[];
};
