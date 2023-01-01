<script>
    export default {
        methods: {
            addTodo(){

            }
        }
    }
</script>
<template>
    <div class="flex items-center justify-between">
        <h1 class="font-bold text-2xl">My todo app</h1>
        <button @click="addTodo()" class="bg-sky-500 text-white px-8 py-2 text-center">Add tood</button>
    </div>
</template>