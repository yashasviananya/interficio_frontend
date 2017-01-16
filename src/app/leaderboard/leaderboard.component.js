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
        this.list_users = 0;
        this.prevButton = false;
        this.nextButton = true;
        this.fetchUserData = function (data) {
            var _this = this;
            this.questionService.fetchScore(data)
                .then(function (data) {
                console.log('data---', data);
                _this.array_length = data.length;
                _this.users = data;
                if (_this.array_length < 10) {
                    _this.nextButton = false;
                }
            })
                .catch(this.handleError);
        };
        this.performAction = function (btn) {
            if (btn.param === 'prevbtn' && this.list_users >= 10) {
                this.nextButton = true;
                this.list_users = this.list_users - 10;
            }
            else if (btn.param === 'nextbtn') {
                this.prevButton = true;
                this.list_users = this.list_users + 10;
            }
            if (this.list_users < 10) {
                this.prevButton = false;
            }
            this.fetchUserData(this.list_users);
        };
    }
    LeaderBoardComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    LeaderBoardComponent.prototype.ngOnInit = function () {
        this.fetchUserData(this.list_users);
    };
    LeaderBoardComponent.prototype.onClickNext = function () {
        console.log("NEXT---");
        this.performAction({ param: 'nextbtn' });
    };
    LeaderBoardComponent.prototype.onClickPrev = function () {
        this.performAction({ param: 'prevbtn' });
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
    __metadata("design:paramtypes", [router_1.Router,
        question_service_1.QuestionService])
], LeaderBoardComponent);
exports.LeaderBoardComponent = LeaderBoardComponent;
//# sourceMappingURL=leaderboard.component.js.map