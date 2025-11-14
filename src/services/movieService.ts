import axios from "axios";
import type { Movie } from "../types/movie";

const TMBD_BASE_URL = "https://api.themoviedb.org/3";
const TMBD_TOKEN = import.meta.env.VITE_TMDB_TOKEN as string;

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface FetchMoviesParams {
  query: string;
  include_adult?: boolean;
  language?: string;
  primary_release_year?: string;
  page?: number;
  region?: string;
  year?: string;
}

export async function fetchMovies(
  params: FetchMoviesParams
): Promise<FetchMoviesResponse> {
  const url = `${TMBD_BASE_URL}/search/movie`;
  const response = await axios.get<FetchMoviesResponse>(url, {
    params,
    headers: { Authorization: `Bearer ${TMBD_TOKEN}` },
  });
  return response.data;
}
