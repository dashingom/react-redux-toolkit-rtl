import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { useTheme } from '@emotion/react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';

type FormInputProps = {
    id: string;
    name: string;
    label: string;
    control: any;
    rules: any;
    fieldLimit: number;
};
const Input = ({ id, name, label, control, rules, fieldLimit }: FormInputProps): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const rulesInput = (): object => {
        if (rules && rules.pattern) {
            return {
                ...rules,
                pattern: {
                    ...rules.pattern,
                    value: new RegExp(rules.pattern.value, 'i'),
                },
            };
        }
        return {
            ...rules,
        };
    };

    return (
        <Controller
            name={name}
            control={control}
            rules={rulesInput()}
            render={({ field: { onChange, value }, fieldState: { error } }): JSX.Element => (
                <>
                    <TextField
                        id={id}
                        className={classes.formControl}
                        helperText={error ? error.message : null}
                        error={!!error}
                        onChange={onChange}
                        value={value}
                        fullWidth
                        label={label}
                        variant="filled"
                        sx={fieldLimit ? { marginBottom: '0 !important' } : {}}
                    />
                    {fieldLimit ? (
                        <Typography variant="body2" className="custom-add-device-field-lengths-style">
                            {`${value ? value.length : 0}/${fieldLimit}`}
                        </Typography>
                    ) : null}
                </>
            )}
        />
    );
};

export default Input;
