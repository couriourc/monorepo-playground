import { mergeConfig } from 'vite';
import Unocss from 'unocss/vite';
import UnocssPreset from 'unocss/preset-uno';
/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
    stories: ["../README.mdx", "../packages/**/stories/**/*.mdx", "../packages/**/*.stories.@(js|jsx|ts|tsx)"],
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
    async viteFinal(config) {
        return mergeConfig(config, {
            plugins: [
                Unocss({
                    presets: [
                        UnocssPreset()
                    ]
                })
            ]
        })
    }
};
export default config;
