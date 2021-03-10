
const publicRoutes = {
    LOGIN: "/login",
    REGISTER: "/registro",
    CONTACT:"/contact",
    POLITICS:"/politics",
    VISION:"/vision-mission",
    // USERS: "/usuarios",
    // USERS_ID: `/usuario/:id`,
    ABOUT: "/about",
};

const privateRoutes = {
    HOME: "/",
    // ARTICLE_ID: "/articulo/:id",
};

const Routes = {
    ...publicRoutes,
    ...privateRoutes,
};
export default Routes;