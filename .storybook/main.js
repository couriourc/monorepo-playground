/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
    stories: ["../**/*.mdx", "../packages/**/stories/**/*.mdx", "../packages/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    features: {
        // storyStoreV7: false, // 👈 Opt out of on-demand story loading
    },
};
export default config;
