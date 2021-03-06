#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var util = require("util");
var program = require("commander");
var inquirer = require("inquirer");
var chalk_1 = require("chalk");
var fs = require("fs-extra");
var Ora = require("ora");
var exec = util.promisify(require("child_process").exec);
var spinner = new Ora();
program.version("0.1.0");
program.command("init").action(function (dir, cmd) { return __awaiter(_this, void 0, void 0, function () {
    var targetDir, answers, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                targetDir = path.join(process.cwd(), "demo");
                console.log("" + chalk_1.default.bold("CONFIGURE YOUR PROJECT"));
                return [4 /*yield*/, inquirer.prompt([
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
                    ])];
            case 1:
                answers = _a.sent();
                console.log(answers);
                spinner.start("Initializing project");
                return [4 /*yield*/, fs.ensureDir(targetDir)];
            case 2:
                _a.sent();
                setTimeout(function () { return spinner.succeed("Project initialized"); }, 1000);
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                spinner.fail("Something went wrong initializing the project");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
program.parse(process.argv);
