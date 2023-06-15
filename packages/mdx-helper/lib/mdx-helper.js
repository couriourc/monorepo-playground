const MarkdownIt = require("markdown-it");
// const meta = require('markdown-it-meta')

function meta(md, state, start, end) {
    // console.log(md, state)
}

export function parseFile(file) {
    // console.log(markdownIt(plugin, {
    //     templateDir: ""
    // }).parse(file))
    // Make new instance
    // Add markdown-it-meta
    const md = new MarkdownIt()
    md.use(meta)

    const html = md.render(`
---
title: Welcome to Markdown-it-meta
keywords: markdown-it-meta
runs: 0
score: 0.0
demographics:
 - {name: 'unknown'}
---

    `, {});

    // return markdownIt(file)();
    // console.log(JSON.stringify(md.meta))
    return {
        document: html,
        meta: md.meta
    }
}


export function parseCode(code) {

}
function mdxHelper() {
    return 'Hello from mdxHelper';
}
