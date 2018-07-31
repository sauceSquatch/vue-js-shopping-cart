<template>
  <div>
    <div class="row"> 
      <div class="col-sm-12 col-md-6">
        <pp-new-pizza></pp-new-pizza>
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>Menu:</h3>
        <table class="table table-hover">
          <thead class="thead-default">
            <tr>
              <th>Item</th>
              <th>Remove from Menu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item Name</td>
              <td><button class="btn btn-danger btn-sm">X</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <h3>Current Orders:</h3>
      <table class="table col-sm-12">
        <thead class="thead-default">
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <div class="order-number">
            <strong><em>Order Number: 1</em></strong>
            <button class="btn btn-danger btn-sm">x</button>
          </div>
          <tr>
            <td>Item Name</td>
            <td><button class="btn btn-danger btn-sm">X</button></td>
          </tr>
          <tr>
            <td>margherita</td>
            <td>9"</td>
            <td>1</td>
            <td>6.95</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <pp-login></pp-login>
      </div>
    </div>
  </div>
</template>

<script>
import NewPizza from './admin/newPizza.vue'
import Login from './login.vue'

export default {
  components: {
    ppNewPizza: NewPizza,
    ppLogin: Login
  },
  data() {
    return {
      name: 'Chris'
    }
  },
  beforeRouteEnter: (to, from, next) => {
    alert("Hi " + this.name)
    next(vm => {
      alert("hi ===" + vm.name)
    })
  }
}
</script>
