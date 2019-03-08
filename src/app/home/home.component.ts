import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public allBlogs =[
   {
     "blogId":"1",
     "lastModified":"2018-10-19T11:19:47.854Z",
     "created":"2018-10-19T11:19:47.854Z",
     "tags":[],
     "author":"Admin",
     "category":"Comedy",
     "isPublished": true,
     "views":0,
     "bodyHtml":"This is the body of blog 1",
     "description":"This is the description of blog 1",
     "title":"This is blog 1"
   },
   {
    "blogId":"2",
    "lastModified":"2018-10-19T11:19:47.854Z",
    "created":"2018-10-19T11:19:47.854Z",
    "tags":[],
    "author":"Admin",
    "category":"Comedy",
    "isPublished": true,
    "views":0,
    "bodyHtml":"This is the body of blog 2",
    "description":"This is the description of blog 2",
    "title":"This is blog 2"
  },
  {
    "blogId":"3",
    "lastModified":"2018-10-19T11:19:47.854Z",
    "created":"2018-10-19T11:19:47.854Z",
    "tags":[],
    "author":"Admin",
    "category":"Comedy",
    "isPublished": true,
    "views":0,
    "bodyHtml":"This is the body of blog 3",
    "description":"This is the description of blog 3",
    "title":"This is blog 3"
  }
 ]
  constructor() { }

  ngOnInit() {
  }

}
