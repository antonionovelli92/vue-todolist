console.log('Vue ok', Vue);

const app = Vue.createApp({
    name: 'ToDoList',
    data() {
        return {
            newList: '',
            lists
        }
    },
    methods: {
        addList() {
            this.lists.push(this.newList);
        },
        deleteList(index) {
            this.lists.splice(index, 1);
        }
    }


});

app.mount('#root');
