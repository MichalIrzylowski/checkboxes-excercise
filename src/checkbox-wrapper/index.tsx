import React from 'react'
import {ExcerciseCheckbox, ICheckbox} from '../checkbox';

interface ICheckboxWrapper {
    children: React.FC<ICheckbox>[] | any;
    allCheckboxLabel: string | JSX.Element;
    state: {[key: string]: boolean},
    setState: any;
    lengthToCompare: any[],
    name?: string;
}

export const CheckboxWrapper: React.FC<ICheckboxWrapper> = ({children, allCheckboxLabel, state, setState, lengthToCompare, name = 'selectAll'}) => {

    const values = Object.values(state);
    const isAnyUnselected = values.some((val) => val === false);
    const areAllSelected = values.length === lengthToCompare.length && !isAnyUnselected;

    const handleClick = () => {
        const newState: {[key: string]: boolean} = {}
        lengthToCompare.forEach(({name}) => {
            newState[name] = !areAllSelected
        })
        setState(newState);
    }

    return (
        <div>
            {children.length > 1 && <ExcerciseCheckbox label={allCheckboxLabel} checked={areAllSelected} handleClick={handleClick} name={name} />}
            {children}
        </div>
    )
}