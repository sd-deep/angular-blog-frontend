import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  
  
  public allBlogs =[
    {
      "blogId":"1",
      "lastModified":"2018-10-19T11:19:47.854Z",
      "created":"2018-10-19T11:19:47.854Z",
      "tags":["humour","funny","standup Comedy"],
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
     "bodyHtml":"<h1>This is the body<h1> of blog 2",
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

  constructor() { 

    console.log("Blog service constructor is called")
  }

  public getAllBlogs() : any{

    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId): any{

    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }

    return this.currentBlog;
  }
}
