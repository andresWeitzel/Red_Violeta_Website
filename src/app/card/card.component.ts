import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface HelpLine {
  number: string;
  phoneHref: string;
  title: string;
  description: string;
  email?: string;
  whatsapp?: string;
}

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  helpLines: HelpLine[] = [
    {
      number: '144',
      phoneHref: 'tel:144',
      title: 'Violencia de género',
      description:
        'Equipo interdisciplinario con perspectiva de género: derecho, psicología y trabajo social.',
      email: 'linea144@mingeneros.gob.ar',
      whatsapp: '5491127716463',
    },
    {
      number: '137',
      phoneHref: 'tel:137',
      title: 'Violencia familiar y sexual',
      description:
        'Si sos víctima o conocés una situación de violencia familiar o sexual, podés llamar las 24 horas.',
      email: 'vicontravio@jus.gov.ar',
      whatsapp: '5491131331000',
    },
    {
      number: '145',
      phoneHref: 'tel:145',
      title: 'Trata de personas',
      description:
        'Para prevenir o denunciar engaño, reclutamiento, explotación sexual o trabajo forzoso.',
      email: 'direcciondeplanificacion.trata@gmail.com',
      whatsapp: '5491165460580',
    },
    {
      number: '911',
      phoneHref: 'tel:911',
      title: 'Emergencia inmediata',
      description:
        'Si estás en peligro, ponete a resguardo y llamá al 911. Tené a mano la dirección lo más exacta posible.',
    },
  ];
}
