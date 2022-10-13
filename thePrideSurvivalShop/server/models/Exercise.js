import { Schema } from "mongoose";

export const ExerciseSchema = new Schema({
  exerciseName: { type: String, required: true },
  reps: { type: String, required: true},
  videoUrl: { type: String, required: true},
  type: { type: String, required: true, enums: ['warm-up', 'emphasis', 'combo']},
}, { timestamps: true, toJSON: { virtuals: true } })
