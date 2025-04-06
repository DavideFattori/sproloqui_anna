import { useEffect } from 'react';
import { RouterProvider } from "react-router";
import router from "./routes/Routes";
import AOS from 'aos';


function App() {

  useEffect(() => {
      AOS.init({
          duration: 1000,
      });
  }, []);
  
  return (
    <>  
      <RouterProvider router={router} />
    </>
  )
}

function Root() {
  return (
      <App />
  )
}

export default Root;

