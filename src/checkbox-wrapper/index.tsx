import React from 'react'
import {ExcerciseCheckbox, ICheckbox} from '../checkbox';

interface ICheckboxWrapper {
    children: React.FC<ICheckbox>[] | any;
    allCheckboxLabel: string | JSX.Element;
    handleClick: () => void;
    name?: string;
}

export const CheckboxWrapper: React.FC<ICheckboxWrapper> = ({children, allCheckboxLabel, handleClick, name = 'selectAll'}) => {
    console.log(children)
    return (
        <div>
            {children.length > 1 && <ExcerciseCheckbox label={allCheckboxLabel} checked={true} handleClick={handleClick} name={name} />}
            {children}
        </div>
    )
}