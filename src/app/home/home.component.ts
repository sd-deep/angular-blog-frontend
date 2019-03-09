import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

 public allBlogs;

  constructor(public blogService:BlogService) {

    console.log("Home constructor is called")
   }

  ngOnInit() {
    console.log("Home init is called")
    this.allBlogs = this.blogService.getAllBlogs(); 
    console.log(this.allBlogs)

  }

  ngOnDestroy() {
    console.log("Home Destroy is called")
  }

}
