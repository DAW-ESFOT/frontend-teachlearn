
const publicRoutes = {
    LOGIN: "/login",
    REGISTER: "/registro",
    CONTACT:"/contact",
    POLITICS:"/politics",
    VISION:"/vision-mission",
    // USERS: "/usuarios",
    // USERS_ID: `/usuario/:id`,
    ABOUT: "/about",
    SUBJECTS:'subjects',
};

const privateRoutes = {
    HOME: "/",
    PROFILE: '/profile',
    // ARTICLE_ID: "/articulo/:id",
};

const Routes = {
    ...publicRoutes,
    ...privateRoutes,
};
export default Routes;