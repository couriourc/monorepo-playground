import { mergeConfig } from 'vite';
import Unocss from 'unocss/vite';
import UnocssPreset from 'unocss/preset-uno';
import { parseSource, parse } from 'vue-docgen-api';
import path from "path"
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
        // storyStoreV7: true, // 👈 Opt out of on-demand story loading
        // buildStoriesJson: true,
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            plugins: [
                Unocss({
                    presets: [
                        UnocssPreset()
                    ]
                }),
                // {
                //     name: "vue-docgen",
                //     transform(code, id) {
                //         const ext = path.extname(id);
                //         // console.log(path.extname(id));
                //         if (/\.vue$/.test(ext)) {
                //             // console.log(parse(code));
                //         }

                //         return code
                //     }
                // }
            ]
        })
    }
};
export default config;
