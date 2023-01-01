<script>
  import { mapState } from 'pinia';
import { RouterView } from 'vue-router';
import NavLink from './components/NavLink.vue';
import { useTodoStore } from './stores/TodoStore';
  export default {
    components: {
      NavLink,
    },
    computed: {
      ...mapState(useTodoStore, ['allTodos', 'totalPendingTodos', 'totalCompletedTodos']),
    }
  }
</script>

<template>
  <header class="w-full">
    <div class="container max-w-5xl mx-auto">
      <nav class="py-5 flex items-center space-x-4 mt-4">
        <NavLink href="/">
          <template #count>
            {{ allTodos }}
          </template>
          All
        </NavLink>
        <NavLink href="/pending">
          <template #count>
            {{ totalPendingTodos }}
          </template>
          Pending
        </NavLink>
        <NavLink href="/completed">
          <template #count>
            {{ totalCompletedTodos }}
          </template>
          Completed
        </NavLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
