import { Book, Clock, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';

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
                <h1 className="font-serif text-5xl md:text-7xl mb-4">The Espresso Library</h1>
                <p className="text-xl md:text-2xl mb-8">Where Stories and Coffee Converge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Theme Section */}
      <section id="theme" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center text-cafe-brown mb-8">Current Theme: Victorian Literature</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Immerse yourself in the world of Victorian literature this month. Enjoy curated literary-inspired beverages and pastries while exploring classic works from Dickens, Brontë, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-20 bg-cafe-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center text-cafe-brown mb-12">Menu Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl text-cafe-brown mb-4">Featured Drinks</h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-medium">Oliver's Twist</span>
                  <p className="text-gray-600">Earl Grey tea with a twist of citrus and vanilla</p>
                </li>
                <li>
                  <span className="font-medium">Rochester's Roast</span>
                  <p className="text-gray-600">Dark roasted coffee with hints of chocolate</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl text-cafe-brown mb-4">Featured Books</h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-medium">Jane Eyre</span>
                  <p className="text-gray-600">Charlotte Brontë</p>
                </li>
                <li>
                  <span className="font-medium">Great Expectations</span>
                  <p className="text-gray-600">Charles Dickens</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center text-cafe-brown mb-8">Our Story</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Chapter & Brew is more than just a café-bookstore. We're a unique space where literature comes to life through our monthly rotating themes, carefully curated book selections, and themed beverages and treats.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cafe-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center text-cafe-brown mb-12">Visit Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div className="space-y-2">
              <Clock className="mx-auto text-cafe-brown" size={24} />
              <h3 className="font-serif text-xl text-cafe-brown">Hours</h3>
              <p>Mon-Fri: 8am - 8pm</p>
              <p>Sat-Sun: 9am - 6pm</p>
            </div>
            <div className="space-y-2">
              <MapPin className="mx-auto text-cafe-brown" size={24} />
              <h3 className="font-serif text-xl text-cafe-brown">Location</h3>
              <p>123 Bookmark Street</p>
              <p>Literary Quarter, LQ1 2AB</p>
            </div>
            <div className="space-y-2">
              <Book className="mx-auto text-cafe-brown" size={24} />
              <h3 className="font-serif text-xl text-cafe-brown">Reservations</h3>
              <p>+44 (0)20 1234 5678</p>
              <p>hello@chapterandbrew.com</p>
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
