import {Component, OnInit} from '@angular/core';
import {AbstractProjectGalleryDirective} from '../../../models/abstract-project-gallery';
import {IndividualInteriorProjectTitleTextData} from '../../../models/project/individual-interior-project-title-text-data';
import {loadingAnimation} from './animations/loading.animation';

@Component({
  selector: 'app-projects-gallery',
  templateUrl: './projects-gallery.component.html',
  animations: loadingAnimation
})
export class ProjectsGalleryComponent extends AbstractProjectGalleryDirective implements OnInit {

  private readonly INDIVIDUAL_CATEGORY_ID = 'INDIVIDUAL';
  private readonly COMMON_CATEGORY_ID = 'COMMON';

  public readonly individualProjectTitleTextData: IndividualInteriorProjectTitleTextData = {
    title: 'Individuálne projekty na mieru',
    firstSection: 'Podľa vašich požiadaviek a na základe viacerých stretnutí vypracujeme architektonickú štúdiu ' +
      'vášho budúceho domu. Výstupom je tlačená brožúra obsahujúca kompletný návrh domu.',
    secondSection: 'Následne pre vás spracujeme projekt stavby pre vydanie stavebného povolenia, s realizačnou ' +
      'podrobnosťou dokumentácie. Projekt obsahuje všetko potrebné pre úrady aj pre výstavbu. ',
    thirdSection: 'Štúdiou a projektom naše služby nekončia. Svojim klientom poskytujeme ďalšie doplnkové služby, ' +
      'ako sú návrh a projekt interiéru, zabezpečovanie dodávateľov stavby, autorský dozor a iné.'
  }

  public readonly interiorProjectTitleTextData: IndividualInteriorProjectTitleTextData = {
    title: 'Váš domov, váš interiér',
    firstSection: 'Podľa vašich požiadaviek k vami zvolenému projektu domu vypracujeme v ' +
      'dohodnutom rozsahu štúdiu interiéroveho návrhu.',
    secondSection: 'Vypracovanú štúdiu si s vami samozrejme prejdeme a všetko potrebné upravíme podľa vašich predstáv.',
    thirdSection: 'K projektu rodinného domu tak získate aj na mieru ušitý interiérový návrh, ' +
      'presne podľa vašich požiadaviek.'
  }

  public isIndividual = false;
  public isCommon = false;

  ngOnInit() {
    this.isIndividual = this.activatedRoute.snapshot.data.projectsCategoryId === this.INDIVIDUAL_CATEGORY_ID;
    this.isCommon = this.activatedRoute.snapshot.data.projectsCategoryId === this.COMMON_CATEGORY_ID;
  }

}
