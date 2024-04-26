import React from 'react'

const FormWithout_UseID = () => {
    return (
        <>
            <label htmlFor={`name`}>Name : </label> <input type="text" id={`name`} />
            <label htmlFor={`email`}>Email : </label> <input type="text" id={`email`} />
        </>
    )
}

export default FormWithout_UseID
