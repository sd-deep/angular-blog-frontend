import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {
 

  public currentBlog;

  constructor(private _route : ActivatedRoute, private router : Router, public blogHttpService:BlogHttpService,private toastr: ToastrService, private _location :Location ) {
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

  public deleteThisBlog():any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data =>{
        console.log("Blog deleted")
        this.toastr.success("Blog Deleted Sucessfully!!")
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000  )
      },
      error => {
        console.log("Some error occured")
        this.toastr.error("Opps!! That didn't work")
      }
    )
  }
   
  public goBackToPreviousPage () : any {

    this._location.back();
  }
  ngOnDestroy() {
    console.log("Blog view Destroy is called")
    
  }
  

}
