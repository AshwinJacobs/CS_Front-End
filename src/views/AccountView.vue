<template>
  <div id="main" v-if="user" class="account container d-flex justify-content-center align-items-center flex-column">
  <h2 class="pb-5">MANAGE YOUR ACCOUNT</h2>
    <div id="UserCard" class="row w-100">
      <div class="col-md-6 d-flex justify-content-center gap-5 align-items-center flex-column">
        <i id="userIcon" class="fa-solid fa-circle-user"></i>
        <div class="d-flex flex-column align-items-center">
          <button data-bs-toggle="modal" data-bs-target="#Logout" class="btn btn-grad">Log Out</button>
          <button data-bs-toggle="modal" data-bs-target="#userDelete" class="btn btn-grad">Delete Your Account</button>
        </div>
        <DeleteAccountModal/>
        <LogOutModal/>
      </div>
      <div class="col-md-6">
        <form @submit="updateUser">
          <div class="row mb-3"></div>
            <div class="col-lg-6 mb-3 mt-4 mt-md-0">
              <label for="full_name" class="form-label">full_name</label>
              <input
                v-model="full_name"
                type="text"
                class="form-control"
                name="full_name"
                id="full_name"
                @input="changefull_nameColor"
              />
            </div>
         
          <div class="mb-3">
            <label for="billing_address" class="form-label">billing_address</label>
            <input
              v-model="billing_address"
              type="text"
              class="form-control"
              name="billing_address"
              id="billing_address"
              @input="changebilling_addressColor"
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label"
              >Phone Number</label
            >
            <input
              v-model="phone"
              type="number"
              class="form-control"
              name="phone"
              id="phone"
              @input="changephoneColor"
            />
          </div>
          <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                name="email"
                id="email"
                @input="changeEmailColor"
              />
          </div>
         
          <div>
            <button type="submit" class="w-100 mx-auto btn btn-grad">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div id="main" v-else class="account container d-flex justify-content-center align-items-center gap-4 flex-column">
    <h1>There is No User Logged in</h1>
    <router-link to="/login">
    <button class="btn btn-grad">Return to Login Page</button>
    </router-link>
  </div>
</template>

<script>


export default {
  components:{
   
  },
  data(){
    return{
      id: null,
      full_name: null,
      billing_address: null,
      phone: null,
      email: null,
      password: null,
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  async mounted(){
    if(this.user){
      this.id = this.$store.state.user.id;
      this.full_name = this.$store.state.user.full_name;
      this.billing_address = this.$store.state.user.billing_address;
      this.phone = this.$store.state.user.phone;
      this.email = this.$store.state.user.email;
    }
    window.scrollTo(0,0);
  },
  methods:{
    changefull_nameColor(){
      if(this.full_name != this.$store.state.user.full_name){
        document.getElementById('full_name').style.background = "#d99";
      }else{
        document.getElementById('full_name').style.background = "#FFF";
      }
    },
   
    changebilling_addressColor(){
      if(this.billing_address != this.$store.state.user.billing_address){
        document.getElementById('billing_address').style.background = "#d99";
      }else{
        document.getElementById('billing_address').style.background = "#FFF";
      }
    },
    changeEmailColor(){
      if(this.email != this.$store.state.user.email){
        document.getElementById('email').style.background = "#d99";
      }else{
        document.getElementById('email').style.background = "#FFF";
      }
    },
    changephoneColor(){
      if(this.phone != this.$store.state.user.phone){
        document.getElementById('phone').style.background = "#d99";
      }else{
        document.getElementById('phone').style.background = "#FFF";
      }
    },
    updateUser(e){
      e.preventDefault();
      let newUser = {
        id: this.id,
        full_name: this.full_name,
        billing_address: this.billing_address,
        email: this.email,
        phone: this.phone,
        userPassword: "John123"
      }
      this.$store.dispatch('updateUser',newUser)
    }
  }
};
</script>

<style scoped>
#userIcon {
  font-size: 12rem;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-top: 10rem;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
}
.pb-5 {
    padding-bottom: 5rem!important;
}
#UserCard{
  box-shadow: 0 0 14px #eee;
  padding: 50px; 
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #e52d27 0%,
    #b31217 51%,
    #e52d27 100%
  );
  margin: 10px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 12px;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>
