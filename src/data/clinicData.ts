/**
 * CIDEO Odontología - datos del consultorio.
 * Fuente: ficha de Google Maps e Instagram @odontologia.cideo.
 * Todo lo que se muestra en la web sale de acá: para otro consultorio alcanza con cambiar este archivo.
 */

export const CLINIC = {
  name: 'CIDEO Odontología',
  initials: 'CI',
  professional: 'Dr. Pinciroli y Dra. Pignataro',
  street: 'Av. Perón 3895',
  locality: 'Ciudad de Buenos Aires',
  province: 'Argentina',
  fullAddress: 'Av. Tte. Gral. Juan Domingo Perón 3895, Ciudad Autónoma de Buenos Aires',
  phone: '011 4218-0801',
  // Número publicado en el enlace de WhatsApp de su Instagram.
  whatsappNumber: '541137037798',
  whatsappDisplay: '+54 11 3703-7798',
  instagramHandle: '@odontologia.cideo',
  instagramUrl: 'https://www.instagram.com/odontologia.cideo/',
  mapsUrl: 'https://maps.app.goo.gl/aWeDYdU17sCpiM24A',
  coordinates: { lat: -34.6658755, lng: -58.4162989 },
  // Calificación visible en la ficha de Google Maps.
  googleRating: '4.4',
  googleReviews: 23,
  // Foto del consultorio o de los profesionales (ruta dentro de /public). Sin foto, se muestra un recuadro reservado.
  photo: null as string | null,
  // Textos que se repiten en el inicio, el pie y la descripción para Google.
  servicesSummary:
    'estética odontológica, odontología integral, ortodoncia, prótesis, implantes, escaneo digital y atención de urgencias',
  // Medios de pago: sin confirmar para este consultorio.
  paymentMethods: [] as string[],
  hoursSummary: 'Lunes a jueves de 9 a 20 hs',
  headline: 'Tu sonrisa,',
  headlineHighlight: 'en las mejores manos',
  // Lo que se muestra debajo del nombre en el menú.
  locationLabel: 'Ciudad de Buenos Aires',
};

export interface Highlight {
  icon: 'star' | 'heart' | 'calendar' | 'users';
  title: string;
  text: string;
}

// Las tres cajitas debajo del inicio. Se pueden sumar otras que el consultorio confirme
// (por ejemplo "Clínica habilitada" o la cantidad de pacientes atendidos).
export const HIGHLIGHTS: Highlight[] = [
  // A CONFIRMAR con el consultorio: cifra de ejemplo para la demo.
  { icon: 'users', title: '+1.000 pacientes felices', text: 'Confían en nosotros para cuidar su sonrisa' },
  { icon: 'heart', title: 'Atención personalizada', text: 'Cálida y cercana en cada consulta' },
  { icon: 'calendar', title: 'Turnos rápidos', text: 'Confirmación vía WhatsApp' },
];

export interface DentalService {
  id: string;
  name: string;
  description: string;
  icon: 'stethoscope' | 'sparkles' | 'layers' | 'shield' | 'activity' | 'smile' | 'crown' | 'anchor' | 'gem';
}

export interface TeamMember {
  role: string;
  /** Nombre y foto: quedan en null hasta que el consultorio los envíe. */
  name: string | null;
  photo: string | null;
  /** Texto breve opcional de la persona; si falta se usa uno neutro. */
  bio?: string;
}

// Equipo de trabajo del consultorio. Completar nombre y foto de cada integrante.
export const TEAM: TeamMember[] = [
  { role: 'Odontólogo', name: 'Dr. Pinciroli', photo: null },
  {
    role: 'Odontóloga',
    name: 'Dra. Pignataro',
    photo: null,
    bio: 'Atiende en CIDEO Odontología junto al Dr. Pinciroli. Escribinos por WhatsApp para coordinar tu turno.',
  },
];

export const SERVICES: DentalService[] = [
  {
    id: 'estetica',
    name: 'Estética odontológica',
    description: 'Tratamientos para mejorar el color, la forma y la armonía de tu sonrisa.',
    icon: 'sparkles',
  },
  {
    id: 'integral',
    name: 'Odontología integral',
    description: 'Revisión y cuidado de tu salud bucal de forma completa, con un plan pensado para vos.',
    icon: 'stethoscope',
  },
  {
    id: 'limpieza',
    name: 'Limpieza dental',
    description: 'Remoción de sarro y placa para mantener tus encías y tus dientes sanos.',
    icon: 'smile',
  },
  {
    id: 'operatoria',
    name: 'Operatoria dental (caries)',
    description: 'Arreglo de caries y restauraciones para devolverle forma y función a tus dientes.',
    icon: 'stethoscope',
  },
  {
    id: 'conducto',
    name: 'Tratamiento de conducto',
    description: 'Endodoncia para conservar tu diente cuando el nervio está afectado.',
    icon: 'activity',
  },
  {
    id: 'exodoncia',
    name: 'Exodoncia',
    description: 'Extracción de piezas dentales cuando es necesaria, con indicaciones claras para el después.',
    icon: 'shield',
  },
  {
    id: 'ortodoncia',
    name: 'Ortodoncia y ortopedia',
    description: 'Corrección de la posición de los dientes y acompañamiento del desarrollo de los maxilares.',
    icon: 'sparkles',
  },
  {
    id: 'protesis',
    name: 'Prótesis',
    description: 'Reposición de piezas dentales, fijas o removibles, para recuperar la masticación y la sonrisa.',
    icon: 'layers',
  },
  {
    id: 'corona',
    name: 'Coronas, perno y poste',
    description: 'Reconstrucción y cobertura de piezas dentales para devolverles forma, tamaño y resistencia.',
    icon: 'crown',
  },
  {
    id: 'implantes',
    name: 'Implantes',
    description: 'Reposición de piezas dentales con implantes para recuperar la función y la estética.',
    icon: 'gem',
  },
  {
    id: 'escaneo',
    name: 'Escaneo digital',
    description: 'Escaneo digital de tu boca para planificar tu tratamiento.',
    icon: 'activity',
  },
  {
    id: 'urgencias',
    name: 'Urgencias',
    description: 'Si tenés dolor o una urgencia, escribinos por WhatsApp y vemos cómo atenderte.',
    icon: 'shield',
  },
];

export interface ScheduleDay {
  dayName: string;
  dayIndex: number; // 0 = domingo ... 6 = sábado
  open: string | null;
  close: string | null;
}

export const SCHEDULE: ScheduleDay[] = [
  { dayName: 'Lunes', dayIndex: 1, open: '09:00', close: '20:00' },
  { dayName: 'Martes', dayIndex: 2, open: '09:00', close: '20:00' },
  { dayName: 'Miércoles', dayIndex: 3, open: '09:00', close: '20:00' },
  { dayName: 'Jueves', dayIndex: 4, open: '09:00', close: '20:00' },
  { dayName: 'Viernes', dayIndex: 5, open: '09:00', close: '17:00' },
  { dayName: 'Sábado', dayIndex: 6, open: null, close: null },
  { dayName: 'Domingo', dayIndex: 0, open: null, close: null },
];

const TIME_ZONE = 'America/Argentina/Buenos_Aires';

export interface ClinicStatus {
  isOpen: boolean;
  badge: string;
  detail: string;
}

const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

export function getClinicStatus(now: Date = new Date()): ClinicStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now);

  const weekday = (parts.find((p) => p.type === 'weekday')?.value || '').toLowerCase().slice(0, 3);
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10) % 24;
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
  const dayMap: Record<string, number> = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
  const today = dayMap[weekday] ?? now.getDay();
  const minutes = hour * 60 + minute;

  const day = SCHEDULE.find((d) => d.dayIndex === today);
  if (day?.open && day.close) {
    if (minutes >= toMinutes(day.open) && minutes < toMinutes(day.close)) {
      return { isOpen: true, badge: 'Abierto ahora', detail: `Cierra a las ${day.close} hs` };
    }
    if (minutes < toMinutes(day.open)) {
      return { isOpen: false, badge: 'Cerrado ahora', detail: `Abre hoy a las ${day.open} hs` };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const next = SCHEDULE.find((d) => d.dayIndex === (today + i) % 7);
    if (next?.open) {
      const cuando = i === 1 ? 'mañana' : `el ${next.dayName.toLowerCase()}`;
      return { isOpen: false, badge: 'Cerrado por hoy', detail: `Abre ${cuando} a las ${next.open} hs` };
    }
  }
  return { isOpen: false, badge: 'Cerrado ahora', detail: '' };
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
