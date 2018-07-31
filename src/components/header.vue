<template>
    <header class="row">
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a href="/" class="navbar-brand">PIZZA PLANET</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <router-link :to="{name: 'homeLink' }" tag="li"><a class="nav-link">Home <span class="sr-only">(current)</span></a></router-link>
                    <router-link :to="{name: 'menuLink' }" tag="li"><a class="nav-link">menu</a></router-link>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    
}
</script>

<style>
    header {
        margin-bottom: 20px;
    }
    .navbar-brand {
        font-size: 1.5em;
    }
</style>

