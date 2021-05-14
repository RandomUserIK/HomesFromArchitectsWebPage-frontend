import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IndividualInteriorProjectTitleTextData} from "../../../../../models/project/individual-interior-project-title-text-data";
import {ProjectsService} from '../../../../../services/projects-service';
import {AbstractProjectView} from '../general/project-view/abstract-project-view';

@Component({
  selector: 'app-individual-interior-project',
  templateUrl: './individual-interior-project.component.html',
  styleUrls: ['./individual-interior-project.component.scss']
})
export class IndividualInteriorProjectComponent extends AbstractProjectView implements OnInit {

  public readonly INDIVIDUAL_CATEGORY_ID = 'INDIVIDUAL';
  public readonly INTERIOR_CATEGORY_ID = 'INTERIOR_DESIGN';

  public readonly individualProjectTitleTextData: IndividualInteriorProjectTitleTextData = {
    title: 'Individuálne projekty na mieru',
    subTitleSection: 'Súčasťou našej tvorby sú aj individuálne projekty na mieru.' +
      'K našim projektom naviac poskytujeme doplnkové služby, presne podľa vašich potrieb.',
    firstSection: 'Podľa vašich požiadaviek a na základe viacerých stretnutí vypracujeme architektonickú štúdiu ' +
      'vášho budúceho domu. Výstupom je tlačená brožúra obsahujúca kompletný návrh domu.',
    secondSection: 'Následne pre vás spracujeme projekt stavby pre vydanie stavebného povolenia, s realizačnou ' +
      'podrobnosťou dokumentácie. Projekt obsahuje všetko potrebné pre úrady aj pre výstavbu. ',
    thirdSection: 'Štúdiou a projektom naše služby nekončia. Svojim klientom poskytujeme ďalšie doplnkové služby, ' +
      'ako sú návrh a projekt interiéru, zabezpečovanie dodávateľov stavby, autorský dozor a iné.'
  }

  public readonly interiorProjectTitleTextData: IndividualInteriorProjectTitleTextData = {
    title: 'Váš domov, váš interiér',
    subTitleSection: 'Poskytujeme aj služby interérového dizajnu. Vy máte predstavu a my vám ju pomôžeme zrealizovať.',
    firstSection: 'Podľa vašich požiadaviek k vami zvolenému projektu domu vypracujeme v ' +
      'dohodnutom rozsahu štúdiu interiéroveho návrhu.',
    secondSection: 'Vypracovanú štúdiu si s vami samozrejme prejdeme a všetko potrebné upravíme podľa vašich predstáv.',
    thirdSection: 'K projektu rodinného domu tak získate aj na mieru ušitý interiérový návrh, ' +
      'presne podľa vašich požiadaviek.'
  }

  constructor(projectService: ProjectsService,
              private _route: ActivatedRoute) {
    super(projectService);
  }

  ngOnInit(): void {
    const projectId = +this._route.snapshot.params.id;
    this.init(projectId);
  }

}
