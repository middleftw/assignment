<template>
    <v-layout justify-center>
        <v-flex xs12 sm8>
            <v-card>
                <v-card-title text-center>
                    <h3>Websites</h3>
                </v-card-title>
                <v-card-text>
                    <v-btn @click="$router.push('/create')"><v-icon>add</v-icon></v-btn>
                    <v-data-table
                        :headers="headers"
                        :items="websites"
                        class="elevation-1"
                    >
                        <template v-slot:items="props">
                            <td>{{ props.item.id }}</td>
                            <td>{{ props.item.name }}</td>
                            <td>{{ props.item.url }}</td>
                            <td>{{ props.item.created_at }}</td>
                        </template>
                    </v-data-table>

                </v-card-text>
                
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data(){
        return {
            headers: [
                {
                    text: 'Id',
                    align: 'left',
                    sortable: false,
                    value: 'id'
                },
                { text: 'Name', value: 'name' },
                { text: 'Url', value: 'url' },
                { text: 'Created At', value: 'created_at' }
            ],
            websites: [],
        }
    },
    mounted(){
        this.$http.get('websites').then(response => {
            this.websites = response.data;
        });
    },
    
}
</script>