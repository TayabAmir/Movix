import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjYwMWQwZDY3NjMyZGFmMTE5YTRkODUxZmZiMWZlOSIsInN1YiI6IjY1ZGRmYjJkM2ZmMmRmMDE4NzBiOGI0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.94rII4lLHp2dwTb-2Qf3uGsccrU4RiuY1kb5RsQCDbM'

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params) => {
    try {
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(err);   
        return err;
    }
}