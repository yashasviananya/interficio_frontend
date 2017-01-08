"use strict";
var home_component_1 = require("./home/home.component");
var instruction_component_1 = require("./instruction/instruction.component");
var question_component_1 = require("./question/question.component");
var leaderboard_component_1 = require("./leaderboard/leaderboard.component");
// import { GroupComponent } from './group/group.component';
// import { RegisterComponent } from './register/register.component';
exports.routes = [
    //   { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    //   { path: 'invite', component: RegisterComponent},
    { path: 'home', component: home_component_1.HomeComponent,
        children: [
            { path: '', redirectTo: 'instruction' },
            { path: 'instruction', component: instruction_component_1.InstructionComponent },
            { path: 'question', component: question_component_1.QuestionComponent },
            { path: 'leaderboard', component: leaderboard_component_1.LeaderBoardComponent }
        ]
    }
];
exports.navigatableComponents = [
    //   LoginComponent,
    home_component_1.HomeComponent,
    instruction_component_1.InstructionComponent,
    question_component_1.QuestionComponent,
    leaderboard_component_1.LeaderBoardComponent
];
//# sourceMappingURL=app-routing.module.js.map