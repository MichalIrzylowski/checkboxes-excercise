import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export interface ICheckbox {
    label: string | JSX.Element;
    checked: boolean;
    handleClick: (e:React.MouseEvent) => void;
    name: string;
}

export const ExcerciseCheckbox: React.FC<ICheckbox> = ({checked, label, handleClick, name}) => {
    console.log(checked)
    return (
        <FormControlLabel
            control={<Checkbox checked={checked} onClick={handleClick} />}
            label={label}
            name={name}
        />
    )
}