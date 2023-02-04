<script>
    import { useTodoStore } from '../stores/TodoStore';
    export default {
        props: {
            todo: {
                type: Object
            },
        },
        data() {
            return {
                todoTitle: this.todo.title,
            }
        },
        methods: {
            handleDelete(){
                useTodoStore().deleteTodo(this.todo.id);
            },
            handleStatus(){
                useTodoStore().toggleStatus(this.todo.id);
            },
            handleEdit(){
                useTodoStore().editTodo(this.todo.id);
                this.$nextTick(() => {
                    this.$refs.inputElement.focus();
                });
            },
            updateTodo(){
                useTodoStore().updateTodo(this.todo.id, this.todoTitle);
            },
            handleBlure(){
                useTodoStore().handleBlure(this.todo.id);
            }
        }
    }
</script>
<template>
    <li class="w-full p-4 ring-1 ring-gray-200 flex justify-between items-center hover:shadow-lg transition shadow-gray-800">
        <form v-if="todo.allowEdit" @submit.prevent="updateTodo()">
            <input ref="inputElement" @blur="handleBlure()" class="ring-1 ring-text-gray-300 text-gray-500 placeholder:text-gray-400" type="text" name="todoTitle" v-model="todoTitle">
        </form>
        <template v-else>
            {{ todo.title }}
        </template>
        <div class="flex items-cener space-x-4">
            <span :class="['font-bold', todo.completed ? 'text-green-600' : 'text-red-500']">{{ todo.completed ? 'Completed' : 'Pending' }}</span>
            <button @click="handleStatus()" class="text-green-400 hover:text-green-600">
                <template v-if="!todo.completed">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                </template>
                <template v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>

                </template>
            </button>
            <button class="text-gray-500 disabled:text-gray-300" @click="handleEdit()" :disabled="todo.completed">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            </button>
            <button class="text-red-500 hover:text-red-400" @click="handleDelete()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
        </div>
    </li>
</template>