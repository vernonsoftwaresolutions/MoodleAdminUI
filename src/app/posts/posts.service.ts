import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    //todo-add some sort of loading animation
    return this.http.get('https://cfstack.vssdevelopment.com/dev/moodle/stacks?tagKey=TYPE&tagValue=TENANT')
      .map(res => res.json());
  }

  // Delete a stack given it's stack name
  deleteStack(stackName: string) {
    //not the best practice to do string concatentation here but im okay with it for now getting to MVP
    return this.http.delete('https://cfstack.vssdevelopment.com/dev/moodle/stacks/' + stackName)
    .map(res => res.json());
  }
}
