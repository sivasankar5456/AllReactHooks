import React, { useCallback, useState } from "react";
import Home from "../../components/Home";
import Details from "../../components/Details";
import AboutUs from "../../components/AboutUs";

const Togglecomponent = (props) => {
  const {
    linksArray = [
      { title: "Home", component: <Home /> },
      { title: "Details", component: <Details /> },
      { title: "About Us", component: <AboutUs /> },
    ],
    navCalssName="navCalssName",
    navInActiveCalssName="navInActiveCalssName",
   navActiveCalssName="navActiveCalssName",
    
  } = props;
  const [isSelected, seIsSelected] = useState("Home");

  const toggleComponentFunc = (componentName) => {
    seIsSelected(componentName);
  };

  const returnComponent=linksArray.filter((item)=>item.title==isSelected)
  

  return (
    <div>
      <nav className={navCalssName} >
        <ul>
          {
            linksArray?.map((item,index)=>{
              return(
                <li key={index}>
                <div className={isSelected===item.title ? navActiveCalssName : navInActiveCalssName} onClick={() => toggleComponentFunc(item.title)} >
                 {item.title}
                </div>
              </li>
              )
            })
          }
        
        </ul>
        </nav>
        <div className="component-Wrapper" >
        {
          returnComponent &&  returnComponent[0]?.component
        }
        </div>
   
     
    </div>
  );
};

export default Togglecomponent;

// import React, { useCallback, useState } from "react";
// import Home from "../../components/Home";
// import Details from "../../components/Details";
// import AboutUs from "../../components/AboutUs";

// const Togglecomponent = () => {
//   const [navigation, setNavigation] = useState("Home");

//   const toggleComponentFunc = (componentName) => {
//     setNavigation(componentName);
//   }

//   console.log(navigation)
//   const displayFunc = () => {
//     switch (navigation) {
//       case "Home":
//         return <Home />;
//         break;
//       case "Details":
//         return <Details />;
//         break;
//       case "AboutUs":
//         return <AboutUs />;
//         break;

//       default:
//         return <Home />;
//         break;
//     }
//   };

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <button onClick={() => toggleComponentFunc("Home")} className="btn">
//               Home
//             </button>
//           </li>
//           <li>
//             <button onClick={() => toggleComponentFunc("Details")} className="btn">
//               Details
//             </button>
//           </li>
//           <li>
//             <button onClick={() => toggleComponentFunc("AboutUs")} className="btn">
//               About Us
//             </button>
//           </li>
//         </ul>
//       </nav>
//       {displayFunc()}
//     </div>
//   );
// };

// export default Togglecomponent;
