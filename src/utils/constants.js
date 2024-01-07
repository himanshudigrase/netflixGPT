export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_IMAGE = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";
export const BG_IMAGE="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '
      + import.meta.env.VITE_TMDB_API_KEY
    }
  };

export const MOVIES_API = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const POPULAR_MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export const TOP_RATED_MOVIES_API = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

export const UPCOMING_MOVIES_API = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hin", name: "Hindi" },
  { identifier: "mar", name: "Marathi" },
];