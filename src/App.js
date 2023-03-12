import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./Redux/Store";
const Home = React.lazy(() => import("./Pages/Home"));
const UserGallery = React.lazy(() => import("./Pages/UserDetails/UserGallery"));
const UserPosts = React.lazy(() => import("./Pages/UserDetails/UserPosts"));
const UserProfile = React.lazy(() => import("./Pages/UserDetails/UserProfile"));
const UserTodo = React.lazy(() => import("./Pages/UserDetails/UserTodo"));

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/profile" element={<UserProfile />} />
          <Route path="/:id/posts" element={<UserPosts />} />
          <Route path="/:id/gallery" element={<UserGallery />} />
          <Route path="/:id/todo" element={<UserTodo />} />
        </Routes>
      </Suspense>
    </Provider>
  </BrowserRouter>
);

export default App;
