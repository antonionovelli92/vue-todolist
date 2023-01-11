console.log('Vue ok', Vue);

const app = Vue.createApp({
    name: 'ToDoList',
    data() {
        return {
            lists,
        }
    },


});

app.mount('#root');
