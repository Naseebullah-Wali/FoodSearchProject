<template>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
        <div class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10">
          <p class="w-full text-4xl font-medium text-center leading-snug font-serif">Sign up for your account</p>
          <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">firstName</p>
              <input placeholder="Ivan" type="text" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md" v-model="firstName" />
            </div>
            <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">lastName</p>
              <input placeholder="Ivan" type="text" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md" v-model="lastName"/>
            </div>
            <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
              <input placeholder="123@ex.com" type="text" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md" v-model="email" />
            </div>
            <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Password</p>
              <input placeholder="Password" type="password" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md" v-model="password"/>
            </div>
            <div class="relative">
              <a class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-orange-500
                  rounded-lg transition duration-200 hover:bg-orange-400 ease" @click.prevent="reg">Submit</a>
            </div>
            <div v-show="error" role="alert" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 ">{{ this.errorMsg }}</div>
            <p class="text-center mt-5 mb-0">already have account ?
                    <router-link class="fw-bold text-body hover:text-orange-400 ease " :to="{ name: 'login' }">login Here</router-link>
                  </p>
          </div>
        </div>
	</div>
</div>
</template>
<script>
    import axios from 'axios';
    export default{
        name:"register",
        data(){
            return{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                error: null,
                errorMsg: '',



            }
        },
        methods: {
            async reg() {
            if (
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.email !== "" &&
                this.password !== ""
            ) {
                this.error = false;
                this.errorMsg = "";
                try {
                const response = await axios.post(
                    "http://localhost:900/users",
                    {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    },
                    {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    }
                );
                if (response.status === 200) {
                    this.$router.push({ name: "home" });
                } else {
                    this.error = true;
                    this.errorMsg = "Error registering user. Please try again.";
                }
                } 
                catch (err) {
                    console.log(err)
                    this.error = true;
                    if (err.response) {
                        this.errorMsg = err.response.data.message;
                    } else {
                        this.errorMsg = "Error registering user. Please try again.";
                    }
                }
            } else {
                this.error = true;
                this.errorMsg = "Please fill out all the fields!";
            }
}

        }
    }
</script>