import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useController } from 'react-hook-form';


export function InputField({
    name,
    control,
    label,
    type,
    ...inputProps
}) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    const _type = type || 'text'

    return (
        <TextField
            variant="outlined"
            fullWidth
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            inputRef={ref}
            error={invalid}
            helperText={error?.message}
            inputProps={inputProps}
            type={_type}
        />
    );
}