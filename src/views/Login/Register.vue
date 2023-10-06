<template>
    <section class="vh-100">
        <div class="container-fluid h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-8 col-md-7 col-sm-9 col-xl-7">
                    <div class="card text-black m-3"
                        style=" border-radius: 25px;box-shadow:.1px .3px .3px .1px rgb(0, 14, 43) ;">
                        <div class="card-body p-md-5  ">
                            <p style="
                        background: white;
                        background-image: var(--blueGradiant);
                        -webkit-background-clip: text;
                        color: transparent;
                        text-align: center;
                      " class="h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                Sign up
                            </p>
                            <form class="mx-1 mx-md-4 " @submit.prevent="register">
                                <div class="d-flex flex-row align-items-center mb-4">
                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                        <div class="d-flex justify-content-between">
                                            <IconPerson></IconPerson>
                                            <input v-model="fullName" required placeholder="Full Name" type="text"
                                                id="form3Example1c" class="form-control opacity7" />

                                        </div>

                                        <span v-if="fullNameValid">Full Name is required.</span>
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-4">
                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                        <div class="d-flex justify-content-between">
                                            <IconEmail></IconEmail>
                                            <input v-model="email" required placeholder="Email" type="email"
                                                id="form3Example3c" class="form-control opacity7" />
                                        </div>
                                        <span v-if="oldEmail">Email is already registered. Please use a different
                                            email.</span>
                                        <span v-if="emailMessage">Invalid email address.</span>
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-4">
                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                        <div class="d-flex justify-content-between">
                                            <IconLockFill></IconLockFill>
                                            <input minlength="10" v-model="password" required placeholder="Password"
                                                type="password" id="form3Example4c" class="form-control opacity7" />
                                        </div>
                                        <span v-if="passwordMessage">Password must be more than 10
                                            characters.</span>
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-4">
                                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                        <div class="d-flex justify-content-between">
                                            <IconKey></IconKey>
                                            <input minlength="10" v-model="confirmPassword" required
                                                placeholder="Confirm Your Password" type="password" id="form3Example4cd"
                                                class="form-control opacity7" />
                                        </div>
                                        <span v-if="passwordMatch">Passwords must match.</span>
                                    </div>
                                </div>

                                <div class="form-check d-flex justify-content-start mx-4 mb-3">

                                    <input v-model="agreedToTerms" required class="form-check-input  me-3 opacity7"
                                        type="checkbox" value="" id="form2Example3c" />
                                    <label class="form-check-label fs-7" for="form2Example3">
                                        I agree to all statements in
                                        <a style="color: var(--greenbold);" href="#!">Terms of service</a>
                                        <br>
                                        <!-- <span v-if="agreedToTerms">You must agree to the Terms of
                                                    Service.</span> -->
                                    </label>

                                </div>


                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button style="background: var(--blueGradiant)" type="submit"
                                        class="btn btn-primary text-light btn-md w-50 btn-outline-info">
                                        Register
                                    </button>
                                </div>

                                <div class="form-check d-flex justify-content-start mb-3">
                                    <div class="f-6 fw-bold">
                                        You already have an Account ?
                                        <router-link to="/sign-in" class="mx-2 f-7">Sign In</router-link>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import IconUser from '../../components/icons/IconUser.vue';
import IconPerson from '../../components/icons/IconPerson.vue';
import IconEmail from '../../components/icons/IconEmail.vue';
import IconLockFill from '../../components/icons/IconLockFill.vue';
import IconKey from '../../components/icons/IconKey.vue';

const router = useRouter();
const email = ref('');
const password = ref('');
const fullName = ref('');
const fullNameValid = ref(false);
const emailMessage = ref(false);
const oldEmail = ref(false);
const passwordMessage = ref(false);
const confirmPassword = ref('');
const agreedToTerms = ref(false);
const passwordMatch = ref(false)


const confirm = () => {
    if (password.value === confirmPassword.value) {
        passwordMatch.value = false;
        return true; // Passwords match
    } else {
        passwordMatch.value = true;
        return false; // Passwords don't match
    }
}


const register = () => {
    if (confirm()) {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then(() => {
                console.log('Successfully registered');
                router.push('/home');
            })
            .catch((err) => {
                console.log(err.code);
                if (err.code === 'auth/email-already-in-use') {
                    oldEmail.value = true;
                }
            });
    }
};
</script>
  
<style scoped>
span {
    color: brown;
    font-weight: bold;
    font-size: 12px;
    margin-left: 12px;
}

.f-6 {
    font-size: 13px
}

.f-7 {
    font-size: 15px;
    color: rgb(5, 5, 147);

}

.f-7:hover {
    color: blue;

}

.background-image {


    background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: .9;
    /* Adjust the opacity value as needed */
}
</style>
  