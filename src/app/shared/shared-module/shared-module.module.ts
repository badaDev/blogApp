import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from 'src/app/components/shared/post-card/post-card.component';
import { MorePostsButtonComponent } from 'src/app/components/shared/more-posts-button/more-posts-button.component';
import { NewsletterComponent } from 'src/app/components/shared/newsletter/newsletter.component';



@NgModule({
  declarations: [
    PostCardComponent,
    MorePostsButtonComponent,
    NewsletterComponent,
  ],

  imports: [
    CommonModule,
  ],

  exports: [
    PostCardComponent,
    MorePostsButtonComponent,
    NewsletterComponent
  ]
})
export class SharedModuleModule { }
