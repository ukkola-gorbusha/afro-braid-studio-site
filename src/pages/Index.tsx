import Header from '@/components/studio/Header';
import Hero from '@/components/studio/Hero';
import Marquee from '@/components/studio/Marquee';
import Services from '@/components/studio/Services';
import Gallery from '@/components/studio/Gallery';
import Booking from '@/components/studio/Booking';
import Contacts from '@/components/studio/Contacts';
import Footer from '@/components/studio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Gallery />
        <Booking />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
