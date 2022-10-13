import { exercisesService } from "../services/ExercisesService";
import BaseController from "../utils/BaseController";


export class ExercisesController extends BaseController {
  constructor() {
    super('api/exercises')
    this.router
    .get('', this.getAll)
    .get('/:id', this.getById)
    .post('', this.addExercise)
    .put('/:id', this.edit)
  }

  async getAll(req, res, next) {
    try {
      const query = req.query;
      const exercises = await exercisesService.getAll(query);
      return res.send(exercises)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const exercise = await exercisesService.getById(req.params.id);
      return res.send(exercise)
    } catch (error) {
      next(error)
    }
  }

  async addExercise(req, res, next) {
    try {
      req.body.id = req.params.id;
      const exercise = await exercisesService.addExercise(req.body)
      return res.send(exercise)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      const id = req.params.id
      const exercise = req.body
      exercise.id = id
      const newExercise = await exercisesService.edit(id, exercise)
      return res.send(newExercise)
    } catch (error) {
      next(error)
    }
  }
}