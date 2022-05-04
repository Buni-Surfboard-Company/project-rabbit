<template>
    <Toast/>
    <form @submit.prevent="onSubmit(!v$.$invalid)" class="p-fluid">
    <div class="pt-7 shadow-6 flex flex-column justify-content-around align-items-center bg-primary w-9 m-auto mb-8" style="height: 100vh; outline: auto">
        <h2>Contact Form</h2>
            <div class="field" style="width:50vw">
                <span class="p-float-label">
                    <InputText id="name" class="text-box" v-model="v$.name.$model" :class="{'p-invalid':v$.name.$invalid && submitted}" />
                   <label for="name" class="text-xl" :class="{'p-error':v$.name.$invalid && submitted}">Name*</label>
                </span>
                <small class="text-lg" v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" :class="p-error">{{v$.name.required.$message.replace('Value', 'Name')}}</small>
            </div>
            <div class="field" style="width:50vw">
                <span class="p-float-label">
                    <InputText class="text-box" id="email" type="email" v-model="v$.email.$model" :class="{'p-invalid':v$.email.$invalid && submitted}"/>
                    <label class="text-xl" for="email" :class="{'p-error':v$.email.$invalid && submitted}">Email*</label>
                </span>
                <small class="text-lg" v-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" :class="p-error">{{v$.email.required.$message.replace('Value', 'Email')}}</small>
            </div>
            <div class="field" style="width:50vw">
                <Textarea class="text-xl" rows="5" cols="30" placeholder="Tell us a some shit" v-model="v$.message.$model" :class="{'p-invalid':v$.message.$invalid && submitted}"/>
                <small class="text-lg" v-if="(v$.message.$invalid && submitted) || v$.message.$pending.$response" :class="p-error">{{v$.message.required.$message.replace('Value', 'Message')}}</small>
            </div>
            <div class="field" style="width:50vw">
                <Toast position="center" group="tl"/>
                <FileUpload name="demo[]" url="./upload.php" @upload="onUpload" :multiple="true" accept="image/*" :maxFileSize="100000000">
                    <template #empty>
                        <p>Drag and drop files to here to upload.</p>
                    </template>
                </FileUpload>
            </div>
            <Button :loading="loading" type="submit" label="Submit" class="p-button-raised p-button-success p-button-lg w-10rem mb-3" />
        </div>
    </form>
</template>

<script>
import { ref, reactive } from 'vue'
import { useToast } from 'primevue/usetoast';
import emailjs from 'emailjs-com'
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
	setup() {
        const submitted = ref(false)
        const state = reactive({
            name: '',
            email: '',
            message: '',
            accept: null
        });
        const loading = ref(false)
		const toast = useToast();
       const rules = {
            name: { required },
            email: { required, email },
            message: { required }
        };
        const v$ = useVuelidate(rules, state);
		const onUpload = () => {
            toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
        }
        const onSubmit = (isFormValid) => {
            submitted.value = true;
            console.log('valid:', isFormValid)
            if (!isFormValid) {
                return
            }
            try {
                loading.value = true
                emailjs.init(process.env.VUE_APP_USER_ID)
                emailjs.send(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_TEMPLATE_ID,
                {
                    name: state.name,
                    email: state.email,
                    message: state.message
                }).then(function(response){
                    console.log(response)
                    loading.value = false
                    toast.add({severity: 'info', summary: 'Success', detail: 'Email Sent!', life: 3000})
                })

            } catch(error) {
                console.log({error})
                toast.add({severity: 'error', summary: 'Error', detail: 'Error Sending Email :(', life: 3000})
            }
        }

		return { onUpload, onSubmit, loading, v$, state, submitted };
	}
}
</script>

<style>

</style>