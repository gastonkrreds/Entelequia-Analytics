import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Brain, Briefcase, Mail, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section id="hero" className="text-center py-16 md:py-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[50%] top-0 h-[48rem] w-[128rem] translate-x-[-50%] stroke-border [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          Entelequia Analytics
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-manrope">
          El arte de gobernar con datos.
        </p>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-foreground/80">
          Transformamos la complejidad de los datos en estrategias políticas claras y efectivas. Descubra cómo la ciencia de datos puede redefinir su camino hacia el éxito.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="#contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Contáctanos <Mail className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#services">
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary">
              Nuestros Servicios <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Quiénes Somos</h2>
            <p className="text-lg text-foreground/90 mb-4">
              En Entelequia Analytics, somos pioneros en la aplicación de la ciencia de datos al ámbito político. Nuestro equipo multidisciplinario combina expertise en análisis de datos, estrategia política y comunicación para ofrecer soluciones innovadoras y personalizadas.
            </p>
            <p className="text-lg text-foreground/90 mb-6">
              Creemos que el futuro de la política se construye sobre decisiones informadas. Por eso, nos dedicamos a desentrañar patrones, predecir tendencias y optimizar campañas, permitiendo a nuestros clientes navegar el complejo panorama político con confianza y precisión.
            </p>
            <Button variant="link" className="text-secondary p-0 h-auto hover:text-accent" asChild>
              <Link href="/about-details">
                Conoce más sobre nuestro equipo y misión <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image src="https://picsum.photos/800/600?random=1" alt="Equipo de Entelequia Analytics" layout="fill" objectFit="cover" data-ai-hint="team meeting" />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Análisis de Opinión Pública", description: "Interpretamos el sentir ciudadano a través de modelos avanzados de procesamiento de lenguaje natural y machine learning.", icon: <Users className="h-10 w-10 text-accent mb-4" />, imageHint: "data charts" },
            { title: "Segmentación Estratégica de Electorado", description: "Identificamos y caracterizamos grupos clave de votantes para optimizar mensajes y movilización.", icon: <Brain className="h-10 w-10 text-accent mb-4" />, imageHint: "network graph" },
            { title: "Predicción Electoral y Modelado de Escenarios", description: "Utilizamos datos históricos y actuales para proyectar resultados y evaluar el impacto de diferentes estrategias.", icon: <Briefcase className="h-10 w-10 text-accent mb-4" />, imageHint: "election map" },
          ].map((service) => (
            <Card key={service.title} className="glassmorphic overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="text-2xl text-center text-secondary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 text-center">{service.description}</p>
              </CardContent>
              <CardFooter className="justify-center">
                 <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent" asChild>
                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Saber más
                    </Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog/Projects Section */}
      <section id="blog" className="py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">Casos de Éxito y Publicaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Optimizando la Campaña X", description: "Cómo el análisis de redes sociales impulsó el alcance en un 200%.", image: "https://picsum.photos/600/400?random=2", imageHint: "social media analytics", type: "Proyecto" },
            { title: "El Futuro de la Data en Política", description: "Un análisis profundo sobre las tendencias emergentes y su impacto.", image: "https://picsum.photos/600/400?random=3", imageHint: "futuristic data", type: "Artículo" },
            { title: "Segmentación Inteligente para Elecciones Locales", description: "Estrategias de microtargeting que marcaron la diferencia.", image: "https://picsum.photos/600/400?random=4", imageHint: "local map data", type: "Proyecto" },
          ].map((post) => (
            <Card key={post.title} className="glassmorphic overflow-hidden group">
              <div className="relative h-56 w-full">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint={post.imageHint} className="transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                <span className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 text-xs font-semibold rounded">{post.type}</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-secondary group-hover:text-accent transition-colors">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">{post.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-secondary p-0 h-auto hover:text-accent" asChild>
                  <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Leer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link href="/blog">
              Ver todas las publicaciones
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
         <Card className="glassmorphic p-6 md:p-10 max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl md:text-5xl font-bold text-primary">Contáctanos</CardTitle>
            <CardDescription className="text-lg text-foreground/80 mt-2">
              ¿Listo para llevar tu estrategia política al siguiente nivel? Hablemos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Nombre Completo" className="bg-input/50 placeholder:text-muted-foreground focus:bg-input/70 border-border/50" />
                <Input type="email" placeholder="Correo Electrónico" className="bg-input/50 placeholder:text-muted-foreground focus:bg-input/70 border-border/50" />
              </div>
              <Input type="text" placeholder="Asunto" className="bg-input/50 placeholder:text-muted-foreground focus:bg-input/70 border-border/50" />
              <Textarea placeholder="Tu Mensaje" rows={5} className="bg-input/50 placeholder:text-muted-foreground focus:bg-input/70 border-border/50" />
              <div className="text-center">
                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full md:w-auto">
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="mt-6 flex flex-col items-center space-y-2 text-center">
            <p className="text-muted-foreground">También puedes encontrarnos en:</p>
            <p className="text-foreground/90">info@entelequia.analytics</p>
            <p className="text-foreground/90">+1 (555) 123-4567</p>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
