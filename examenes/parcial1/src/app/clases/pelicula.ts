import { TipoPelicula } from './tipo-pelicula.enum';

export class Pelicula {
    id?;
    nombre;
    tipo: TipoPelicula;
    fechaEstreno?;
    cantidadPublico;
    foto;


    getTipos() {
        return Object.keys(TipoPelicula).filter((e: any) => { return isNaN(e); });
    }

    getTipoSelected(tipo: TipoPelicula): string {
        return TipoPelicula[tipo];
    }
}
