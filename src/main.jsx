import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Login, Protected,Signup ,AllPosts,AddPost,EditPost,Post} from './components/index.js'
import HomePage from './pages/Home.jsx'
import { RouterProvider ,createBrowserRouter} from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>,
      },
      {
        path:'/login',
        element:(
          <Protected authentication={false}>
            <Login/>
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
            <Protected authentication={false}>
                <Signup />
            </Protected>
        ),
    },
    {
        path: "/all-posts",
        element: (
            <Protected authentication>
                {" "}
                <AllPosts />
            </Protected>
        ),
    },
    {
        path: "/add-post",
        element: (
            <Protected authentication>
                {" "}
                <AddPost />
            </Protected>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <Protected authentication>
                {" "}
                <EditPost />
            </Protected>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post />,
    },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

</React.StrictMode>
)
