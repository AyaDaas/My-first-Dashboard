<template>
    <section class="vh-100">
        <div class="container h-100  ">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-11 col-xl-10 ">
                    <div class="card text-black m-3" style="border-radius: 25px">
                        <div class="card-body p-md-5 ">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p style="background: white; background-image:var(--blueGradiant); -webkit-background-clip: text; color: transparent; text-align: center;"
                                        class="h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"> Sign In</p>

                                    <form class="mx-1 mx-md-4" @click="handleSubmit">


                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="input-group mb-3 form-outline flex-fill mb-0">
                                                <div class="input-group-prepend ">
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <IconUser class="my-1" />
                                                    </span>
                                                </div>
                                                <input class="form-control opacity7" placeholder="Email" v-model="email"
                                                    type="email" id="form3Example3c">
                                            </div>

                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="input-group-prepend ">
                                                <span class="input-group-text" id="basic-addon1">
                                                    <IconLock class="my-1" />
                                                </span>
                                            </div>
                                            <div class="form-outline flex-fill mb-0">
                                                <input required placeholder="Password" v-model="password" type="password"
                                                    id="form3Example4c" class="form-control opacity7" />
                                            </div>
                                        </div>




                                        <div class="d-flex justify-content-center  mx-3 mb-3 mb-lg-4">
                                            <button style="background:var(--blueGradiant)" type="button" @click="register"
                                                class="btn w-50  text-light btn-md ">
                                                Sign In
                                            </button>

                                        </div>


                                    </form>
                                </div>
                                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                    <img src="https://img.freepik.com/premium-vector/hand-drawn-community-spirit-illustration_52683-109025.jpg?w=1380"
                                        class="img-fluid" alt="Sample image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { useRouter } from 'vue-router'
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import IconUser from '../../components/icons/IconUser.vue';
import IconLock from '../../components/icons/IconLock.vue';


const router = useRouter()
const email = ref('')
const password = ref('')
const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfuly registerd");
            router.push('/home')
        })
        .catch((err) => {
            console.log(err.code)
        })
}


</script>
