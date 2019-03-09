import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {
 

  public currentBlog;

  constructor(private _route : ActivatedRoute, private router : Router, public blogService:BlogService ) {
    console.log("in constructor")
   }

  ngOnInit() {
    console.log("in blg view constructor")

    let myBlogId = this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId)
    
    this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);



  }

  ngOnDestroy() {
    console.log("Blog view Destroy is called")
    
  }
  

}
