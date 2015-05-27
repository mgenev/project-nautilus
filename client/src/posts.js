import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Config} from './services/config';

@inject(HttpClient, Config)
export class Posts {
  heading = 'Posts';
  posts = [];
  endPoint = 'posts';

  constructor(http, config){
    this.http = http;
    this.config = config;
  }

  async activate() {
    let posts = await this.http.get(`${this.config.server.url}${this.endPoint}`);
    this.posts = posts.content;
  }
}
