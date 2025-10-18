interface TarjetaProductoProps {
  titulo: string;
  descripcion: string;
  especificaciones: string[];
  imagen?: string;
}

const TarjetaProducto = ({ titulo, descripcion, especificaciones, imagen }: TarjetaProductoProps) => {
  return (
    <div className="glass-surface rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl">
      {imagen && (
        <div className="h-48 bg-muted overflow-hidden">
          <img 
            src={imagen} 
            alt={titulo}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-foreground">
          {titulo}
        </h3>
        <p className="text-muted-foreground mb-4">
          {descripcion}
        </p>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Especificaciones:</p>
          <ul className="space-y-1">
            {especificaciones.map((spec, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TarjetaProducto;
