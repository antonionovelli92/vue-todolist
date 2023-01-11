console.log('Vue ok', Vue);

const app = Vue.createApp({
    data() {
        return {
            lists,
        }
    }
});

app.mount('#root');
