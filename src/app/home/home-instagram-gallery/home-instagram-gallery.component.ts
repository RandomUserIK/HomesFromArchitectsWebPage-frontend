import {Component, OnInit} from '@angular/core';
import {InstagramSearchService} from "../services/instagram-search.service";
import {InstagramSearchResult} from "../models/instagram-search-result";

@Component({
  selector: 'app-home-instagram-gallery',
  templateUrl: './home-instagram-gallery.component.html',
  styleUrls: ['./home-instagram-gallery.component.scss']
})
export class HomeInstagramGalleryComponent implements OnInit {

  public posts: InstagramSearchResult;
  public loading: boolean = true;


  constructor(private instagramSearchService: InstagramSearchService) {
  }

  ngOnInit(): void {
    this.instagramSearchService.search().subscribe(
      (results) => {
        this.loading = false;
        this.posts = results;
      },
      (error) => {
        console.log(error)
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

}
