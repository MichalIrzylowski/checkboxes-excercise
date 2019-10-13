import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export interface ICheckbox {
    label: string | JSX.Element;
    checked: boolean;
    handleClick: () => void;
}

export const ExcerciseCheckbox: React.FC<ICheckbox> = ({checked, label, handleClick}) => {
    return (
        <FormControlLabel
            control={<Checkbox checked={checked} onClick={handleClick} />}
            label={label}
        />
    )
}