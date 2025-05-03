import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { supabase } from 'src/integration/client';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  blog: any
  slug: string = ""

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private viewportScroller: ViewportScroller,
    private route: ActivatedRoute
  ) {
    this.viewportScroller.scrollToPosition([0, 0]);

    // window.scrollTo({ top: 0, behavior: 'smooth' }); // or behavior: 'auto'
    this.slug = this.route.snapshot.paramMap.get('title')!;
  }

  async ngOnInit() {
    await this.getBlog();
    this.titleService.setTitle(this.blog.title + ' | Kaushal Shah');
    this.metaService.updateTag({
      name: 'description',
      content: this.blog.meta_desc
    });
  }

  async getBlog() {
    let { data: projects, error } = await supabase
      .from('blogs')
      .select(`created_at, 
        title, 
        sub_title, 
        content, 
        slug, 
        excerpt, 
        meta_desc, 
        category (
          id,
          category
        )`)
      .eq('slug', this.slug)
      .single();
    if (error) {
      console.error('Error fetching blogs:', error);
    } else {
      if (projects) {
        this.blog = projects;
      }
    }
  }

}
