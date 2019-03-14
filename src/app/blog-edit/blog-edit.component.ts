import { Component, OnInit } from '@angular/core';

import { BlogHttpService } from '../blog-http.service';

import { ActivatedRoute, Router} from '@angular/router'

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
   
  public currentBlog;
  public possibleCategories = ["Comedy","Action","Drama","Technology"]; 
  constructor(private _route : ActivatedRoute, private router : Router, public blogHttpService:BlogHttpService,private toastr: ToastrService) { }

  ngOnInit() {
    console.log("in blg edit")

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

  public editThisBlog() : any {
    this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(

      data => {
        console.log("blog successfully edited")
        this.toastr.success("Blog successfully edited!!")
        setTimeout(()=>{
          this.router.navigate(['/home'])
        }, 1000)
      },
      error => {
        console.log("some error occured")
        this.toastr.error("Unable to save your changes")
      }

    )
  }

}
