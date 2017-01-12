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

  constructor(
    private router: Router,
     private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.questionService.fetchScore()
      .then( data=> {
        console.log(data);
        this.users = data;
      })
      .catch( this.handleError );
    // this.users = [{ name: 'piyush',score: 10},{ name: 'swetank',score: 20},{name : 'akash', score: 30},{name: 'himanshu',score: 50}];

  }

}

