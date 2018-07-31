<template>
  <div class="row">
    <form action="" >
      <div class="form-group">
      <label>email address</label>
      <input type="email" class="form-control" id="email" placeholder="enter email">
    </div>
    <div class="form-group">
      <label for="">password</label>
      <input type="password" class="form-control" id="password" placeholder="enter password">
    </div>
    <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign In</button>
    <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign Out</button>
    </form>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  methods: {
    signIn() {
      var email = document.getElementById('email').value,
          password = document.getElementById('password').value;
      
      Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
       var errorCode = error.coode;
       var errorMessage = error.message;
       if(errorCode === "auth/wrong-password") {
         alert("wrong password")
       } else {
         alert(errorMessage);
       }
      });
    },
    signOut() {
      Firebase.auth().signOut().then(function() {
        alert("logged out");
      }).catch(function(error) {
        alert("error.")
      })
    }
  }
}
</script>
