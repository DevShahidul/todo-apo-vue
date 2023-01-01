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
            ...mapState(useTodoStore, ['pendingTodos']),
        },
    }
</script>
<template>
    <div class="container mx-auto max-w-5xl">
        <ListGroup v-if="pendingTodos.length">
            <listItem v-for="todo in pendingTodos" :key="todo.id" :todo="todo" />
        </ListGroup>
        <h2 class="text-2xl text-red-500 font-bold" v-else>Not found any pending todo!</h2>
    </div>
</template>