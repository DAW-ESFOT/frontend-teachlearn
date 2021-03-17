const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/registro",
  CONTACT: "/contact",
  POLITICS: "/politics",
  VISION: "/vision-mission",
  // USERS: "/usuarios",
  // USERS_ID: `/usuario/:id`,
  ABOUT: "/about",
  SUBJECTS: "/materias",
};

const privateRoutes = {
  HOME: "/",
  PROFILE: "/profile",
  SCHEDULE: "/addTutorial",
  EDITPROFILE: "/editprofile",
  ADDTUTORIA: "/addTutorial",
  ADDSUBJECT: "/addSubject",
  ADDCOMMENT: "/newcomment",
  // ARTICLE_ID: "/articulo/:id",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
