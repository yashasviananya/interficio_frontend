import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { config } from './config';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class QuestionService {

  constructor(private http: Http) { }
  private getSetUrl = config.url + 'api/v1/question/fetchSet';
  private getQuestionUrl = config.url + 'api/v1/question/fetchQuestion';
  private headers = new Headers({'Content-Type': 'application/json'});
//   private token = localStorage.getItem("token");

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getSet() : Promise<any> {
    return this.http
    .get(this.getSetUrl ,{headers: this.headers})
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);
  }

  getQuestion(): Promise<any> {
    return this.http
    .get(this.getQuestionUrl , {headers: this.headers})
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);
  }
}


