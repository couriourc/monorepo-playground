<template>
    <button class="element" :class="{
        [type]: !!type,
    }">
        <slot v-if="!$slots.default"></slot>
        <span v-else>默认文本</span>
    </button>
</template>

<script setup>
import { ref } from "vue";

defineProps({
    size: {
        type: String,
        default: () => ''
    },
    type: {
        type: String,
        default: () => 'primary'
    },
});
</script>
<style lang="scss" scoped>
.element {
    border-radius: 2px;
    border: none;
    padding: 2px 12px;
    color: #FFF;
    cursor: pointer;
}

.element.primary {

    background-color: #26f;

    &:hover {
        background-color: rgb(28, 80, 201);
    }
}

.element.plain {
    background-color: #FFF;
    color: #000;
    border: 1px solid;
    outline: none;

    &:hover {
        background-color: #eee;
    }
}
</style>
