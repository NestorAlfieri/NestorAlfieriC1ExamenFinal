
export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string | number; 
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}
export const processNewsData = (data: any[]): INoticiasNormalizadas[] => {
  return data.map((n) => ({
    id: n.id,
    titulo: formatTitle(n.titulo),
    descripcion: n.descripcion,
    fecha: String(n.fecha), 
    esPremium: n.esPremium,
    imagen: n.imagen,
    descripcionCorta: n.descripcion.substring(0, 100),
  }));
};
export const formatTitle = (title: string): string => {
  return title
    .split(' ')
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ');
};
export const formatFecha = (fecha: Date): string => {
  const ahora = new Date();
  const minutosTranscurridos = Math.floor(
    (ahora.getTime() - fecha.getTime()) / 60000
  );
  return `Hace ${minutosTranscurridos} minutos`;
};

  