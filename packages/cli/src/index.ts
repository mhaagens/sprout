#!/usr/bin/env node

import * as path from "path";
import * as util from "util";
import * as child_process from "child_process";
import * as program from "commander";
import * as inquirer from "inquirer";
import chalk from "chalk";
import * as fs from "fs-extra";
import * as Ora from "ora";

const exec = util.promisify(require("child_process").exec);

const spinner = new Ora();

program.version("0.1.0");

program.command("init").action(async (dir, cmd) => {
  try {
    const targetDir = path.join(process.cwd(), "demo");
    console.log(`${chalk.bold("CONFIGURE YOUR PROJECT")}`)
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "ssr",
        message: "Server side rendering",
        choices: ["Yes", "No"]
      },
      {
        type: "list",
        name: "state_management",
        message: "State management library",
        choices: ["Apollo GraphQL", "MobX", "MobX-State-Tree", "Redux", "None"]
      },
      {
        type: "list",
        name: "orm",
        message: "ORM",
        choices: ["Objection", "TypeORM", "Sequelize"]
      },
      {
        type: "list",
        name: "docker_config",
        message: "Create docker config",
        choices: ["Yes", "No"]
      }
    ]);
    console.log(answers);
    spinner.start("Initializing project");
    await fs.ensureDir(targetDir);
    setTimeout(() => spinner.succeed("Project initialized"), 1000);
  } catch (e) {
    console.log(e);
    spinner.fail("Something went wrong initializing the project");
  }
});

program.parse(process.argv);
