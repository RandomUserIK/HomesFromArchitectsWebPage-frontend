import {Component, Input, OnInit} from '@angular/core';
import {InstagramPost} from "../models/instagram-post";

@Component({
  selector: 'app-home-instagram-post',
  templateUrl: './home-instagram-post.component.html',
  styleUrls: ['./home-instagram-post.component.scss']
})
export class HomeInstagramPostComponent implements OnInit {

  @Input()
  public post: InstagramPost;

  constructor() {
  }

  ngOnInit(): void {
  }

}
