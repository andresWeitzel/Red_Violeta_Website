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
      id: 'identidad',
      src: 'assets/violencia2.jpg',
      alt: 'Manos formando un corazón frente a una bandera del orgullo',
      kicker: 'Identidad',
      title: 'Tu identidad es tuya',
      text: 'La violencia y la discriminación no lo son. Pedí ayuda.',
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
