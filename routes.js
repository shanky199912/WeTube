// Global Stuff
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//Users Stuff
const USERS = "/users";
const USER_DETAIL = "/users/:id"; //: it means that values can change -> express automatically interprets it
const EDIT_PROFILE = "/users/edit-profile";
const CHANGE_PASSWORD = "/users/change-password";

//Videos Stuff
const VIDEOS = "/videos";
const UPLOAD = "/videos/upload";
const VIDEO_DETAIL = "/videos/:id/detail";// "videos/1/detail";
const EDIT_VIDEO = "/videos/:id/edit"; // "videos/1/edit";
const DELETE_VIDEO = "/videos/:id/delete"; // "videos/1/delete";

const routes = {

    home:HOME,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    search:SEARCH,
    users:USERS,
    userDetail:USER_DETAIL,
    editProfile:EDIT_PROFILE,
    changePassword:CHANGE_PASSWORD,
    videos:VIDEOS,
    upload:UPLOAD,
    videoDetail:VIDEO_DETAIL,
    editVideo:EDIT_VIDEO,
    deleteVideo:DELETE_VIDEO
};

export default routes;



// Global
// const HOME = "/";
// const JOIN = "/join";
// const LOGIN = "/login";
// const LOGOUT = "/logout";
// const SEARCH = "/search";

// // Users

// const USERS = "/users";
// const USER_DETAIL = "/:id";
// const EDIT_PROFILE = "/edit-profile";
// const CHANGE_PASSWORD = "/change-password";
// const ME = "/me";

// // Videos

// const VIDEOS = "/videos";
// const UPLOAD = "/upload";
// const VIDEO_DETAIL = "/:id";
// const EDIT_VIDEO = "/:id/edit";
// const DELETE_VIDEO = "/:id/delete";

// // Github

// const GITHUB = "/auth/github";
// const GITHUB_CALLBACK = "/auth/github/callback";

// // Facebook

// const FB = "/auth/facebook";
// const FB_CALLBACK = "/auth/facebook/callback";

// // API

// const API = "/api";
// const REGISTER_VIEW = "/:id/view";
// const ADD_COMMENT = "/:id/comment";

// const routes = {
//   home: HOME,
//   join: JOIN,
//   login: LOGIN,
//   logout: LOGOUT,
//   search: SEARCH,
//   users: USERS,
//   userDetail: id => {
//     if (id) {
//       return `/users/${id}`;
//     } else {
//       return USER_DETAIL;
//     }
//   },
//   editProfile: EDIT_PROFILE,
//   changePassword: CHANGE_PASSWORD,
//   videos: VIDEOS,
//   upload: UPLOAD,
//   videoDetail: id => {
//     if (id) {
//       return `/videos/${id}`;
//     } else {
//       return VIDEO_DETAIL;
//     }
//   },
//   editVideo: id => {
//     if (id) {
//       return `/videos/${id}/edit`;
//     } else {
//       return EDIT_VIDEO;
//     }
//   },
//   deleteVideo: id => {
//     if (id) {
//       return `/videos/${id}/delete`;
//     } else {
//       return DELETE_VIDEO;
//     }
//   },
//   gitHub: GITHUB,
//   githubCallback: GITHUB_CALLBACK,
//   me: ME,
//   facebook: FB,
//   facebookCallback: FB_CALLBACK,
//   api: API,
//   registerView: REGISTER_VIEW,
//   addComment: ADD_COMMENT
// };

// export default routes;