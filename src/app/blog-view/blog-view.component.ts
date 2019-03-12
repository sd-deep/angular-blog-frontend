import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {
 

  public currentBlog;

  constructor(private _route : ActivatedRoute, private router : Router, public blogHttpService:BlogHttpService ) {
    console.log("in constructor")
   }

  ngOnInit() {
    console.log("in blg view constructor")

    let myBlogId = this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId)
    
   this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data =>{

        console.log("loading data");
        console.log(data)
        this.currentBlog=data["data"];
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );



  }

  ngOnDestroy() {
    console.log("Blog view Destroy is called")
    
  }
  

}
