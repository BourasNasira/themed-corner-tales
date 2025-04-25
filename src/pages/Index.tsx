import { Book, Clock, MapPin } from "lucide-react";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-cafe-cream">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="pt-16">
        <div className="relative h-[80vh] bg-[url('/lovable-uploads/baf11b30-bcc3-4962-a03e-ecc164fe07cc.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40">
            <div className="container mx-auto h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="font-serif text-5xl md:text-7xl mb-4">
                  The Espresso Library
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  Là où les histoires et le café convergent
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Theme Section */}
      <section id="theme" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center text-cafe-brown mb-8">
            Thème Actuel
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Dans notre café-librairie à thème rotatif, chaque période donne
              naissance à un univers unique. L’ambiance, la décoration, la
              sélection de livres et même les boissons sont pensées autour d’un
              thème littéraire ou culturel différent — qu’il s’agisse de la
              poésie romantique, de la science-fiction, de la littérature
              africaine ou des grands classiques victoriens. Cette rotation
              régulière permet de renouveler l’expérience des visiteurs, de
              stimuler leur curiosité, et de créer un lieu vivant où la
              découverte est permanente.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-20 bg-cafe-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center text-cafe-brown mb-12">
            Menu
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl text-cafe-brown mb-4">
                Boissons
              </h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-medium"> Cocktails sans alcool</span>
                  <p className="text-gray-600">Berry Mojito</p>
                  <p className="text-gray-600">Ginger Bloom</p>
                </li>
                <li>
                  <span className="font-medium">Cafés</span>
                  <p className="text-gray-600">Latte à la cannelle</p>
                  <p className="text-gray-600">Cappuccino</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl text-cafe-brown mb-4">Thés</h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-medium">Thé à la menthe fraîche</span>
                  <p className="text-gray-600">inspiration marocaine</p>
                </li>
                <li>
                  <span className="font-medium">Infusion lecture du soir</span>
                  <p className="text-gray-600">verveine, camomille, lavande</p>
                </li>
                <li>
                  <span className="font-medium">Jus frais</span>
                  <p className="text-gray-600">Jus “Éveil matinal”</p>
                </li>
              </ul>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-md"
              style={{
                display: "grid",
              }}
            >
              <h3 className="font-serif text-2xl text-cafe-brown mb-4">
                Livres
              </h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-medium"> Classiques intemporels</span>
                  <p className="text-gray-600"> Victor Hugo</p>
                </li>
                <li>
                  <span className="font-medium">
                    Science-fiction & Imaginaire
                  </span>
                  <p className="text-gray-600">Harry Potter </p>
                </li>
                <li>
                  <span className="font-medium"> Essais & société</span>
                  <p className="text-gray-600"> William Shakespeare</p>
                </li>
                <li>
                  <span className="font-medium"> Philosophie & pensées</span>
                  <p className="text-gray-600"> Spinoza</p>
                </li>
                <li>
                  <span className="font-medium">
                    {" "}
                    Sciences et vulgarisation
                  </span>
                  <p className="text-gray-600"> Carl Sagan</p>
                </li>
                <li>
                  <span className="font-medium"> Romans contemporains</span>
                  <p className="text-gray-600"> Sally Rooney</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center text-cafe-brown mb-8">
            Our Story
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Le café-librairie à thème rotatif est un lieu original qui mêle
              lecture et convivialité, où l’ambiance et la sélection de livres
              changent régulièrement. Chaque visite devient une nouvelle
              expérience immersive, incitant les clients à revenir pour
              découvrir un nouvel univers littéraire, échanger autour d’un café
              et profiter d’un cadre culturel vivant et renouvelé.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cafe-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center text-cafe-brown mb-12">
            Visit Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div className="space-y-2">
              <Clock className="mx-auto text-cafe-brown" size={24} />
              <h3 className="font-serif text-xl text-cafe-brown">Hours</h3>
              <p>Mon-Fri: 8am - 12pm</p>
              <p>Sat-Sun: 9am - 9pm</p>
            </div>
            <div className="space-y-2">
              <MapPin className="mx-auto text-cafe-brown" size={24} />
              <h3 className="font-serif text-xl text-cafe-brown">Location</h3>
              <p>123 Bookmark Street</p>
              <p>Literary Quarter, LQ1 2AB</p>
            </div>
            <div className="space-y-2">
              <Book className="mx-auto text-cafe-brown" size={24} />
              <h3 className="font-serif text-xl text-cafe-brown">
                Reservations
              </h3>
              <p>+212 720 123456</p>
              <p>espresso@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cafe-brown text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Chapter & Brew. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
