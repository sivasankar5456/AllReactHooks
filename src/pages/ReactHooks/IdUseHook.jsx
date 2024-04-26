import {useId} from 'react'

const IdUseHook = () => {

    const ueserNameID=useId()
    const cellID=useId()
    const emailID=useId()

  return (
    <div>
      <h1>useId Hook</h1>
      <label htmlFor={ueserNameID}></label>
      <input type="text" id={ueserNameID} placeholder={`Generated id --> ${ueserNameID}`} />
      <label htmlFor={cellID}></label>
      <input type="text" id={cellID} placeholder={`Generated id --> ${cellID}`} />
      <label htmlFor={emailID}></label>
      <input type="text" id={emailID} placeholder={`Generated id --> ${emailID}`} />
    
    </div>
  )
}

export default IdUseHook
