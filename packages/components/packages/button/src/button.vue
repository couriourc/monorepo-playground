<template>
    <button class="element" :class="{
        primary,
    }">
        <slot></slot>
    </button>
</template>

<script setup>
import { ref } from "vue";

defineProps({
    primary: {
        type: Boolean,
    },
});
const msg = ref();
</script>
<style lang="scss">
.element {
    background-color: antiquewhite;

    div {
        background-image: none;
    }
}
</style>
