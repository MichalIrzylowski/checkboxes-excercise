import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import {ExcerciseCheckbox} from '../checkbox';
import {CheckboxWrapper} from '../checkbox-wrapper';

import multipleData from '../mocked-data/consents.json';
// import singleData from '../mocked-data/something.json';

export const Main: React.FC = () => {

    const [multipleDataState, setMultipleDataState] = useState<{[key: string]: boolean}>({})

    const handleSelect = (e: any) => {
        console.log(multipleDataState)
        setMultipleDataState({...multipleDataState, [e.target.name]: !multipleDataState[e.target.name]})
    }

    return(
        <div>
            <Typography variant='h6'>
                Multiple checkboxes
            </Typography>
            <CheckboxWrapper
                allCheckboxLabel='Zaznacz wszystkie'
                handleClick={() => console.log('hello')}
            >
                {multipleData.map(
                    ({consentType, name}) => (
                    <ExcerciseCheckbox
                        label={consentType}
                        checked={!!multipleDataState[name]}
                        name={name}
                        handleClick={handleSelect}
                    />)
                )}
            </CheckboxWrapper>
        </div>
    )
}