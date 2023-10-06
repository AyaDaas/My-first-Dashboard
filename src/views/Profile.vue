
<template>
    <section>
        <div class="head">
            <p class="title">Profile</p>
        </div>

        <div class="container-fluid content">
            <div class="row">
                <div class="col-lg-6 ">
                    <Card hight="true">
                        <template #body>
                            <div class=" text-center ">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5_fgFujqsKyYMTe3r5dk7S9OkdoDq9lTgQ&usqp=CAU"
                                    alt="avatar" class="rounded-circle img-fluid" style="width: 150px;">
                                <h5 class="my-3">Aya Daas</h5>
                                <p class="text-muted mb-1">Frontend Developer</p>
                                <p class="text-muted mb-4">Amman Jordan</p>
                            </div>
                        </template>
                    </Card>
                    <Card hight="true">
                        <template #header> Contact Info </template>
                        <template #body>
                            <ul class=" list-group list-group-flush rounded-3 mt-4 mb-5">
                                <li class=" d-flex justify-content-around align-items-center ">

                                    <i class="" style="color: #3b5998;">
                                        <Iconfacebook></Iconfacebook>
                                    </i>
                                    <p class="mb-0">@facebook</p>
                                </li>
                                <hr class="divider">

                                <li class=" d-flex justify-content-around align-items-center ">
                                    <i style="color: #333333;">
                                        <IconGithub></IconGithub>
                                    </i>
                                    <p class="mb-0">@github-link </p>
                                </li>
                                <hr class="divider">

                                <li class=" d-flex justify-content-around align-items-center ">
                                    <i class="" style="color: #55acee;">
                                        <IconTwitter></IconTwitter>
                                    </i>
                                    <p class="mb-0">@twitter-link</p>
                                </li>
                                <hr class="divider">

                                <li class=" d-flex justify-content-around align-items-center mb-4">
                                    <i class="" style="color: #ac2bac;">
                                        <Iconinstagram></Iconinstagram>
                                    </i>
                                    <p class="mb-0">@instagram</p>
                                </li>

                            </ul>
                        </template>
                    </Card>
                </div>


                <div class="col-lg-6">
                    <Card hight="true">
                        <template #header>Personal Info</template>
                        <template #body>
                            <div class="row text-center mt-4">
                                <div class="col-sm-6">
                                    <p class="mb-0">Full Name</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="text-muted mb-0">Aya Daas</p>
                                </div>
                            </div>
                            <hr class="divider">
                            <div class="row text-center">
                                <div class="col-sm-6">
                                    <p class="mb-0">Email</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="text-muted mb-0">example@example.com</p>
                                </div>
                            </div>
                            <hr class="divider">
                            <div class="row text-center">
                                <div class="col-sm-6">
                                    <p class="mb-0">Phone</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="text-muted mb-0">+962 7 1234 1234</p>
                                </div>
                            </div>
                            <hr class="divider">
                            <div class="row text-center">
                                <div class="col-sm-6">
                                    <p class="mb-0">Mobile</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="text-muted mb-0">+962 7 1234 1234</p>
                                </div>
                            </div>
                            <hr class="divider">
                            <div class="row text-center">
                                <div class="col-sm-6">
                                    <p class="mb-0">Address</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="text-muted mb-0">Amman Jordan</p>
                                </div>
                            </div>

                        </template>
                    </Card>


                    <div class="col-md-12">
                        <div class="  mb-4 mb-md-0">
                            <Card hight="true">
                                <template #header>Percent</template>
                                <template #body>
                                    <Chart9></Chart9>
                                </template>
                            </Card>
                        </div>

                    </div>



                </div>
                <div class=" ">
                    <div class="col-md-12">
                        <div class="  mb-md-0">
                            <Card hight="true">
                                <template #header>Project Status</template>
                                <template #body>
                                    <div class="card-body">

                                        <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 80%"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 72%"
                                                aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 89%"
                                                aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 55%"
                                                aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                                        <div class="progress rounded mb-2" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 66%"
                                                aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </template>

                            </Card>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import IconGithub from '../components/icons/IconGithub.vue';
import IconTwitter from '../components/icons/IconTwitter.vue';
import Iconfacebook from '../components/icons/iconfacebook.vue';
import Iconinstagram from '../components/icons/iconinstagram.vue';
import Chart9 from '../components/chart/Chart9.vue'

</script>
<style scoped>
.head {
    height: 140px;
    margin-left: -40px;
    background: linear-gradient(to right, #0254a0, #0492ca);
    margin-top: -50px;
    transform: translateX(20px);
}

.title {
    color: white;
    padding: 50px;
    font-size: 22px;

}

.content {
    transform: translateY(-40px);
    margin-left: -10px;
}

.divider {
    color: rgb(211, 215, 218);
    opacity: .5;
    width: 90%;
    align-items: center;
    text-align: center;
    margin-left: 30px;

}
</style>
 
