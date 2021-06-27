import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../../../../../services/projects-service';
import {PageableProjectMessageResource} from '../../../../../models/web/response-bodies/project/pageable-project-message-resource';
import {CarouselProject} from '../../models/CarouselProject';


@Component({
  selector: 'app-home-image-carousel',
  templateUrl: './home-image-carousel.component.html'
})
export class HomeImageCarouselComponent implements OnInit {
  public carouselItems: CarouselProject[];
  public fetched = false;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.projectsService.getSpecifiedNumberOfProjects(0, 'COMMON', 5)
      .subscribe((response: PageableProjectMessageResource) => {
          this.carouselItems = []
          response.projects.forEach(value => {
            this.carouselItems.push({id: value.id, image: value.titleImage, title: value.title})
          })
          this.fetched = true
        }
      )
  }
}
