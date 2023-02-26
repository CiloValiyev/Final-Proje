import MainRouter from "../components/MainRouter";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Current from "../pages/current/Current";
import Home from "../pages/home/Home";
import Pages from "../pages/pages/Pages";
import Services from "../pages/services/Services";
import BlogDetails from "../pages/blog/BlogDetails"
import AboutUs from "../pages/pages/AboutUs";
import Faq from "../pages/pages/Faq";
import CommingSoon from "../pages/pages/CommingSoon";
import NotFound from "../pages/pages/NotFound";
import Apply from "../pages/current/Apply";
const ROUTES = [
    {
        path: "",
        element: <MainRouter />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "pages",
                element: <Pages />
            },
            {
                path: "pages/aboutus",
                element: <AboutUs />
            },
            {
                path: "pages/faq",
                element: <Faq />
            },
            {
                path: "pages/commingsoon",
                element: <CommingSoon />
            },
            {
                path: "*",
                element: <NotFound />
            },

            {
                path: "services",
                element: <Services />
            },
            {
                path: "current",
                element: <Current />
            },
            {
                path: "apply",
                element: <Apply />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "blogdetails",
                element: <BlogDetails />
            },
            {
                path: "contact",
                element: <Contact />
            },
        ]
    }
]
export default ROUTES;