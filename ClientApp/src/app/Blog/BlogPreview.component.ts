// This Component is used to View a blog details for user

import { Component, OnInit } from "@angular/core";
import { BlogService } from "./Blog.service";
import { IBlog } from "./IBlog";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./BlogPreview.component.html",
})

export class BlogPreviewComponent implements OnInit {
  blog: IBlog;

  constructor(private blogservice: BlogService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let blogId = this._activatedRoute.snapshot.params['Id'];

    // return this.blogservice.getBlog(blogId).subscribe(blogdata => this.blog = blogdata);
    this.blog = this.blogservice.getBlog(blogId);
  }


}
