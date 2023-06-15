<template>
    <button class="co-btn" :class="{
        [type]: !!type,
        [size]: !!size,
        ['round']: !!round
    }">
        <slot v-if="!$slots.default"></slot>
        <span v-else>{{ round }}</span>
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
    round: {
        type: Boolean,
        default: () => false
    }
});
</script>
<style lang="scss" scoped>
/* ==================
          按钮
 ==================== */
.co-btn {

    position: relative;
    border: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 15px;
    font-size: 14px;
    height: 32px;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    overflow: visible;
    margin-left: initial;

    transform: translate(0, 0);
    margin-right: initial;


    cursor: pointer;

    &::after {
        display: none;
    }

    &::before {
        background-color: #f0f0f0;
    }

    &:not([class*="bg-"]) {
        background-color: #f0f0f0;
    }

    &[class*="round"] {
        border-radius: 6px;
    }

    &[class*="line"] {
        background-color: transparent;

        &::after {
            content: " ";
            display: block;
            width: 200%;
            height: 200%;
            position: absolute;
            top: 0;
            left: 0;
            border: 1px solid currentColor;
            transform: scale(0.5);
            transform-origin: 0 0;
            box-sizing: border-box;
            border-radius: 6px;
            z-index: 1;
            pointer-events: none;

        }

        &.round::after {
            border-radius: 5000px;
        }
    }

    &[class*="lines"]::after {
        border: 3px solid currentColor;
    }

    &[class*="bg-"]::after {
        display: none;
    }

    &.sm {
        padding: 0 10px;
        font-size: 10px;
        height: 48upx;
    }

    &.lg {
        padding: 0 20px;
        font-size: 16px;
        height: 40px;
    }

    &.shadow-blur::before {
        top: 2px;
        left: 2px;
        filter: blur(3px);
        opacity: 0.6;
    }

    &:hover {
        transform: translate(1px, 1px);
    }

    &.block {
        display: flex;
    }

    &[disabled] {
        opacity: 0.6;
        color: #ffffff;
    }
}


// .cu-btn.cuIcon.sm {
//     width: 48upx;
//     height: 48upx;
// }

// .cu-btn.cuIcon {
//     width: 64upx;
//     height: 64upx;
//     border-radius: 500upx;
//     padding: 0;
// }

// button.cuIcon.lg {
//     width: 80upx;
//     height: 80upx;
// }

.block {
    display: block;
}
</style>
