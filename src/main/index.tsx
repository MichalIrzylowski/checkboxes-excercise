import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import {ExcerciseCheckbox} from '../checkbox';
import {CheckboxWrapper} from '../checkbox-wrapper';

import multipleData from '../mocked-data/consents.json';
import singleData from '../mocked-data/something.json';

export const Main: React.FC = () => {

    const [multipleDataState, setMultipleDataState] = useState<{[key: string]: boolean}>({})
    const [singleDataState, setSingleDataState] = useState<{[key: string]: boolean}>({})

    const handleSelect = (e: any) => {
        setMultipleDataState({...multipleDataState, [e.target.name]: !multipleDataState[e.target.name]})
    }

    const handleSelectSingle = (e: any) => {
        setSingleDataState({...singleDataState, [e.target.name]: !singleDataState[e.target.name]})
    }

    return(
        <div>
            <Typography variant='h6'>
                Multiple checkboxes
            </Typography>
            <CheckboxWrapper
                allCheckboxLabel='Zaznacz wszystkie'
                state={multipleDataState}
                lengthToCompare={multipleData}
                setState={setMultipleDataState}
            >
                {multipleData.map(
                    ({consentType, name}) => (
                    <ExcerciseCheckbox
                        key={name}
                        label={consentType}
                        checked={!!multipleDataState[name]}
                        name={name}
                        handleClick={handleSelect}
                    />)
                )}
            </CheckboxWrapper>
            <Typography variant='h6'>
                Single checkbox
            </Typography>
            <CheckboxWrapper
                allCheckboxLabel='Zaznacz wszystkie'
                state={singleDataState}
                lengthToCompare={singleData}
                setState={setSingleDataState}
            >
                {singleData.map(
                    ({someData, name}) => (
                        <ExcerciseCheckbox
                            key={name}
                            label={someData}
                            checked={!!singleDataState[name]}
                            name={name}
                            handleClick={handleSelectSingle}
                        />
                    )
                )}
            </CheckboxWrapper>
        </div>
    )
}