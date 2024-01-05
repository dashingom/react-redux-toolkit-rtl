import React from "react";
import Input from "./Elements/Input";
import Select from "./Elements/Select";

type Field = {
  type: string;
  id: string;
  label: string;
  value: string;
  options: any;
  rules: any;
  fieldLimit: number;
  defaultValue: any;
};
export type Props = {
  field: Field;
  control: any;
};
const Element: React.FC<Props> = ({
  field: {type, id, label, options, rules, fieldLimit, defaultValue},
  control,
}) => {
  switch (type) {
    case "text":
      return (
        <Input
          name={id}
          label={label}
          id={id}
          control={control}
          rules={rules}
          fieldLimit={fieldLimit}
          defaultValue={defaultValue}
        />
      );
    case "select":
      return (
        <Select
          id={id}
          name={id}
          label={label}
          options={options}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
        />
      );

    default:
      return null;
  }
};

export default Element;
