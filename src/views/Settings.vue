<template>
    <div style="margin-bottom: 170px; margin-left: -10px" class="container-fluid container-p-y">
        <div>
            <Wrapper>
                <template></template>
                <template #body>
                    <Tabs :titles="['General', 'Change password', 'Info', 'Social links', 'Notifications']">
                        <!-- Tab 1 content -->
                        <template v-slot:tab-content-1>
                            <div class="tab-pane fade active show" id="account-general">
                                <div class="card-body">
                                    <div class="d-flex flex-column">
                                        <img class="profile-pic"
                                            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
                                        <i class="add"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg></i>
                                        <input class="file-image" type="file" accept="image/*" />
                                    </div>
                                </div>
                                <div class="card-body">
                                    <InputFeild type="email" label="Email" placeholder="Enter you email"></InputFeild>
                                    <InputFeild type="text" label="Fullname" placeholder="Enter you Name"></InputFeild>
                                    <br />
                                    <div class="alert alert-warning mt-3">
                                        Your email is not confirmed. Please check your inbox.<br />
                                        <a href="javascript:void(0)">Resend confirmation</a>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <!-- Tab 2 content -->
                        <template v-slot:tab-content-2>
                            <div class="h-50">
                                <div class="tab-pane show" id="account-change-password">
                                    <div class="card-body pb-2">
                                        <InputFeild type="password" label="Current password" placeholder="Current password">
                                        </InputFeild>
                                        <InputFeild type="password" label="New password" placeholder="New password">
                                        </InputFeild>
                                        <InputFeild type="password" label="Repeat New password" placeholder="New password">
                                        </InputFeild>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-slot:tab-content-3>
                            <div class="h-50">
                                <div class="tab-pane" id="account-info">
                                    <div class="card-body pb-2">
                                        <Textarea placeholder="Write About Yourself" label="Bio" rows="7"></Textarea>
                                        <InputFeild type="date" label="Birthday" placeholder=""> </InputFeild>
                                        <Select label="Country" :links="['USA', 'Canada', 'JOR']"> </Select>
                                    </div>
                                    <div class="card-body pb-2">
                                        <h5 class="mb-4">Contacts</h5>
                                        <InputFeild type="text" label="Phone" placeholder="Phone"> </InputFeild>
                                        <InputFeild type="text" label="Alternative Phone" placeholder="Phone">
                                        </InputFeild>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-slot:tab-content-4>
                            <div class="h-50">
                                <div class="tab-pane" id="account-social-links">
                                    <div class="card-body pb-2">
                                        <InputFeild type="text" label="Twitter Link" placeholder="Twitter Link">
                                        </InputFeild>
                                        <InputFeild type="text" label="Facebook Link" placeholder="Facebook Link">
                                        </InputFeild>
                                        <InputFeild type="text" label="Google" placeholder="Google"> </InputFeild>
                                        <InputFeild type="text" label="LinkedIn Link" placeholder="LinkedIn Link">
                                        </InputFeild>
                                        <InputFeild type="text" label="Instagram Link" placeholder="Instagram Link">
                                        </InputFeild>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <template v-slot:tab-content-5>
                            <div class="h-50">
                                <div class="tab-pane" id="account-notifications">
                                    <div class="card-body pb-2">
                                        <div class="row d-flex">
                                            <div class="col-md-3">
                                                <h6 class="mb-4">Activity</h6>
                                            </div>

                                            <div class="col-md-9">
                                                <Checkbox label="Email me when someone answers on my forum thread">
                                                </Checkbox>
                                                <Checkbox label="Email me when someone follows me">
                                                </Checkbox>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body pb-2">
                                        <div class="d-flex row">
                                            <div class="col-md-3">
                                                <h6 class="mb-4">Application</h6>
                                            </div>
                                            <div class="col-md-9">
                                                <Checkbox label="Weekly product updates"></Checkbox>
                                                <Checkbox label="Weekly blog digest"></Checkbox>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Tabs>
                </template>
                <template #footer>
                    <div class="text-right mt-3 container-fluid">
                        <button type="button" class="btn btn-primary">Save changes</button>&nbsp;
                        <button type="button" class="btn btn-default">Cancel</button>
                    </div>
                </template>
            </Wrapper>
        </div>
    </div>
</template>

<script setup>
import Textarea from '../components/core/Textarea.vue'
</script>

<style scoped>
.profile-pic {
    width: 200px;
    max-height: 200px;
    display: inline-block;
}

.file-image {
    opacity: 0;
    transform: translateY(-80px);
}

.add {
    transform: translateY(-50px);
    margin-left: 130px;
    font-weight: bold;
}
</style>
