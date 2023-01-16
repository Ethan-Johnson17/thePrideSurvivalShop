<template>
  <header>
    <Navbar />
    <MembershipNav v-show="appState.account.membership"/>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
  </footer>
</template>

<script>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppState } from './AppState';

export default {
  name: 'App',
  setup() {
    const route = useRoute()
    const router = useRouter()
    return {
      appState: computed(() => AppState),
      route
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
