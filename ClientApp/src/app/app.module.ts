import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DatePipe } from "@angular/common";




import { AppComponent } from './app.component';
import { BlogListComponent } from './Blog/BlogList.component';
import { CategoryFilterComponent } from './Addons/CategoryFilter.component';
import { BlogService } from './Blog/Blog.service';
import { BlogPreviewComponent } from './Blog/BlogPreview.component';
import { CreateBlogComponent } from './BlogForm/CreateBlog.component';
import { EditBlogComponent } from './BlogForm/EditBlog.component';



const approutes: Routes = [
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/form', component: CreateBlogComponent },
  { path: 'blog/:Id', component: BlogPreviewComponent, pathMatch: "full" },
  { path: 'blog/edit/:Id', component: EditBlogComponent, pathMatch: "full" },
  { path: '', redirectTo: '/blog', pathMatch: "full" },
  { path: '**', redirectTo: '/blog', pathMatch: "full" },
  

]

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    CategoryFilterComponent,
    BlogPreviewComponent,
    CreateBlogComponent,
    EditBlogComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  exports: [RouterModule],
  providers: [BlogService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
