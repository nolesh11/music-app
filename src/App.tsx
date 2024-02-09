import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { AlbumPage } from "./Pages/AlbumPage/AlbumPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { SongPage } from "./Pages/SongPage/SongPage";

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
    path: "/song-details",
    element: <SongPage />,
  },
  {
    path: "/album-details/:albumId",
    element: <AlbumPage />,
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
