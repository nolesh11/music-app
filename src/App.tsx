import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
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
