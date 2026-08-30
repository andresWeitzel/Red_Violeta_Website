import { AfterViewInit, Component } from '@angular/core';

interface CarouselSlide {
  id: string;
  src: string;
  alt: string;
  kicker: string;
  title: string;
  titleLines?: string[];
  text: string;
}

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css',
})
export class CarrouselComponent implements AfterViewInit {
  slides: CarouselSlide[] = [
    {
      id: 'mensaje',
      src: 'assets/carousel-slide-1.jpg',
      alt: 'Dos personas acompañándose, en señal de apoyo',
      kicker: 'Red de ayuda',
      title: 'No más violencia contra las mujeres',
      titleLines: ['No más', 'violencia', 'contra', 'las mujeres'],
      text: 'No fue un mal día, no fue culpa de nadie. Hay quien te escucha.',
    },
    {
      id: 'contencion',
      src: 'assets/news/news-helpline.jpg',
      alt: 'Manos con un teléfono, pidiendo ayuda',
      kicker: 'Líneas 24 h',
      title: 'Hay quien te escucha',
      text: '144, 137 y 145 atienden las 24 horas. Llamá o escribí: no tenés que pasar esto sola.',
    },
    {
      id: 'discriminacion',
      src: 'assets/violencia3.jpg',
      alt: 'Cartel de protesta por igualdad y derechos',
      kicker: 'Igualdad',
      title: 'Nadie tiene derecho a discriminarte',
      text: 'Hay líneas de ayuda, organismos y novedades para acompañarte.',
    },
  ];

  ngAfterViewInit(): void {
    const jquery = (window as unknown as { $?: (el: HTMLElement) => { carousel: (opts: object) => void } }).$;
    const carousel = document.getElementById('inicioCarousel');
    if (jquery && carousel) {
      jquery(carousel).carousel({ interval: 7000, pause: 'hover' });
    }
  }
}
