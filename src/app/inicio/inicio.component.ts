import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CarrouselComponent } from '../carrousel/carrousel.component';
import { MapComponent } from '../map/map.component';

export interface OfficialResource {
  jurisdiction: 'Nación' | 'CABA' | 'PBA';
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-inicio',
  imports: [CarrouselComponent, CardComponent, MapComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  private readonly resourceStep = 3;
  visibleCount = this.resourceStep;

  resources: OfficialResource[] = [
    {
      jurisdiction: 'Nación',
      title: 'Línea 144',
      description: 'Atención, contención y asesoramiento las 24 horas ante violencia por motivos de género.',
      url: 'https://www.argentina.gob.ar/linea-144',
    },
    {
      jurisdiction: 'Nación',
      title: 'Violencia familiar y sexual',
      description: 'Línea 137, WhatsApp y equipos móviles para situaciones de urgencia.',
      url: 'https://www.argentina.gob.ar/servicio/violencia-familiar-y-sexual',
    },
    {
      jurisdiction: 'Nación',
      title: 'Protección contra la violencia',
      description: 'Información oficial sobre derechos, tipos de violencia y cómo pedir ayuda.',
      url: 'https://www.argentina.gob.ar/justicia/proteccion-contra-toda-forma-de-violencia',
    },
    {
      jurisdiction: 'CABA',
      title: 'Línea 144 en la Ciudad',
      description: 'Orientación y derivación del Gobierno de la Ciudad para violencia de género.',
      url: 'https://buenosaires.gob.ar/vicejefatura/mujer/linea-144-atencion-victimas-de-violencia-de-genero',
    },
    {
      jurisdiction: 'CABA',
      title: 'Denuncias en CABA',
      description: 'Denuncia presencial, telefónica o en línea ante Policía de la Ciudad y el MPF.',
      url: 'https://buenosaires.gob.ar/seguridad/denuncias',
    },
    {
      jurisdiction: 'CABA',
      title: 'Ministerio Público Fiscal',
      description: 'Unidades de Orientación y Denuncia, y denuncia telefónica al 0800-333-7225.',
      url: 'https://www.mpfciudad.gob.ar/denuncias/denuncia-presencial',
    },
    {
      jurisdiction: 'PBA',
      title: 'Ministerio de las Mujeres (PBA)',
      description: 'Políticas de género, diversidad y prevención de violencias en la provincia.',
      url: 'https://www.gba.gob.ar/mujeres',
    },
    {
      jurisdiction: 'Nación',
      title: 'INADI',
      description: 'Denuncias y orientación por discriminación, xenofobia y racismo.',
      url: 'https://www.argentina.gob.ar/inadi',
    },
    {
      jurisdiction: 'Nación',
      title: 'Oficina de Violencia Doméstica',
      description: 'Atención 24 horas de la Corte Suprema para acceso a la Justicia.',
      url: 'https://www.ovd.gob.ar/ovd/',
    },
  ];

  get visibleResources(): OfficialResource[] {
    return this.resources.slice(0, this.visibleCount);
  }

  get hasMoreResources(): boolean {
    return this.visibleCount < this.resources.length;
  }

  showMoreResources(): void {
    this.visibleCount = Math.min(this.visibleCount + this.resourceStep, this.resources.length);
  }
}
