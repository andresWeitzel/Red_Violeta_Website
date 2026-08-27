import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrousel',
  imports: [RouterLink],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css',
})
export class CarrouselComponent implements AfterViewInit {
  slides = [
    {
      id: 'mensaje',
      kind: 'graphic' as const,
      kicker: 'Red de ayuda',
      title: 'No más violencia contra las mujeres',
      text: 'No fue un mal día. No fue culpa de nadie. Si estás en riesgo, pedí ayuda y registrá la denuncia.',
    },
    {
      id: 'identidad',
      kind: 'photo' as const,
      src: 'assets/violencia2.jpg',
      alt: 'Manos formando un corazón frente a una bandera del orgullo',
      kicker: 'Identidad',
      title: 'Tu identidad es tuya',
      text: 'La violencia y la discriminación no lo son. Denunciá.',
    },
    {
      id: 'discriminacion',
      kind: 'photo' as const,
      src: 'assets/violencia3.jpg',
      alt: 'Cartel de protesta por igualdad y derechos',
      kicker: 'Igualdad',
      title: 'Nadie tiene derecho a discriminarte',
      text: 'Hay líneas de ayuda y organismos para acompañarte. Denunciá.',
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
