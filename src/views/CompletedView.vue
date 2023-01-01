<script>
    import { mapState } from 'pinia';
import ListGroup from '../components/ListGroup.vue';
import ListItem from '../components/ListItem.vue';
import { useTodoStore } from '../stores/TodoStore';

    export default {
        components: {
            ListGroup,
            ListItem,
        },

        computed: {
            ...mapState(useTodoStore, ['completedTodos']),
        },
    }
</script>
<template>
    <div class="container mx-auto max-w-5xl">
        <ListGroup v-if="completedTodos.length">
            <listItem v-for="todo in completedTodos" :key="todo.id" :todo="todo" />
        </ListGroup>
        <h2 class="text-2xl text-red-500 font-bold" v-else>Not found any completed todo!</h2>
    </div>
</template>