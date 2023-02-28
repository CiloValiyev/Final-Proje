import React, { useEffect, useState ,CSSPropertiess} from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "250px auto",
};
const MainRouter = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <ClipLoader
          cssOverride={override}
          color="#36d7b8"
          loading={loading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  )
}

export default MainRouter