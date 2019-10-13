import React from 'react'
import {ExcerciseCheckbox, ICheckbox} from '../checkbox';

interface ICheckboxWrapper {
    children: React.FC<ICheckbox>[];
    allCheckboxLabel: string | JSX.Element;
    handleClick: () => void;
}

export const CheckboxWrapper: React.FC<ICheckboxWrapper> = ({children, allCheckboxLabel, handleClick}) => {
    return (
        <div>
            {children.length > 1 && <ExcerciseCheckbox label={allCheckboxLabel} checked={true} handleClick={handleClick} />}
            {children}
        </div>
    )
}