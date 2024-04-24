import AccessoryPage from "../pages/AccessoryPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import LookBookDetailPage from "../pages/LookBookDetailPage";
import LookBookPage from "../pages/LookBookPage";
import RegisterPage from "../pages/RegisterPage";
import WomenFashionPage from "../pages/WomenFashionPage";

const routes = [
    {
        path: "/",
        page: HomePage,
    },

    {
        path: "/lookbook",
        page: LookBookPage,
    },

    {
        path: "lookbook/:name",
        page: LookBookDetailPage,
    },

    {
        path: "/thoi-trang-nu",
        page: WomenFashionPage,
    },

    {
        path: "/phu-kien",
        page: AccessoryPage,
    },

    {
        path: "customer/account/login",
        page: LoginPage,
    },

    {
        path: "customer/account/register",
        page: RegisterPage,
    },
];

export { routes };
