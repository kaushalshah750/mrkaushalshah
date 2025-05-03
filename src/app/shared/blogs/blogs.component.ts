import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { supabase } from 'src/integration/client';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
  standalone: false
})
export class BlogsComponent {
  blogs: any

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private analytics: AnalyticsService
  ) {
    this.titleService.setTitle('Blog | Web & Business Insights by Kaushal Shah');
    this.metaService.updateTag({
      name: 'description',
      content: 'Actionable advice and guides on websites, freelancing, and digital growth. Learn why businesses need websites, pricing tips, and more.'
    });
  }

  ngOnInit() {
    this.getBlogs();
  }

  async getBlogs() {
    let { data: projects, error } = await supabase.from('blogs').select('created_at, excerpt, title, slug');
    if (error) {
      console.error('Error fetching blogs:', error);
    } else {
      this.blogs = projects
      console.log('Fetched blogs:', projects);
    }
  }

  trackClick(title: string) {
    this.analytics.sendEvent('blog_click', {
      button_name: "Read More",
      name: title,
      location: 'Blogs Page',
    });
  }
}
