<template>
    <div style="margin-left: -10px" class="container-fluid">
        <Card :dividerHeaderCard="true">
            <template #header>Wizard Form</template>
            <template #body>
                <div class="d-flex justify-content-start align-items-center"
                    v-for="item in data.filter((item) => item.onboarding_id === '1')" :key="item.onboarding_id">
                    <!-- Loop through the forms array within the selected item -->
                    <div class="" v-for="(form, index) in item.forms" :key="form.id">
                        <span style="margin-left: 12px;" class="indexNext" v-if="currentFormIndex > index">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor"
                                class="bi bi-check" viewBox="0 0 16 16">
                                <path
                                    d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg></span>
                        <span style="margin-left: 12px;" v-else class="index">{{ index + 1 }}</span>



                    </div>
                    <br />
                    <br />
                </div>
            </template>
        </Card>

        <Card>
            <template #body>
                <div class="item" v-for="item in    data.filter((item) => item.onboarding_id === '1')   "
                    :key="item.onboarding_id">

                    <!-- @submit="submitForm" -->
                    <div class="form" v-show="index === currentFormIndex"
                        v-for="(form, index) in    item.forms.sort((a, b) => a.form_order - b.form_order)   "
                        :key="form.id">
                        <span class="formName">{{ form.name }}</span>

                        <div class="field" v-for="field in form.fields.sort((a, b) => a.field_order - b.field_order)"
                            :key="field.id">
                            <br />

                            <div v-if="!field.is_child_for || form.fields.find((f) => f.id === field.is_parent_for)">

                                <div v-if="field.type === 'input' || field.type === 'number'">
                                    <InputField :id="field.id" :name="'field_' + field.name"
                                        :required="field.required ? '1' : '0'" v-model="inputValue['field_' + field.id]"
                                        :label="field.name">
                                    </InputField>
                                    <!-- {{ field.name }}: {{ inputValue[field.id] }} -->

                                </div>
                                <div v-else-if="field.type === 'select'">
                                    <Select v-model="selectedValueSelect" :label="field.name">
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
                                    <span class="fs-6">{{ field.name }}</span>
                                    <br />
                                    <br />
                                    <UploadFile></UploadFile>
                                </div>
                                <div v-else-if="field.type === 'downloadfile'"></div>
                                <div v-else-if="field.type === 'radio'"></div>
                                <div v-else>
                                    <h1>forget put that</h1>
                                </div>

                                <span class="d-flex justify-content-between" v-if="field.id === '1'">
                                    <div class="d-flex justify-content-between">
                                        <a :href="field.path" class="downloadfile">Terms and Conditions</a>
                                        <span class="mx-2">&</span>
                                        <a :href="field.path" class="downloadfile"> Code of Conduct (COE)</a>
                                    </div>
                                </span>

                                <div class="" v-else-if="field.id === '3'">
                                    <span class="col-3 fs-6">{{ field.name }}</span>
                                    <div v-for="(option, index) in optionsData" :key="index">

                                        <RadioButton v-model="selectedValue" :label="option"></RadioButton>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="d-flex justify-content-between">
                            <Button variant="primary-outline" @click="currentFormIndex--" v-if="currentFormIndex > 0"
                                title="Back"></Button>
                            <div @click="handleContinue">
                                <Button type="submit" @click="currentFormIndex++"
                                    :disabled="selectedValue !== 'I accept the Terms and Conditions and Code of Conduct'"
                                    v-if="currentFormIndex < item.forms.length - 1" title="continue"></Button>
                            </div>

                            <Button type="submit" v-if="currentFormIndex === item.forms.length - 1" title="Submit">

                            </Button>
                        </div>



                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title text-danger fs-5" id="exampleModalLabel">Warning</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body fs-6">
                                        You must Accept the Terms and Conditions and Code of Conduct
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Ok</button>
                                    </div>
                                </div>
                            </div>
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
    padding: 12px;
    border: 1px solid #05278d;

    border-radius: 8px;
}

.index:hover {
    background-color: #05278d;
    color: white;
    text-align: center;
    padding: 12px;
    border: 1px solid #05278d;

    border-radius: 8px;
}

.indexNext {
    background-color: #05278d;
    color: white;
    border: 1px solid rgb(247, 247, 250);
    text-align: center;
    padding: 12.8px 4px;
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
 
 
<script>
import data from './dataWizard.js'

export default {
    data() {
        return {
            data: data,
            inputValue: [''],
            selectionOption: null,
            currentFormIndex: 0,
            selectedValue: '',
            selectedValueSelect: '',
            optionsData: [
                'I accept the Terms and Conditions and Code of Conduct',
                'I Don\'t Accept the Terms and Conditions and Code of Conduct'
            ]
        };
    },
    methods: {


        handleContinue() {
            if (this.selectedValue !== 'I accept the Terms and Conditions and Code of Conduct') {
                $('#exampleModal').modal('show');

            }

        },


        submitForm(event) {
            event.preventDefault();

        }
    },
    mounted() {
        console.log(this.selectedValue);
        // console.log(this.selectedValueSelect)
        console.log('inputValue:', this.inputValue);


    },
    watch: {
        selectedValue(newValue) {
            console.log('Selected Value changed to:', newValue);
        },
        inputValue: {
            deep: true, // Watch for changes in nested objects
            handler(newVal) {
                console.log('inputValue changed:', newVal);
            }

        },
    },
    computed: {
        matchingFields() {
            return this.form.fields.filter(f => f.id === this.field.is_parent_for);
        }
    },
};
</script>
  