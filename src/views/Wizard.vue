<template>
    <div style="margin-left: -10px;" class="container-fluid  ">
        <Card :dividerHeaderCard="true">
            <template #header>Wizard Form</template>
            <template #body>
                <div class="d-flex justify-content-around align-items-center"
                    v-for="item in  data.filter(item => item.onboarding_id === '1') " :key="item.onboarding_id">
                    <!-- Loop through the forms array within the selected item -->
                    <div class="" v-for="(form, index) in  item.forms " :key="form.id">
                        <span class="indexNext" v-if="currentFormIndex > index"><svg xmlns="http://www.w3.org/2000/svg"
                                width="30" height="30" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path
                                    d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg></span>
                        <span v-else class="index">{{ index + 1 }}</span>

                    </div>
                    <br>
                    <br>

                </div>
            </template>
        </Card>

        <Card>
            <template #body>


                <div class="item" v-for=" item  in   data.filter(item => item.onboarding_id === '1')  "
                    :key="item.onboarding_id">
                    <div class="form" v-show="index === currentFormIndex"
                        v-for="( form, index ) in   item.forms.sort((a, b) => a.form_order - b.form_order)  "
                        :key="form.id">
                        <span class="formName">{{ form.name }}</span>
                        <div class="field" v-for=" field  in   form.fields.sort((a, b) => a.field_order - b.field_order)  "
                            :key="field.id">
                            <br>

                            <div v-if="!field.is_child_for || form.fields.find(f => f.id === field.is_parent_for)">

                                <span class="d-flex justify-content-between" v-if="field.id === '1'">
                                    <div class="d-flex   justify-content-between">
                                        <a :href='field.path' class="downloadfile ">Terms and Conditions</a> <span
                                            class="  mx-2">&</span>
                                        <a :href='field.path' class="downloadfile "> Code of Conduct (COE)</a>

                                    </div>
                                </span>

                                <div class="" v-else-if="field.id === '3'">
                                    <span class=" col-3 fs-6">{{ field.name }}</span>
                                    <div v-for="(option, index) in optionsData" :key="index">
                                        <RadioButton v-model="selectionOption" :label="option"></RadioButton>
                                    </div>
                                </div>
                                <div v-else-if="field.type === 'input' || field.type === 'number'">
                                    <InputFeild :label="field.name"></InputFeild>
                                </div>
                                <div v-else-if="field.type === 'select'">
                                    <Select v-model="field.selectedValue" :label="field.name">
                                        <option class="" v-for="option in field.options" :key="option.id"
                                            :value="option.option_value">
                                            {{ option.option_value }}
                                        </option>
                                    </Select>
                                </div>

                                <div v-else-if="field.type === 'header'">
                                    <h6 class="text-primary">{{ field.name }}</h6>
                                </div>

                                <div v-else-if="field.type === 'description'">
                                    <div class="alert alert-primary">{{ field.default_value }}</div>

                                </div>
                                <div v-else-if="field.type === 'date_picker'">
                                    <Date :label="field.name"></Date>
                                </div>
                                <div v-else-if="field.type === 'file'">
                                    <span class="fs-6 ">{{ field.name }}</span>
                                    <br> <br>
                                    <UploadFile></UploadFile>
                                </div>
                                <div v-else-if="field.type === 'downloadfile'">
                                </div>
                                <div v-else-if="field.type === 'radio'">
                                </div>
                                <div v-else>
                                    <h1>forget put that</h1>
                                </div>


                            </div>





                        </div>
                        <br>
                        <div class=" d-flex justify-content-between">
                            <Button variant="primary-outline" @click="currentFormIndex--" v-if="currentFormIndex > 0"
                                title="Back"></Button>
                            <Button @click="currentFormIndex++" v-if="currentFormIndex < item.forms.length - 1"
                                title="continue"></Button>
                            <Button v-if="currentFormIndex === item.forms.length - 1" title="Submit"></Button>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>
<style scoped>
.index {
    background-color: white;
    color: #05278d;
    text-align: center;
    padding: 15px;
    margin: 1px;
    border: 1px solid #05278d;

    border-radius: 8px;

}

.index:hover {
    background-color: #05278d;
    color: white;
    text-align: center;
    padding: 15px;
    margin: 1px;
    border: 2px solid #05278d;

    border-radius: 8px;

}

.indexNext {
    background-color: #05278d;
    color: white;
    border: 2px solid rgb(247, 247, 250);
    text-align: center;
    padding: 10px;
    margin: 1px;
    padding: 16px 7px;
    border-radius: 8px;

}

.downloadfile {
    font-size: 14px;
    color: rgb(184, 5, 5);
}

.formName {
    color: #05278d;
    font-size: 20px;
    font-weight: bold;

}
</style>
<script setup>
import { ref } from 'vue';
import data from './dataWizard.js'
import RadioButton from '../components/core/RadioButton.vue';
import InputFeild from '../components/core/InputFeild.vue';
import Select from '../components/core/Select.vue';
const selectionOption = ref(null)
console.log(data);
const optionsData = ref(['I accept the Terms and Conditionsand Code of Conduct', 'I Dont Accept the Terms and Conditions and Code of Conduct'])
const currentFormIndex = ref(0);
console.log(currentFormIndex)


// const goTotheNextfeild = () => {
//     if (selectionOption.value === optionsData.value[0]) {
//         currentFormIndex.value++
//     }
// }
const selectedValue = ref(null);
console.log(selectedValue.value)
console.log(selectionOption.value)

</script>
