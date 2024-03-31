import {createBrowserRouter} from "react-router-dom";
import {Home} from "./components/010_Home/Home.jsx";
import {CounterRedux} from "./components/007_CounterRedux/CounterRedux.jsx";
import {PostRedux} from "./components/008_PostRedux/PostRedux.jsx";
import {PostForm} from "./components/008_PostRedux/PostForm/PostForm.jsx";
import {NotFound} from "./components/010_NotFound/NotFound.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/counter",
    element: <CounterRedux />,
  },
  {
    path: "/posts",
    element: <PostRedux />,
    children: [
      {
        path: "post/:postId",
        element: <PostForm />,
      },
    ]
  },
  {
    path: "/posts/:postId",
    element: <PostForm />,
  }
]);