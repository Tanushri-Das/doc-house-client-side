// import React from 'react'
// import Header from '../Components/Shared/Header/Header'
// import { Outlet } from 'react-router-dom'
// import Footer from '../Components/Shared/Footer/Footer'

// const Main = () => {
//   return (
//     <div>
//         <Header/>
//         <Outlet/>
//         <Footer/>
//     </div>
//   )
// }

// export default Main


import React from 'react'
import Header from '../Components/Shared/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Components/Shared/Footer/Footer'

const Main = () => {
  const location=useLocation();
  // console.log(location);
  const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('signup')
  return (
    <div>
       {noHeaderFooter || <Header/>}
        <Outlet/>
        {noHeaderFooter || <Footer/>}
    </div>
  )
}

export default Main