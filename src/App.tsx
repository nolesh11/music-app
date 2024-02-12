import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { AlbumPage } from "./Pages/AlbumPage/AlbumPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { SongPage } from "./Pages/SongPage/SongPage";
import { ArtistPage } from "./Pages/ArtistPage/ArtistPage";

const routerConfig = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/main",
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
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
