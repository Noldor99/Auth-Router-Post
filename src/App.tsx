import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Mainlayout from "./components/Mainlayout/Mainlayout";
import NotFoundBlock from "./components/Mainlayout/NotFoundBlock/NotFoundBlock";
import Auth from "./page/Auth";
import Home from "./page/Home";
import Posts from "./page/Posts";
import Cart from "./page/Cart";
import UserDetails from "./page/UserDetails";
import MockDetails from "./page/MockDetails";

const App = () => {


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="Auth-Router-Post" element={<Auth />} />
        <Route path="userdetails/:id" element={<UserDetails />} />
        <Route path="mockdetails/:id" element={<MockDetails />} />
 
        <Route path="Auth-Router-Post/home" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="cart/:id" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFoundBlock />} />
      </Routes>
    </Suspense>
  )
}

export default App