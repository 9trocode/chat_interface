<template>
  <div class="container">
    <div class="row mt-5" v-for="n in 4" :key="n">
      <div class="col-4">
        <div class="card">
          <img
            class="card-img-top"
            src="https://ak0.picdn.net/shutterstock/videos/33322030/thumb/1.jpg"
            alt="Card image cap"
          >
          <div class="card-body">
            <small>xyz</small>
            <h5 class="card-title">Card title</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-secondary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <img
            class="card-img-top"
            src="https://ak0.picdn.net/shutterstock/videos/33322030/thumb/1.jpg"
            alt="Card image cap"
          >
          <div class="card-body">
            <small>xyz</small>
            <h5 class="card-title">Card title</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-secondary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <img
            class="card-img-top"
            src="https://ak0.picdn.net/shutterstock/videos/33322030/thumb/1.jpg"
            alt="Card image cap"
          >
          <div class="card-body">
            <small>xyz</small>
            <h5 class="card-title">Card title</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-secondary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style>
.card {
  border: 0px;
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.09);
}
</style>
