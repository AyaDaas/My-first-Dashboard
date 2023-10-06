
<template>
    <div style="height: 1px;" class="container footer">
        <footer class="d-flex flex-wrap container justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <span class="fs-6 ">© 2023 Dashboard Admin</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="#">
                        <IconTwitter></IconTwitter>
                    </a></li>
                <li class="ms-3"><a class="text-muted" href="#">
                        <IconInstagram />
                    </a></li>
                <li class="ms-3"><a class="text-muted" href="#">
                        <IconFacebook></IconFacebook>
                    </a></li>
                <li class="ms-3"><a class="text-muted" href="#">
                        <IconGithub />
                    </a></li>
            </ul>
        </footer>
    </div>
</template>
<style>
.footer {
    transform: translateY(-30px);
}

.fs-6 {
    color: gray;
}
</style>
<script setup>
import IconFacebook from '../icons/IconFacebook.vue';
import IconInstagram from '../icons/IconInstagram.vue';
import IconTwitter from '../icons/IconTwitter.vue';
import IconGithub from '../icons/IconGithub.vue';

</script>