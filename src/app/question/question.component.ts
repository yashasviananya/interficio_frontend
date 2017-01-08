import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['question.component.css']
})

export class QuestionComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    
  }

}

