import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {RegisterService} from "../register.service";

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  ngOnInit() {
      this.registerService.getUserDetail()
      .then (res => {
        console.log("res--",res);
        if(res.not_verified) {
          this.router.navigate(['/login']);
        } else {
          let user_id = res.data.user_id;
          let name = res.data.user_name;
          console.log(user_id,name);
        }

       })
      .catch(error => console.log("error--",error))
  }

}

