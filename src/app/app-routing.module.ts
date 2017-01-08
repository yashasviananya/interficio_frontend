import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstructionComponent } from './instruction/instruction.component';
import { QuestionComponent } from './question/question.component';
import { LeaderBoardComponent } from './leaderboard/leaderboard.component';
// import { GroupComponent } from './group/group.component';
// import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
//   { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'invite', component: RegisterComponent},
  { path: 'home',  component: HomeComponent ,
    children: [
      { path: '', redirectTo: 'instruction'},
      { path: 'instruction', component: InstructionComponent},
      { path: 'question', component: QuestionComponent },
      { path: 'leaderboard', component: LeaderBoardComponent }
    ]
  }
];

export const navigatableComponents = [
//   LoginComponent,
  HomeComponent,
  InstructionComponent,
  QuestionComponent,
  LeaderBoardComponent
//   NoticeComponent,
//   RegisterComponent
];
