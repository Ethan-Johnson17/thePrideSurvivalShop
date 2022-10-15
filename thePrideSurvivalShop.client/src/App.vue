<template>
  <header>
    <Navbar />
    <MembershipNav v-show="appState.account.membership"/>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
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
