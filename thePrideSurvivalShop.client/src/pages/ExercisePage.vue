<template>
  <div class="container-fluid">
    <div class="about row p-5">
      <div class="col-12">
        <h1>All Exercises</h1>
      </div>
      <div class="col-12">
        <h2>Warm-Ups</h2>
      </div>
      <div class="col-12" v-for="e in exercises" :key="e.id">
      <exercise v-if="e.type === 'warm-up'" :exercise="e"></exercise></div>
    </div>

    <div class="about row p-5">
      <div class="col-12">
        <h2>Combo</h2>
      </div>
      <div class="col-12" v-for="e in exercises" :key="e.id">
      <exercise v-if="e.type === 'combo'" :exercise="e"></exercise></div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { exercisesService } from '../services/ExercisesService'
export default {
  name: 'AboutPage',
  setup() {
    onMounted(async () => {
      try {
        await exercisesService.getAll('api/exercises')
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      exercises: computed(() => AppState.exercises)
    }
    }
}
</script>
