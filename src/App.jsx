import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./containers/navbar";
import Home from "./pages/home";
import WishList from "./pages/wishList";
import { useEffect } from "react";
import { setWishlist } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticate = useSelector((state) => state.user.logined);
  const userEmail = useSelector(state=> state.user.userEmail)

  useEffect(()=>{
    if(isAuthenticate){
      let existingWishlist = localStorage.getItem("wishlist");
      if(existingWishlist){
        existingWishlist = JSON.parse(existingWishlist)
        const userDataExist = existingWishlist[userEmail]
        if (userDataExist) dispatch(setWishlist({name:userDataExist.name,movies:userDataExist.movies}))
      }
    }

  },[isAuthenticate,userEmail,dispatch])

  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            {isAuthenticate ? (
              <Route element={<Outlet />}>
                <Route path="" element={<Home />} />
                <Route path={`wishlist`} element={<WishList />} />
              </Route>
            ) : (
              <Route path={""} element={<Navigate to={"login"} />} />
            )}
            <Route
              path="login"
              element={isAuthenticate ? <Navigate to={"/"} /> : <LoginPage />}
            />
            <Route path="/404" element={<h1>Not Found</h1>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
};

export default App;
