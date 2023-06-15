import CoButton from '../src/button.vue';
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'CouriourC/Button',
    component: CoButton,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: ['primary', 'line', 'lines'],
        },
        onClick: {

        },
        size: {
            control: {
                type: 'select',
            },
            options: ['sm', 'lg', 'block'],
        },
        round: {
            control: {
                type: 'boolean'
            },

        }
    },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
    args: {
        type: "primary",
        label: 'Button',
    },
};

export const Round = {
    args: {
        label: '',
        round: true
    },
};
export const Small = {
    args: {
        size: 'sm',
        label: 'Button',
    },
};
export const Large = {
    args: {
        size: 'lg',
        label: 'Button',
    },
};


