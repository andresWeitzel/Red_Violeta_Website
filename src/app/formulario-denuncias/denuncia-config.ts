export type DenunciaKind = 'genero' | 'familiar' | 'trata' | 'otros';

export interface ForwardContact {
  id: string;
  name: string;
  area: string;
  phone: string;
  email: string;
}

export const FORWARD_CONTACTS: ForwardContact[] = [
  {
    id: 'linea-144',
    name: 'Línea 144',
    area: 'Violencia por motivos de género',
    phone: '144',
    email: 'linea144@mingeneros.gob.ar',
  },
  {
    id: 'linea-137',
    name: 'Programa Las Víctimas contra las Violencias',
    area: 'Violencia familiar y sexual',
    phone: '137',
    email: 'vicontravio@jus.gov.ar',
  },
  {
    id: 'linea-145',
    name: 'Línea 145',
    area: 'Trata y explotación de personas',
    phone: '145',
    email: 'direcciondeplanificacion.trata@gmail.com',
  },
];

export const DENUNCIA_KINDS: { id: DenunciaKind; label: string }[] = [
  { id: 'genero', label: 'Violencia de género' },
  { id: 'familiar', label: 'Violencia familiar y sexual' },
  { id: 'trata', label: 'Trata de personas' },
  { id: 'otros', label: 'Otra situación' },
];

export const DENUNCIA_MAX_FILES = 5;
export const DENUNCIA_MAX_FILE_MB = 8;
export const DENUNCIA_ACCEPT =
  '.pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.mp3,.mp4,.ogg,.wav';
export const DENUNCIA_ACCEPT_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'audio/mpeg',
  'video/mp4',
  'audio/ogg',
  'audio/wav',
];
