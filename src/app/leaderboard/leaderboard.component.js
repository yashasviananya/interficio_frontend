"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var question_service_1 = require("../question.service");
var LeaderBoardComponent = (function () {
    function LeaderBoardComponent(router, questionService) {
        this.router = router;
        this.questionService = questionService;
    }
    LeaderBoardComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    LeaderBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.fetchScore()
            .then(function (data) {
            console.log(data);
            _this.users = data;
        })
            .catch(this.handleError);
        // this.users = [{ name: 'piyush',score: 10},{ name: 'swetank',score: 20},{name : 'akash', score: 30},{name: 'himanshu',score: 50}];
    };
    return LeaderBoardComponent;
}());
LeaderBoardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'leaderboard',
        templateUrl: './leaderboard.component.html',
        styleUrls: ['leaderboard.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LeaderBoardComponent);
exports.LeaderBoardComponent = LeaderBoardComponent;
//# sourceMappingURL=leaderboard.component.js.map