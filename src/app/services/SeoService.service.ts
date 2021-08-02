import { Injectable } from '@angular/core';
import {Title, Meta, MetaDefinition, SafeUrl} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) { }
  updateTitle(title: string){
    this.title.setTitle(title);
  }
  updateMetaTags(metaTags: MetaDefinition[]){
    metaTags.forEach(m=> this.meta.updateTag(m));
  }
  updatePhotoMetaTags(photo: any){
   this.meta.updateTag( { name: 'og:image', content: photo });
   this.meta.updateTag( { name: 'twitter:image', content: photo });
  }
}
