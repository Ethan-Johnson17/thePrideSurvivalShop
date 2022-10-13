import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class ExercisesService {
  async getAll(query = '') {
    const res = await api.get(query);
    AppState.exercises = res.data
  }

  
}

export const exercisesService = new ExercisesService()