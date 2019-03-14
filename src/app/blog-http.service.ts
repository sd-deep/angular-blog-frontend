import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public currentBlog;

  public allBlogs;

  public baseUrl = "https://blogapp.edwisor.com/api/v1/blogs";

  public authToken = "ZmVlMzliOTU1OWZjMDcxYjI1MmM2NjM4ZTRmZDYxZWFhZGRjNGU1OWMxMDc1YTg1OTA5MjhkYmQ3ODhkMWYyYmU0MWJkZmNmMWE4YTUyZTg1YzYzMWE3MGNlYzBmZTAwY2QzZmJmNTgyOGM4NDQ5YTRiMmUzZTcwZmM4MjQxOWVlNQ==";
  constructor(public _http: HttpClient) {

    console.log("blog-http service constructor")
  }

  public getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.authToken);
    console.log(myResponse)
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId): any {
    let myResonse = this._http.get(this.baseUrl + '/view/' + currentBlogId + '?authToken=' + this.authToken);
    console.log(myResonse);
    return myResonse;

  }

  public createBlog(blogData): any {

    let myResonse = this._http.post(this.baseUrl + '/create?authToken=' + this.authToken,blogData);
    return myResonse;
  }

  public deleteBlog(blogId): any {
  
    let data = {}
    let myReponse = this._http.post(this.baseUrl + '/' + blogId + '/delete?authToken=' + this.authToken,blogId);
    return myReponse; 
  }

  public editBlog(blogId,blogData): any{

    let myResponse = this._http.put(this.baseUrl+'/'+blogId+'/edit?authToken='+this.authToken,blogId,blogData);
    return myResponse;
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle http call erro");
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
