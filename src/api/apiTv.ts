const API_KEY = "a96ecb105f0214953ccc67ed2055f725"
const BASE_URL = "https://api.themoviedb.org/3"

export function getTVs(page: number){ //${Math.floor(Math.random()*10)+1}
    return fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=ko&page=${page}`)
            .then((res)=>res.json())
}
export function getTV(tvId?: string){
    return fetch(`${BASE_URL}/tv/${tvId}?api_key=${API_KEY}&language=ko`)
            .then((res) => res.json())
}
export function getPopularTV(){
    return fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ko&page=1`)
            .then((res) => res.json()) 
}
export function getTOP10TV(){
    return fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=ko&page=1`)
            .then((res) => res.json())
}

export interface IresultsTV {
    'backdrop_path':string ;
    'first_air_date': string ;
    'genre_ids': number[];
    'id': number ;
    'name':  string;
    'original_language': string ;
    'original_name': string ;
    'overview': string ;
    'popularity': number ;
    'poster_path': string ;
    'vote_average': number ;
    'vote_count': number ;
}

export interface IdataTV{
'page': number;
'results': IresultsTV[]
}


export interface IdetailTVresults {
    'adult':boolean;
     'backdrop_path': string;
     'first_air_date': string;
     'genres': {
        "id": number;
        "name": string;
     }[];
     'homepage': string;
     'id': number;
     'in_production': boolean;
     'last_air_date': string;
    //  'last_episode_to_air': object;
     'name': string;
    //  'next_episode_to_air': object;
     'networks': object;
     'number_of_episodes': number;
     'number_of_seasons': number;
    //  'origin_country': object;
     'original_language': string;
     'original_name': string;
     'overview': string;
     'popularity': number;
     'poster_path': string;
    //  'seasons': object;
    //  'spoken_languages': object;
     'status': string;
     'tagline': string;
     'type': string;
     'vote_average': number;
     'vote_count': number;
}




export const genresTV = [
    {
    "id": 10759,
    "name": "?????? & ??????"
    },
    {
    "id": 16,
    "name": "???????????????"
    },
    {
    "id": 35,
    "name": "?????????"
    },
    {
    "id": 80,
    "name": "??????"
    },
    {
    "id": 99,
    "name": "???????????????"
    },
    {
    "id": 18,
    "name": "?????????"
    },
    {
    "id": 10751,
    "name": "??????"
    },
    {
    "id": 10762,
    "name": "Kids"
    },
    {
    "id": 9648,
    "name": "????????????"
    },
    {
    "id": 10763,
    "name": "News"
    },
    {
    "id": 10764,
    "name": "Reality"
    },
    {
    "id": 10765,
    "name": "Sci-Fi & Fantasy"
    },
    {
    "id": 10766,
    "name": "Soap"
    },
    {
    "id": 10767,
    "name": "Talk"
    },
    {
    "id": 10768,
    "name": "War & Politics"
    },
    {
    "id": 37,
    "name": "??????"
    }
    ]