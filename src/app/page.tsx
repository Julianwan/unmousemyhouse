import Image from "next/image";
import Logo from "./components/Logo";
import HeroImage from "@/images/Hero.png"
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* Custom mouse on house logo */}
                <Logo theme="LIGHT" className="h-10 w-10" />
                <span className="ml-2 text-xl font-bold text-gray-800">Un Mouse My House</span>
              </div>
            </div>
            <div className="flex items-center">
              <a href="#contact" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="md:flex md:items-center md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Rodent-Free</span>
                <span className="block text-blue-600">Peace of Mind</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                Specialized in rodent and mice extermination, Un Mouse My House provides professional pest control services to keep your home safe and comfortable.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#services" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Our Services
                </a>
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Get a Quote
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                {/* Hero image with logo */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <Image src={HeroImage} alt="Giant Mouse on a House"/>
                    <p className="text-lg font-medium">Professional Rodent Control</p>
                    <p className="text-sm">Protecting your home from unwanted guests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     <CTA/>
      <section id="statistics" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Rodent Risks by the Numbers
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
        Keep an eye out for these startling stats—proof it’s time to call Un Mouse My House!
      </p>
    </div>

    <div className="mt-12 grid gap-8 md:grid-cols-4">
      {/* Stat 1 */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm text-center">
        <p className="text-4xl font-bold text-blue-600">12,000</p>
        <p className="mt-2 text-lg font-medium text-gray-900">Cheese Crumbs Stolen</p>
        <p className="mt-1 text-gray-600">Mice can swipe thousands of crumbs annually, turning your kitchen into their personal buffet.</p>
      </div>

      {/* Stat 2 */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm text-center">
        <p className="text-4xl font-bold text-blue-600">500+</p>
        <p className="mt-2 text-lg font-medium text-gray-900">Tiny Paw Prints</p>
        <p className="mt-1 text-gray-600">A single rat can leave hundreds of paw prints, turning your home into a rodent art gallery.</p>
      </div>

      {/* Stat 3 */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm text-center">
        <p className="text-4xl font-bold text-blue-600">3 AM</p>
        <p className="mt-2 text-lg font-medium text-gray-900">Peak Squeak Hour</p>
        <p className="mt-1 text-gray-600">Rodents love throwing midnight parties, keeping you awake with their scampering shenanigans.</p>
      </div>

      {/* Stat 4 */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm text-center">
        <p className="text-4xl font-bold text-blue-600">99%</p>
        <p className="mt-2 text-lg font-medium text-gray-900">Snack Sabotage Rate</p>
        <p className="mt-1 text-gray-600">Mice ruin nearly every unprotected snack, leaving you with nibbled nightmares.</p>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
<section id="services" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Why Pest Control Matters
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
        From sneaky rodents to full-blown mouse fiestas, we’ve got the services to keep your home pest-free and your sanity intact!
      </p>
    </div>

    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {/* Service 1 */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Health Protection</h3>
        <p className="mt-2 text-gray-600">
          Rodents can carry diseases and contaminate food sources, posing serious health risks to your family. Our treatments ensure your kitchen stays a no-sneeze zone.
        </p>
      </div>

      {/* Service 2 */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Property Damage Prevention</h3>
        <p className="mt-2 text-gray-600">
          Mice and rats can chew through your home’s wiring, insulation, and even your favorite couch. We stop the gnawing before your house becomes a rodent art project.
        </p>
      </div>

      {/* Service 3 */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Peace of Mind</h3>
        <p className="mt-2 text-gray-600">
          Our professional pest control provides long-term solutions and preventative measures, so you can sleep soundly without hearing tiny paws tap-dancing in your walls.
        </p>
      </div>

      {/* Service 4 */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-9.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Eco-Friendly Solutions</h3>
        <p className="mt-2 text-gray-600">
          We offer green pest control methods that are tough on rodents but gentle on the planet, keeping your home safe and Mother Nature happy.
        </p>
      </div>

      {/* Service 5 - Humorous */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Mouse Disco Demolition</h3>
        <p className="mt-2 text-gray-600">
          If your rodents are throwing all-night raves with tiny glow sticks, we’ll shut down the party. Our disco-proof barriers ensure mice can’t boogie back into your home.
        </p>
      </div>

      {/* Service 6 */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">24/7 Emergency Response</h3>
        <p className="mt-2 text-gray-600">
          Rodents don’t keep office hours, so neither do we. Our round-the-clock team is ready to tackle sudden invasions, ensuring your home stays pest-free any time of day.
        </p>
      </div>

      {/* Service 7 - Humorous */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Rat Skyscraper Removal</h3>
        <p className="mt-2 text-gray-600">
          Are rats building a rodent metropolis in your attic? We’ll dismantle their tiny skyscrapers and relocate the furry architects before they start charging rent.
        </p>
      </div>

      {/* Service 8 - Humorous */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Mouse Heist Prevention</h3>
        <p className="mt-2 text-gray-600">
          If mice are plotting a grand cheese caper in your pantry, our elite rodent-proofing team will lock down your snacks tighter than Fort Knox. No heist, no hassle!
        </p>
      </div>

      {/* Service 9 */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Thorough Inspections</h3>
        <p className="mt-2 text-gray-600">
          Our detailed inspections uncover every nook and cranny where rodents might hide, ensuring no mouse or rat escapes our eagle-eyed technicians.
        </p>
      </div>

      {/* Service 10 - Humorous */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Squeak Surveillance Systems</h3>
        <p className="mt-2 text-gray-600">
          Worried about mice plotting a comeback? Our cutting-edge squeak detectors monitor for rodent chatter, alerting us to any furry schemes before they unfold.
        </p>
      </div>

      {/* Service 11 - Humorous */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h6m-9-6h6m-3 9l-3-2.25 3-2.25" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Rodent Talent Agency Relocation</h3>
        <p className="mt-2 text-gray-600">
          If your mice are auditioning for “America’s Got Squeak,” we’ll kindly redirect their talents elsewhere. No more rodent acrobats flipping through your vents!
        </p>
      </div>

      {/* Service 12 */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 12v6a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0019.5 18v-6a2.25 2.25 0 00-2.25-2.25h-10.5A2.25 2.25 0 004.5 12v6a2.25 2.25 0 002.25 2.25" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Customized Maintenance Plans</h3>
        <p className="mt-2 text-gray-600">
          Our tailored plans keep rodents at bay with regular check-ups and preventative measures, ensuring your home remains a no-pest zone all year round.
        </p>
      </div>
    </div>
  </div>
</section>
<section id="testimonials" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        What Our Customers Squeak About Us
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
        Don’t take our word for it—hear from homeowners who’ve reclaimed their homes from rodent rascals!
      </p>
    </div>

    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-900">Jerry T.</p>
            <p className="text-sm text-gray-500">Cheese Shop Owner</p>
          </div>
        </div>
        <p className="text-gray-600">
          “I thought my shop was doomed when mice started a conga line through my cheddar display. Un Mouse My House swooped in and sent those furry dancers packing. My cheese is safe again!”
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-900">Martha S.</p>
            <p className="text-sm text-gray-500">Amateur Baker</p>
          </div>
        </div>
        <p className="text-gray-600">
          “The rats in my kitchen were auditioning for ‘Ratatouille: The Sequel.’ Un Mouse My House shut down their culinary dreams faster than you can say ‘soufflé.’ Now I bake in peace!”
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-900">Boris M.</p>
            <p className="text-sm text-gray-500">Attic Enthusiast</p>
          </div>
        </div>
        <p className="text-gray-600">
          “My attic was hosting a rodent Woodstock—complete with tiny tie-dye bandanas. These guys cleared the festival grounds in no time. Now my attic is quieter than a library!”
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Contact Us Today
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Our team of experts is ready to help you with all your pest control needs.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>Call us at: <span className="font-medium text-gray-900">(978) 773-9258</span></p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>Business Hours: <span className="font-medium text-gray-900">Monday-Friday, 9:00 AM - 7:00 PM</span></p>
                    <p className="mt-1">Please leave a voicemail if we don't answer.</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>Email: <span className="font-medium text-gray-900">info@unmousemyhouse.com</span></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>
                
                <div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
<section id="reviews" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Five-Star Rodent Removal
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
        Our customers give us five stars for kicking mice to the curb with style and speed!
      </p>
    </div>

    <div className="mt-12 flex justify-center">
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm text-center">
        <div className="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <p className="text-2xl font-bold text-gray-900">4.9/5 Stars</p>
        <p className="mt-2 text-gray-600">Based on 1,234 squeak-free reviews from happy homeowners!</p>
        <p className="mt-4 text-gray-500 italic">“Un Mouse My House turned my pantry from a mouse nightclub into a pest-free paradise. Five stars!” — Tina R.</p>
      </div>
    </div>
  </div>
</section>
      {/* FAQ Section */}
<section id="faq" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
        Got questions about rodents or our world-class pest control services? We’ve got answers—some serious, some squeak-tacularly silly!
      </p>
    </div>

    <div className="mt-12 space-y-6">
      {/* FAQ Item 1 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900">How quickly can you respond to a rodent emergency?</h3>
        <p className="mt-2 text-gray-600">
          We understand that pest emergencies require immediate attention. In most cases, we can schedule a visit within 24-48 hours of your call. For severe infestations—like a mouse rave in your pantry—we prioritize same-day service when possible.
        </p>
      </div>

      {/* FAQ Item 2 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900">Are your pest control methods safe for children and pets?</h3>
        <p className="mt-2 text-gray-600">
          Absolutely. We use family and pet-friendly methods whenever possible. Our technicians are trained to apply treatments in a way that minimizes risk to your loved ones while effectively eliminating pests. We’ll provide specific safety instructions for each treatment—unless your pet is a hamster, then we might just have a chat with them first.
        </p>
      </div>

      {/* FAQ Item 3 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900">How can I prevent mice from returning after treatment?</h3>
        <p className="mt-2 text-gray-600">
          Prevention is key to long-term rodent control. We provide detailed recommendations for sealing entry points, proper food storage, and maintaining a clean environment. We also offer preventative maintenance plans to ensure your home stays rodent-free—no mouse shall pass!
        </p>
      </div>

      {/* FAQ Item 4 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900">Do you offer any guarantees on your services?</h3>
        <p className="mt-2 text-gray-600">
          Yes, we stand behind our work with a satisfaction guarantee. If pests return within the warranty period after our treatment, we’ll return to address the issue at no additional cost. Our goal is your complete satisfaction and a pest-free home, or at least a home where mice aren’t throwing nightly cheese parties.
        </p>
      </div>

      {/* FAQ Item 5 - Humorous */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900">What if my mice are throwing a tiny opera in my walls?</h3>
        <p className="mt-2 text-gray-600">
          First, congratulations on hosting such cultured rodents! Our team is equipped with state-of-the-art squeak detectors to locate even the most melodious mouse ensemble. We’ll gently escort these furry divas off your premises—no encore performances allowed.
        </p>
      </div>

   
      {/* FAQ Item 8 - Humorous */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900">What if my mouse problem is actually a secret rodent fight club?</h3>
        <p className="mt-2 text-gray-600">
          The first rule of Rodent Fight Club is… we don’t talk about it. But if your mice are duking it out in tiny boxing gloves, we’ll break up the brawl with our expert trapping techniques. Don’t worry, we won’t tell Tyler Durden—or the mice—who snitched.
        </p>
      </div>

      {/* FAQ Item 9 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900">Do you provide eco-friendly pest control options?</h3>
        <p className="mt-2 text-gray-600">
          Yes! We offer environmentally conscious solutions that prioritize the safety of your home and the planet. Our green methods are tough on pests but gentle on Mother Nature, ensuring your rodent woes are solved sustainably.
        </p>
      </div>

      {/* FAQ Item 10 - Humorous */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900">Is it true that mice are planning a coup to take over my kitchen?</h3>
        <p className="mt-2 text-gray-600">
          We’ve heard the rumors, and while we can neither confirm nor deny a full-blown mouse uprising, we *can* assure you that our technicians are trained to thwart even the most ambitious rodent schemes. Your kitchen will remain under human control—promise!
        </p>
      </div>

      {/* FAQ Item 11 - Humorous */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900">What if my rats are building a tiny rat utopia in my basement?</h3>
        <p className="mt-2 text-gray-600">
          A rat utopia sounds like a five-star rodent resort, complete with cheese fountains and crumb buffets! Sadly, we can’t let them live out their architectural dreams in your basement. We’ll dismantle their metropolis with precision and relocate them to a less utopian locale.
        </p>
      </div>
 
    </div>
  </div>
</section>
<CTA/>
      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center">
              {/* Custom mouse on house logo in footer */}
              <Logo theme="DARK" className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold">Un Mouse My House</span>
            </div>
            
            <div className="mt-8 md:mt-0">
              <p className="text-center md:text-right text-base text-gray-400">
                &copy; {new Date().getFullYear()} Un Mouse My House. All rights reserved.
              </p>
              <p className="text-center md:text-right text-sm text-gray-500 mt-2">
                A fictional business for demonstration purposes only.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
