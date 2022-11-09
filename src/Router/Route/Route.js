import Blog from "../../components/Blog";
import Home from "../../components/Home";
import Services from "../../components/Services/Services";
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
            {
                path: '/services',
                element: <Services></Services>
            },
        ]
    }
])
export default router;