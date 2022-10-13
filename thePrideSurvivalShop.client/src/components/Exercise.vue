<template>
    <div class="row">
      <div class="col-12">
        <h4>{{exercise.exerciseName}}</h4>
      </div>
      <div class="col-12">
        <p>{{exercise.reps}}</p>
      </div>
      <div class="col-5">
        <iframe width="560" height="315" :src="exercise.videoUrl" title="YouTube video player"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    exercise: {
      type: Object
    }
  },
  setup(props) {

    return {

    }
  }
}
</script>

<style>

</style>