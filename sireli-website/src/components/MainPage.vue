<template>
  <div class="container-fluid">
    <!-- HERO CONTAINER -->
    <div class="hero-container">
      <!-- NAVBAR START -->

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <!-- <a class="navbar-brand" href="#">Navbar</a> -->

          <button
            class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarTogglerDemo02"
          >
            <ul class="navbar-nav m-auto mb-2 mb-lg-0r">
              <li class="nav-item mx-5">
                <a class="nav-link" href="#">Majutus</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link" href="#">Tegevused</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link" href="#">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- NAVBAR END -->

      <div class="row justify-content-center h-100 mt-3">
        <div class="col-lg-12 slogan-position text-center">
          <img
            class="img-fluid"
            src="static/img/jalutame_320_120_white.svg"
            alt="Jalutame logo"
          />
          <p class="text-bright h1">
            Jalutame teie koeraga, kui te ise ei viitsi.
          </p>
          <button
            class="btn"
            onclick="location.href='kontakt.html#link-anchor';"
          >
            VÕTA ÜHENDUST
          </button>
        </div>
      </div>
    </div>

    <!-- CONETENT SECTION -->
  </div>
</template>

<script>
export default {
  name: "MainPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
