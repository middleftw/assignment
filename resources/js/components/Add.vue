<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3 mb-5>
            <v-card>
                <v-card-title>
                    <v-btn @click="$router.push('/')" icon><v-icon>arrow_left</v-icon></v-btn>
                    <h3>Add new website</h3>
                </v-card-title>
                <v-card-text>
                    <v-form v-model="valid">
                        <v-text-field
                            v-model="name"
                            label="Website name"
                            :rules="[rules.required]"
                        ></v-text-field>

                        <v-text-field
                            v-model="url"
                            label="Website url"
                            :rules="[rules.required]"
                        ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn  @click="saveWebsite" style="margin:auto;">Save</v-btn>
                    <v-btn  @click="$router.push('/')" style="margin:auto;">Back</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data(){
        return {
            name: '',
            url: '',
            valid: '',
            rules: {
                required: value => !!value || 'Required.',
            },
        }
    },
    methods: {
        saveWebsite(){
            if(this.valid){
                this.$http.post('websites',{
                    name: this.name,
                    url: this.url
                }).then(response => {
                    if(response.data == 1){
                        this.$swal(
                            'Success',
                            'The website has been saved.',
                            'success'
                        );
                    }
                    this.$router.push('/');
                }).catch(e => {
                    this.$swal(
	                    'Error - ' + e.response.status,
	                    e.response.data.message + '<br><br>' + JSON.stringify(e.response.data.errors),
	                    'error'
                    );
                });
            }else{
                this.$swal(
                    'Error',
                    'All fields are required.',
                    'error'
                );
            }
            
        }
    }
}
</script>