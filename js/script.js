const { createApp } = Vue

createApp({

    data() {
        return {
            emails : [],
            
        }
    },
    methods: {
        push() {
            let email;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

            .then((result) => {
                email = result.data.response;
                this.emails.push(email);
            });
            
            console.log(this.emails);
        }
    },
    mounted() {

    }

}).mount('#app');