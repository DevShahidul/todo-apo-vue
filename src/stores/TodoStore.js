import { defineStore } from 'pinia';

export const useTodoStore = defineStore('Todo', {
    state: () => ({
        todos: [
            {
                id: 1,
                title: 'Todo 1',
                completed: true,
            },
            {
                id: 2,
                title: 'Todo 2',
                completed: false,
            },
            {
                id: 3,
                title: 'Todo 3',
                completed: false,
            }
        ],
    }),

    // Actions
    actions: {
        addTodo(todo){
            this.todos.push(todo);
        },
        deleteTodo(id){
            console.log("I'm clicked to delete");
           this.todos = this.todos.filter( todo => todo.id !== id);
        },
        toggleStatus(id){
            this.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
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