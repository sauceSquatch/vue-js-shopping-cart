<template>
  <section class="row">
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
              <router-link :to="{name: 'historyLink' }" tag="li"><a class="nav-link">Our History <span class="sr-only">(current)</span></a></router-link>
              <router-link :to="{name: 'contactLink' }" tag="li"><a class="nav-link">Contact Us</a></router-link>
              <router-link :to="{name: 'orderingLink' }" tag="li"><a class="nav-link">Ordering Guide</a></router-link>
              <router-link :to="{name: 'deliveryLink' }" tag="li"><a class="nav-link">delivery</a></router-link>
          </ul>
      </div>
    </nav>
    <router-view></router-view>
  </section>
  
</template>
