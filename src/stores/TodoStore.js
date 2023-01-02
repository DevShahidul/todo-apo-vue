import { defineStore } from 'pinia';

export const useTodoStore = defineStore('Todo', {
    state: () => ({
        todo: {},
        todos: [
            {
                id: 1,
                title: 'Todo 1',
                completed: true,
                allowEdit: false,
            },
            {
                id: 2,
                title: 'Todo 2',
                completed: false,
                allowEdit: false,
            },
            {
                id: 3,
                title: 'Todo 3',
                completed: false,
                allowEdit: false,
            }
        ],
    }),

    // Actions
    actions: {
        addTodo(todo){
            this.todos.push(todo);
        },
        deleteTodo(id){
           this.todos = this.todos.filter( todo => todo.id !== id);
        },
        toggleStatus(id){
            this.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                    if(todo.completed){
                        todo.allowEdit = false;
                    }
                }
                return todo;
            });
        },
        editTodo(id){
            const selectedTodo = this.todos.filter(todo => todo.id === id);
            this.todos.map(todo => {
                if(todo.id === id) {
                    todo.allowEdit = true;
                }
                return todo;
            });
            this.todo = {...selectedTodo};
        },
        updateTodo(id, newTitle){
            this.todos.map(todo => {
                if(todo.id === id) {
                    todo.title = newTitle;
                    todo.allowEdit = false;
                }
                return todo;
            });
        },
        handleBlure(id){
            this.todos.map( todo => {
                if(todo.id === id) {
                    todo.allowEdit = false;
                }
                return todo;
            });
        },
    },

    // Getters
    getters: {
        completedTodos(state){
            return state.todos.filter( todo => todo.completed);
        },
        pendingTodos(state){
            return state.todos.filter( todo => !todo.completed);
        },
        allTodos(state){
            return state.todos.length
        },
        totalPendingTodos(state){
            return state.todos.filter( todo => !todo.completed).length;
        },
        totalCompletedTodos(state){
            return state.todos.filter( todo => todo.completed).length;
        },
    }
});