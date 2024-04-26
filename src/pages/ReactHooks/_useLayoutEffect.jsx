import React, { useEffect, useLayoutEffect, useState } from 'react'

const userIds = [1,2];
const _useLayoutEffect = () => {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(true);

  let now = performance.now();
  while(performance.now()- now < 200){

  }
  useLayoutEffect(()=>{  // try this with useEffect to know the difference b/w useEffect and useLayoutEffect
    setIsAdmin(userId===userIds[0])
  },[userId])

  const handleChange = ()=>{
    const otherId = userIds.find((id)=> id !== userId);
    setUserId(otherId);
  }

  return (
    <div>
      <h1>useLayoutEffect Hook</h1>
     <p>userId : {userId}</p>
     <p>Admin : {isAdmin ? "true" : "false" }</p>
     <button onClick={handleChange} >Change User</button>
     <p><span style={{color:'crimson'}} >Note : </span>useLayoutEffect can hurt performance. Prefer useEffect when possible. <br />
     useLayoutEffect is a version of useEffect that fires before the browser repaints the screen. <br />
     This means it will execute the code bofore code renders on browser. this will cause browser to wait and after execution of code <br />
     browser update the ui this is bad mostly avoid this.  Avoid using useLayoutEffect hook 99% and use useEffect hook only.use this Layout effcet hook on particular scenario.
     </p>
    </div>
  )
}

export default _useLayoutEffect
