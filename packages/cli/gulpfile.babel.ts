const {series, task, src, dest, watch} = require("gulp");
const path = require("path");
const ts = require("gulp-typescript");

const srcDir = path.resolve(__dirname, "./src");
const ts_handler = async () =>
    src(srcDir)
        .pipe(ts({}))
        .pipe(dest("./lib"));

console.log(process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
    case "development":
        task("default", async () => watch(["./src/**"], ts_handler))
        break;
    default:
        task("default", async () => series(ts_handler))
}
