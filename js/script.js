const { createApp } = Vue

createApp({

    data() {
        return {
            emails: [],
            emailsBonus: [],
            inputNum: '',
            numLock : '',
        }
    },
    methods: {
        requestAndPush(array) {
            let email;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

                .then((result) => {
                    email = result.data.response;
                    array.push(email);
                });
        },
        push() {
            this.requestAndPush(this.emails)
            console.log(this.emails);
        },
        print() {
            this.emailsBonus = [];
            this.numLock = this.inputNum
            for (let i = 0; i < this.inputNum; i++) {
                this.requestAndPush(this.emailsBonus)
            }
            console.log(this.emailsBonus);

        }
    },
    mounted() {

    }

}).mount('#app');