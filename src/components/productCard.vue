<template>
  <div class="body col-md-4">
    <router-link
      class="router-text"
      :to="{ name: 'productCard', params: { id: product.product_id } }"
    >
      <div class="card m-3" style="width: 18rem">
        <img v-bind:src="product.image" class="img-fluid" />
        <div class="card-body">
          <p class="card-text-product">
            {{ product.name }}
          </p>

          <div class="wrap col-2">
            <button class="button btn btn-dark" type="submit">View</button>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style scoped>
.row[data-v-67abbd7e] {
  margin-top: 10px;
  margin-left: 0rem;
}
.body {
  padding-left: 6.5rem;
}
.button {
  width: 16rem;
  height: -1px;
  margin-top: 1rem;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.card {
  width: 100%;
  background-color: rgba(15, 2, 2, 0);
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;

  /* background-clip: border-box; */
  border: 1px solidrgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.button:hover {
  background-color: #2ee59d;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
.img-fluid {
  width: 100%;
  height: 15rem;
  border-radius: 10px;
  transition: 0.2 linear;
}
.img-fluid:hover {
  transform: scale(1.1);
}
.router-text {
  text-decoration: none;
  color: black;
}
/* From uiverse.io by @fanishah */
.gegga {
  width: 0;
}

.snurra {
  filter: url(#gegga);
}

.stopp1 {
  stop-color: #f700a8;
}

.stopp2 {
  stop-color: #ff8000;
}

.halvan {
  animation: Snurra1 10s infinite linear;
  stroke-dasharray: 180 800;
  fill: none;
  stroke: url(#gradient);
  stroke-width: 23;
  stroke-linecap: round;
}

.strecken {
  animation: Snurra1 3s infinite linear;
  stroke-dasharray: 26 54;
  fill: none;
  stroke: url(#gradient);
  stroke-width: 23;
  stroke-linecap: round;
}

.skugga {
  filter: blur(5px);
  opacity: 0.3;
  position: absolute;
  transform: translate(3px, 3px);
}

@keyframes Snurra1 {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -403px;
  }
}
</style>
