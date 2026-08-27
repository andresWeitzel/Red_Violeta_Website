import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface HelpPlace {
  id: string;
  shortName: string;
  city: string;
  hours: string;
  name: string;
  about: string;
  address: string;
  email?: string;
  phone: string;
  phoneHref: string;
  website: string;
  directionsUrl: string;
  mapSrc: SafeResourceUrl;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  private readonly sanitizer = inject(DomSanitizer);
  selectedId = 'ministerio';

  places: HelpPlace[] = [
    {
      id: 'ministerio',
      shortName: 'Ministerio de las Mujeres',
      city: 'La Plata',
      hours: 'Consultá horarios en el sitio',
      name: 'Ministerio de las Mujeres, Políticas de Género y Diversidad Sexual',
      about:
        'Políticas para la igualdad de géneros y para prevenir y erradicar la violencia por razones de género en la provincia de Buenos Aires.',
      address: 'Calle 6 N° 950 (esquina 51), La Plata (1900)',
      email: 'contacto@ministeriodelasmujeres.gba.gob.ar',
      phone: '0221 422-2546',
      phoneHref: 'tel:+542214222546',
      website: 'https://www.gba.gob.ar/mujeres',
      directionsUrl:
        'https://www.google.com/maps/search/?api=1&query=Calle%206%20950%20La%20Plata',
      mapSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13086.760988668932!2d-57.9480185!3d-34.9142221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca197542f83c309f!2sMinisterio%20de%20las%20Mujeres%2C%20Pol%C3%ADticas%20de%20G%C3%A9nero%2C%20y%20Diversidad%20Sexual!5e0!3m2!1spt-PT!2sar!4v1608353571669!5m2!1spt-PT!2sar'
      ),
    },
    {
      id: 'inadi',
      shortName: 'INADI',
      city: 'CABA',
      hours: 'Consultá horarios en el sitio',
      name: 'Instituto Nacional contra la Discriminación, la Xenofobia y el Racismo',
      about:
        'Recibe denuncias y brinda orientación ante situaciones de discriminación, xenofobia y racismo en todo el país.',
      address: 'Av. de Mayo 1401, CABA',
      phone: '0800-999-2345',
      phoneHref: 'tel:08009992345',
      website: 'https://www.argentina.gob.ar/inadi',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=INADI%20Av%20de%20Mayo%201401%20CABA',
      mapSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13135.213282583894!2d-58.3863727!3d-34.6091346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81498f52765f960d!2sINADI%20%7C%20Instituto%20Nacional%20contra%20la%20Discriminaci%C3%B3n%2C%20la%20Xenofobia%20y%20el%20Racismo!5e0!3m2!1spt-PT!2sar!4v1609696979313!5m2!1spt-PT!2sar'
      ),
    },
    {
      id: 'ovd',
      shortName: 'OVD',
      city: 'CABA',
      hours: 'Atención las 24 horas',
      name: 'Oficina de Violencia Doméstica — Corte Suprema de Justicia',
      about:
        'Atención las 24 horas para orientación y acceso a la Justicia en situaciones de violencia doméstica.',
      address: 'Lavalle 1250, CABA',
      phone: '011 4123-4510',
      phoneHref: 'tel:+541141234510',
      website: 'https://www.ovd.gob.ar/ovd/',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=OVD%20Lavalle%201250%20CABA',
      mapSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.217897346176!2d-58.3844394!3d-34.602784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4a09f7ad7e65b51!2sovd!5e0!3m2!1spt-PT!2sar!4v1608774115689!5m2!1spt-PT!2sar'
      ),
    },
  ];

  get selected(): HelpPlace {
    return this.places.find((place) => place.id === this.selectedId) ?? this.places[0];
  }

  selectPlace(id: string): void {
    this.selectedId = id;
  }
}
