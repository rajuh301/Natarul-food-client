import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import DetailsLayout from "../layout/DetailsLayout";
import ErrorPage from "../pages/ErrorPage";
import Answer from "../pages/Answer";
import ReadAboutChef from "../pages/ReadAboutChef";




const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://natural-food-server-rajuh301.vercel.app/cheap')
            },


            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path:'answer',
                element: <Answer></Answer>
            },

            {
                path: '/about',
                element: <ReadAboutChef></ReadAboutChef>
            }


        ]
    },

    {
        path:'details',
        element: <DetailsLayout></DetailsLayout>,
        children:[

            {
                path: ':id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`https://natural-food-server-rajuh301.vercel.app/cheap/${params.id}`)
            }

       

        ]
    }



])

export default router;