import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-surface rounded-2xl p-12 space-y-6">
            <div className="space-y-2">
              <h1 className="text-9xl font-bold text-primary">404</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Página no encontrada
              </h2>
              <p className="text-lg text-muted-foreground">
                Lo sentimos, la página que buscas no existe o ha sido movida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                variant="hero"
                size="lg"
                asChild
                className="gap-2"
              >
                <Link to="/">
                  <Home className="w-5 h-5" />
                  Volver al Inicio
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
                className="gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Página Anterior
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
