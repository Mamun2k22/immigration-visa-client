import Blog from "../../components/Blog";
import Home from "../../components/Home";
import Login from "../../components/Login";
import MyReview from "../../components/MyReview";
import Services from "../../components/Services/Services";
import ServicesDetails from "../../components/Services/ServicesDetails";
import SignUp from "../../components/SignUp";
import Main from "../../Layout/Main";
import Footer from "../../Shared/Footer/Footer";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
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
            {
                path: '/servicesdetails/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
        ]
    }
])
export default router;