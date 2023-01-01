<script>
    import { RouterLink } from 'vue-router';
    export default {
        props: {
            href: {
                type: String,
                required: true,
            },
        },
    }
</script>
<template>
    <RouterLink :to="href" :class="['font-bold relative py-1 px-2', $route.path == href ? 'text-sky-500' : 'text-gray-700']"> <span class="px-2 py-[2px] bg-gray-200 rounded-full absolute -right-5 -top-4"><slot name="count"></slot></span> <slot></slot> </RouterLink>
</template>