import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { AlbumPage } from "./Pages/AlbumPage/AlbumPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { SongPage } from "./Pages/SongPage/SongPage";
import { ArtistPage } from "./Pages/ArtistPage/ArtistPage";
import { useDispatch } from "react-redux";
import { fetchUserDataMe } from "./store/slices/userSlices";
import { useEffect } from "react";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";

const routerConfig = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/song-details/:songId",
    element: <SongPage />,
  },
  {
    path: "/album-details/:albumId",
    element: <AlbumPage />,
  },
  {
    path: "/artist-details/:artistId",
    element: <ArtistPage />,
  },
]);

const App: React.FC = () => {
  const dispatch: ThunkDispatch<any, any, Action> = useDispatch(); //eslint-disable-line
  // const isAuth = useSelector(selectIsAuth)

  useEffect(() => {
    dispatch(fetchUserDataMe())
  }, [dispatch])

  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
