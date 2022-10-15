<template>
  <div class="container-fluid" v-show="!account.membership">
    <div class="row d-flex justify-content-center mb-5">
      <div class="col-12 text-center my-2">
        <h2>Memberships</h2>
      </div>
      <div class="col-5 elevation-4 p-3 border border-grey rounded membershipCard">
        <div class="row">
          <div class="col-12">
            <h5>Enjoy a liftetime membership to The Pride. Each membership includes: </h5>
          </div>
          <div class="col-12">
            <ul>
              <li>10% discount on all gear, 15-20% discount on select gear</li>
              <li>Participation in The Pride groups and challenges</li>
              <li>Access to instructional videos and posts for exercises and skills</li>
              <li>Coaching on goals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-evenly">
      <div class="col-3 elevation-4 p-3 border border-grey rounded membershipCard selectable" @click="selectMembershipType('lifetime')">
        <div class="row">
          <div class="col-12">
            <h4>Lifetime Membership</h4>
            <h6>One time payment of $149.99</h6>
          </div>
        </div>
      </div>
      <div class="col-3 elevation-4 p-3 border border-grey rounded membershipCard selectable" @click="selectMembershipType('yearly')">
        <div class="row">
          <div class="col-12">
            <h4>Yearly Membership</h4>
            <h6>Yearly payment of $49.99</h6>
          </div>
        </div>
      </div>
      <div class="col-3 elevation-4 p-3 border border-grey rounded membershipCard selectable" @click="selectMembershipType('trial')">
        <div class="row">
          <div class="col-12">
            <h4>One Month Trial Membership</h4>
            <h6>One time payment of $9.99</h6>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid" v-show="account.membership">
    <div class="row">
      <div class="col-12">
        <h2>Welcome, {{account.name}}!</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { accountService } from '../services/AccountService';
import { shopService } from '../services/ShopService';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';

export default {
  setup() {
    let path = window.location.pathname;
    

    return {
      account: computed(() => AppState.account),
      path,

      async selectMembershipType(choice) {
        let message = '';
        if (choice != 'lifetime') {
          message = 'You can always upgrade or cancel later.'
        }
        const yes = await Pop.confirm(`Would you like to join The Pride with the ${choice} membership?`, message)
        if (!yes) { return }
        await accountService.update(choice)
        Pop.toast(`Joined! Welcome to The Pride!`)
      }
    }
  }
}
</script>

<style>
.membershipCard {
  background-color: #dbd8d7
}
</style>