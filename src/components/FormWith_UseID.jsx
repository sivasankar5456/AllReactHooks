import React, { useId } from 'react'

const FormWith_UseID = () => {
    const unidqueID = useId()
// one useId() hook is enough for hundreds of tags it will increase the performence of the app
    return (
        <>
            <label htmlFor={`${unidqueID}-name`}>Name : </label> <input type="text" id={`${unidqueID}-name`} placeholder={`generated  id --->  ${unidqueID}-name`} /> 
            <label htmlFor={`${unidqueID}-email`}>Email : </label> <input type="text" id={`${unidqueID}-email`} placeholder={`generated  id --->  ${unidqueID}-email`} />
        </>
    )
}

export default FormWith_UseID
