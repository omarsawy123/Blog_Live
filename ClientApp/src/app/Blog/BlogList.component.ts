// This Component is used to List BLogs to user

import { Component, OnInit } from "@angular/core";
import { BlogService } from "./Blog.service";
import { IBlog } from "./IBlog";

@Component({
  selector: "blogList",
  templateUrl: "./BlogList.component.html",
})

export class BlogListComponent implements OnInit {
  blogs: IBlog[];

  currentSelectedOption: string = "All";

  constructor(private _blogservice: BlogService) {

  }

  ngOnInit() {

    return this.blogs= this._blogservice.getBlogs();
    

  }

  getAll() {

    

    return this.blogs.length;

  }

  //Category Filter Methods 
  getTechno() {
    return this.blogs.filter(e => e.category === "Technology").length;

  }

  getSoftware() {

    return this.blogs.filter(e => e.category === "Software").length;

  }

  getHardware() {

    return this.blogs.filter(e => e.category === "Hardware").length;

  }

  //when selected Category changes call this

  OnOptionChanged(SelectedValue: string) {

    this.currentSelectedOption = SelectedValue;
    

  }

}
