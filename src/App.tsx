import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { AlbumPage } from "./Pages/AlbumPage/AlbumPage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
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
