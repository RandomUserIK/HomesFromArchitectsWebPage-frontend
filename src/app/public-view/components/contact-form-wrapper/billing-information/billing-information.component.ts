import {Component} from '@angular/core';

interface BillingInformation {
  title: string;
  content: BillingInformationContent[];
}

interface BillingInformationContent {
  name: string;
  information: string[];
}

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html'
})
export class BillingInformationComponent {

  public billingInformation: BillingInformation[] = [
    {
      title: 'Office',
      content: [{
        name: 'Ulica Svornosti 42,',
        information: [
          'druhé poschodie, 821 06 Bratislava',
        ]
      }]
    },
    {
      title: 'Fakturačné údaje',
      content: [{
        name: 'Ing. arch. Dávid Chaľ,',
        information: [
          'Laborecká 52, 06601 Humenné',
          'IČO: 51 00 69 36',
          'DIČ: 1123647998 Nie je platca DPH'
        ]
      },
        {
          name: 'Ing. arch. Nikola Miklovičová,',
          information: [
            'Rozkvet 2074/156, 01701 Považská Bystrica',
            'IČO: 51 00 35 20',
            'DIČ: 1086801936 Nie je platca DPH.'
          ]
        }
      ]
    }
  ]
}
