import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['leaderboard.component.css']
})

export class LeaderBoardComponent implements OnInit {
  
  private users: Object;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.users = [{ name: 'piyush',score: 10},{ name: 'swetank',score: 20},{name : 'akash', score: 30},{name: 'himanshu',score: 50}];
  }

}

