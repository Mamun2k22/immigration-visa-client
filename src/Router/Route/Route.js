import Blog from "../../components/Blog";
import Home from "../../components/Home";
import Main from "../../Layout/Main";
import Footer from "../../Shared/Footer/Footer";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])
export default router;