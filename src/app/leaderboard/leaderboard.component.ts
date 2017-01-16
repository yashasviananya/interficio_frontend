import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  moduleId: module.id,
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['leaderboard.component.css']
})

export class LeaderBoardComponent implements OnInit {

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  private users: Object;
  private list_users = 0;
  private prevButton = false;
  private nextButton = true;
  private array_length: any;

  constructor(
    private router: Router,
     private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.fetchUserData(this.list_users);
  }

  fetchUserData = function(data) {
    this.questionService.fetchScore(data)
      .then( data => {
        console.log('data---',data);
        this.array_length = data.length;
        this.users = data;
        if(this.array_length  < 10) {
          this.nextButton = false;
        }
      })
      .catch( this.handleError);
  }


  performAction = function (btn) {
    if (btn.param === 'prevbtn' && this.list_users >= 10) {
      this.nextButton = true;
      this.list_users = this.list_users - 10;
    } else if (btn.param === 'nextbtn') {
      this.prevButton = true;
      this.list_users = this.list_users + 10;
    }
  if(this.list_users < 10) {
   this.prevButton = false;
  }
  this.fetchUserData(this.list_users);
  };

  onClickNext() {
    console.log("NEXT---");
    this.performAction({param: 'nextbtn'});
  }

  onClickPrev() {
    this.performAction({param: 'prevbtn'});
  }

}

