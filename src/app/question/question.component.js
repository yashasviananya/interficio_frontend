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
var QuestionComponent = (function () {
    function QuestionComponent(router, questionService) {
        this.router = router;
        this.questionService = questionService;
        this.setObj = {};
        this.questionObj = [];
        this.verify = true;
        this.storyVerify = true;
    }
    QuestionComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // we will send user_id to find the current set no nd then fetch set and respective ques.
        this.questionService.fetchSet()
            .then(function (data) {
            _this.setObj = data;
            // console.log(this.setObj);
            _this.questionService.fetchQuestion()
                .then(function (data) {
                _this.questionObj = data;
                // console.log(this.questionObj);
            });
        })
            .catch(this.handleError);
        // this._flashMessagesService.show('We are in about component!', { timeout: 1000 });
    };
    QuestionComponent.prototype.onAnswerSubmit = function (form_data, id) {
        var _this = this;
        this.question_id = id;
        form_data.id = id;
        console.log(this);
        this.questionService.onAnswerSubmit(form_data)
            .then(function (data) {
            if (data.verified) {
                _this.verify = true;
                window.open(data.url);
            }
            else {
                _this.verify = false;
                //wait 3 Seconds and hide
                setTimeout(function () {
                    this.verify = true;
                    console.log(this.verify);
                }, 3000);
            }
        })
            .catch(this.handleError);
    };
    QuestionComponent.prototype.onStorySubmit = function (form_data, id) {
        var _this = this;
        // we will send set id match ans nd if correct increment the set id of corresponding user . nd reload the page 
        // so that fetch set and fetch ques automatically gets updated.
        form_data.id = id;
        this.questionService.onStorySubmit(form_data)
            .then(function (data) {
            if (data.verified) {
                window.location.reload();
                _this.router.navigate(['/home/question']);
            }
            else {
                _this.storyVerify = false;
            }
        })
            .catch(this.handleError);
    };
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'question',
        templateUrl: './question.component.html',
        styleUrls: ['question.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        question_service_1.QuestionService])
], QuestionComponent);
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map