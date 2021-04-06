import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-image-carousel',
  templateUrl: './project-image-carousel.component.html',
  styleUrls: ['./project-image-carousel.component.scss']
})
export class ProjectImageCarouselComponent implements OnInit {

  @Input() projectPhotoPaths: Array<string>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
