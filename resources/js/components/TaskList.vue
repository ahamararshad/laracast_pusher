<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Tasks</div>

                    <div class="card-body">
                        <ul>
                            <li v-for="task in tasks" v-text="task"></li>
                        </ul>
                        <input type="text" v-model="newTask" @blur="addTask">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tasks: [],
                newTask: ''
            }
        },
        methods: {
            addTask(){
                axios.post('/tasks', { body: this.newTask });
                this.tasks.push(this.newTask);
                this.newTask = '';
            }
        },
        created() {
            axios.get('/tasks').then(response => this.tasks = response.data);

            window.Echo.channel('tasks')
                .listen('TaskCreated', ({task}) => {
                    this.tasks.push(task.body);
                })
        }
    }
</script>
