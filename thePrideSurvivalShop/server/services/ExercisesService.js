import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class ExercisesService {
  async getAll(query = {}) {
    const exercises = await dbContext.Exercises.find(query)
    return exercises
  }

  async getById(id) {
    const exercise = await dbContext.Exercises.findById(id);
    if (!exercise) {
      throw new BadRequest("Cannot find that exercise")
    }
    return exercise
  }

  async addExercise(body) {
    const exercise = await dbContext.Exercises.create(body)
    return exercise;
  }

  async edit(id, body) {
    await this.getById(id)
    const exercise = await dbContext.Exercises.findByIdAndUpdate(id, body, { new: true})
    return exercise;
  }
}

export const exercisesService = new ExercisesService()