<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ project.name }}</div>

                    <div class="card-body">
                        <ul>
                            <li v-for="task in tasks" v-text="task"></li>
                        </ul>
                        <input type="text" v-model="newTask" class="form-control" @blur="addTask">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'], //accept the project prop
    data() {
        return {
            tasks: [],
            newTask: ''
        }
    },
    methods: {
        addTask() {
            axios.post(`/api/projects/${this.project.id}/tasks`, {body: this.newTask});

            this.tasks.push(this.newTask);
            this.newTask = '';
        }
    },
    created() {
        axios.get(`/api/projects/${this.project.id}`).then(response => (this.tasks = response.data));

        //listen for when tasks are created with Pusher
        window.Echo.channel('tasks.' + this.project.id).listen('TaskCreated', e => {
            this.tasks.push(e.task.body);
        });
    }
}
</script>
