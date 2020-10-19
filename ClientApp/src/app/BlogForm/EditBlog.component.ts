import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IBlog } from "../Blog/IBlog";
import { BlogService } from "../Blog/Blog.service";
import { ActivatedRoute,Router } from "@angular/router";




@Component({
  selector: "EditBlog",
  templateUrl: "./CreateBlog.component.html",
  


})
export class EditBlogComponent implements OnInit {

  constructor(private _blogservice: BlogService, private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  blog: IBlog;
  blogs: IBlog[];
  buttonText: string = "Edit";
  HeaderText: string = "Edit Blog";


  ngOnInit() {


    let blogId = this._activatedRoute.snapshot.params['Id'];

    // this._blogservice.getBlogs().subscribe(data => this.blogs = data);
    
    this.blogs=this._blogservice.getBlogs();


    // return this._blogservice.getBlog(blogId).subscribe(data => this.blog = data);

    this.blog=this._blogservice.getBlog(blogId);


  }
  //Edit Blog

  saveBlog(editedBlog:IBlog){

    if (editedBlog.id != null) {


      // this._blogservice.EditBlog(editedBlog).subscribe(data => this.blogs.push(editedBlog));

      this._blogservice.EditBlog(editedBlog);

      // this._router.navigate(["/blog"]).then(() => {
      //   window.location.reload();
      // });

     this._router.navigate(['/blog']);
      

    }

  }

  deleteCall(Id) {
    if (Id != null) {

      // this._blogservice.DeleteBlog(Id).subscribe();

      // this._router.navigate(["/blog"]).then(() => {
      //   window.location.reload();
      // });

      this._blogservice.DeleteBlog(Id);

      this._router.navigate(['/blog']);

    }
  }


}
