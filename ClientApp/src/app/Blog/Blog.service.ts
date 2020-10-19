// Please when using API server change the methods type from ..
// IBlog[] --> Observable<IBlog[]>
// IBlog --> Observable<IBlog>


import { Injectable } from "@angular/core";
import { IBlog } from "./IBlog";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { observable, Observable } from "rxjs";



@Injectable()
export class BlogService {

  constructor(private http: HttpClient) {

  }

  blogs: IBlog[] = [
    {
      id: "1",
      name: "First Blog",
      AuthorId: "1",
      datePublished: "10/10/2020",
      content: "First Blog Content",
      category: "Software"
    },
    {
      id: "2",
      name: "Second Blog",
      AuthorId: "2",
      datePublished: "10/10/2020",
      content: "Second Blog Content",
      category: "Hardware"
    },
    {
      id: "3",
      name: "Third Blog",
      AuthorId: "3",
      datePublished: "10/10/2020",
      content: "Third Blog Content",
      category: "Technology"
    },
    {
      id: "4",
      name: "Fourth Blog",
      AuthorId: "4",
      datePublished: "10/10/2020",
      content: "Fourth Blog Content",
      category: "Software"
    }
  ]


  getBlogs(): IBlog[] {

    // return this.http.get<IBlog[]>("Your Api Url Here");
    return this.blogs;

  }

  getBlog(Id: string): IBlog {
    // return this.http.get<IBlog>("Your Api Url Here"+Id)
    return this.blogs.find(e => e.id == Id);

  }

  postBlog(newBlog: IBlog): IBlog {

    // return this.http.post<IBlog>("http://localhost:3000/blogs", newBlog);
    this.blogs.push(newBlog);
    return newBlog;

  }

  EditBlog(editedBlog: IBlog): void {

    // return this.http.put<IBlog>("http://localhost:3000/blogs", editedBlog);

    let result = this.blogs.find(e => e.id == editedBlog.id);

    result.name=editedBlog.name;
    result.category=editedBlog.category;
    result.content=editedBlog.content;

  }

  DeleteBlog(Id: string):void {
    // return this.http.delete<void>("http://localhost:3000/blogs/" + Id);

    this.blogs.splice(Number(Id)-1,1);
  }

}
