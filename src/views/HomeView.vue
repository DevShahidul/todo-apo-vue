<script>
    import { mapState } from 'pinia';
import ListGroup from '../components/ListGroup.vue';
import ListItem from '../components/ListItem.vue';
import { useTodoStore } from '../stores/TodoStore';


    export default {
        components: {
            ListGroup,
            ListItem
        },

        computed: {
            ...mapState(useTodoStore, ['todos']),
        },

        methods: {
            addTodo(){
                useTodoStore().addTodo({
                    id: this.todos.length + 1,
                    title: `Todo ${this.todos.length + 1}`,
                    completed: false,
                    allowEdit: false,
                });
            }
        }
    }
</script>
<template>
    <div class="container mx-auto max-w-5xl py-10">
        <div class="flex items-center justify-between">
            <h1 class="font-bold text-2xl">My todo app</h1>
            <button @click="addTodo()" class="bg-sky-500 text-white px-8 py-2 text-center">Add tood</button>
        </div>
        <ListGroup v-if="todos.length">
            <ListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
        </ListGroup>
    </div>
</template>