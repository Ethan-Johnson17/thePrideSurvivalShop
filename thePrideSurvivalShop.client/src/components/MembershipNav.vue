<template>
    <div class="container-fluid bg-grey">
      <div class="row">
        <ul class="membership-nav d-flex justify-content-evenly">
          <li>
            <router-link :to="{ name: 'Exercises' }" class="btn text-dark lighten-30 selectable text-uppercase">
              Exercises
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Skills' }" class="btn text-dark lighten-30 selectable text-uppercase">
              Skills
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Achievements' }" class="btn text-dark lighten-30 selectable text-uppercase">
              Achievements
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Challenges' }" class="btn text-dark lighten-30 selectable text-uppercase">
              Challenges
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Groups' }" class="btn text-dark lighten-30 selectable text-uppercase">
              Groups
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Account' }" class="btn text-dark lighten-30 selectable text-uppercase">
              Account
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.membership-nav {
  /* padding-left: 5rem; */
  margin-bottom: 0;
  list-style: none;
}
</style>