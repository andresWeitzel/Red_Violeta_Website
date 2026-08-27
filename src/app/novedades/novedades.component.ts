import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NewsItem {
  tag: string;
  source: string;
  title: string;
  excerpt: string;
  url: string;
  image?: string;
  imageAlt?: string;
}

interface DocumentItem {
  tag: string;
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-novedades',
  imports: [RouterLink],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css',
})
export class NovedadesComponent {
  news: NewsItem[] = [
    {
      tag: 'Nación',
      source: 'Ministerio de Justicia y Derechos Humanos',
      title: 'Plan Nacional contra la Discriminación',
      excerpt:
        'Siguen los encuentros federales. Esta semana comenzó un nuevo ciclo de foros, con organizaciones de Cuyo y Patagonia.',
      url: 'https://www.argentina.gob.ar/noticias/plan-nacional-contra-la-discriminacion-siguen-los-encuentros-federales',
      image: 'assets/carousel-slide-1.jpg',
      imageAlt: 'Dos personas acompañándose, en señal de apoyo',
    },
    {
      tag: 'Igualdad',
      source: 'CIFI',
      title: 'Compromiso con la igualdad de género',
      excerpt:
        'En el mes de la mujer, CIFI reforzó su compromiso con la equidad de género al adoptar oficialmente su Política de Igualdad de Género.',
      url: 'https://www.cifi.com/2019/04/05/compromiso-con-la-igualdad-de-genero/',
    },
  ];

  documents: DocumentItem[] = [
    {
      tag: 'Programa',
      title: 'Comunidades sin Violencias',
      description:
        'Fortalece los abordajes contra las violencias por razones de género en los municipios bonaerenses: equipos locales, hogares de protección y acceso al trabajo para mujeres y LGBTI+.',
      url: 'http://ministeriodelasmujeres.gba.gob.ar/img/ext/comunidades.pdf',
    },
    {
      tag: 'Informe',
      title: 'Memoria de Gestión INADI 2020',
      description:
        'Registro de las acciones del Instituto Nacional contra la Discriminación, la Xenofobia y el Racismo durante un año marcado por la pandemia y la crisis económica.',
      url: 'https://www.argentina.gob.ar/sites/default/files/memoria_anual_del_inadi_22-12-2020-convertido.pdf',
    },
  ];
}
