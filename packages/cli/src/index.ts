// console.log()
import {Command} from "commander";
import inquirer from "inquirer";
import {log} from "console";

const cmd = new Command();

const InitPrompts = [
    {
        name: "description",
        message: "please input description",
        default: "",
    },
    {
        name: "author",
        message: "please input author",
        default: "",
    },
];
cmd
    .name("couriourc-cli")
    .description("couriourc 组件库开发工具 ")
    .version("latest");

cmd
    .command("init <name>")
    .description(" 初始化项目 ")
    .action(async (name) => {
        // log(name);
        const initOptions = await inquirer.prompt(InitPrompts);
    });
cmd.parse();
