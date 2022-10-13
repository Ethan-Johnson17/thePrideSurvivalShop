<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <h2>Subscriptions</h2>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <h5>Enjoy a liftetime membership to The Pride. Each subscription includes: </h5>
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
    <div class="row">
      <div class="col-4">
        <div class="row">
          <div class="col-12">
            <h4>Lifetime Membership</h4>
            <h6>One time payment of $149.99</h6>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="row">
          <div class="col-12">
            <h4>Yearly Membership</h4>
            <h6>Yearly payment of $49.99</h6>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="row">
          <div class="col-12">
            <h4>Trial Membership</h4>
            <h6>One time payment of $9.99, lasts on month from date of sign-up</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    let path = window.location.pathname;
    console.log(path)
    return {
      path
    }
  }
}
</script>

<style>

</style>