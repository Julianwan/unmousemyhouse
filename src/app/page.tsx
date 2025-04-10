import Image from "next/image";
import Logo from "./components/Logo";
import HeroImage from "@/images/Hero.png"

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
                <Logo className="h-10 w-10" />
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

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Pest Control Matters
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Protecting your home from unwanted guests is essential for your family's health and safety.
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
                Rodents can carry diseases and contaminate food sources, posing serious health risks to your family.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Property Damage</h3>
              <p className="mt-2 text-gray-600">
                Mice and rats can cause extensive damage to your home's structure, wiring, and insulation.
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
                Professional pest control provides long-term solutions and preventative measures for a worry-free home.
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
                    <p>Call us at: <span className="font-medium text-gray-900">(555) 123-4567</span></p>
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

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Common questions about our pest control services.
            </p>
          </div>
          
          <div className="mt-12 space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">How quickly can you respond to a rodent emergency?</h3>
              <p className="mt-2 text-gray-600">
                We understand that pest emergencies require immediate attention. In most cases, we can schedule a visit within 24-48 hours of your call. For severe infestations, we prioritize same-day service when possible.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Are your pest control methods safe for children and pets?</h3>
              <p className="mt-2 text-gray-600">
                Absolutely. We use family and pet-friendly methods whenever possible. Our technicians are trained to apply treatments in a way that minimizes risk to your loved ones while effectively eliminating pests. We'll provide specific safety instructions for each treatment.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">How can I prevent mice from returning after treatment?</h3>
              <p className="mt-2 text-gray-600">
                Prevention is key to long-term rodent control. We provide detailed recommendations for sealing entry points, proper food storage, and maintaining a clean environment. We also offer preventative maintenance plans to ensure your home stays rodent-free.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Do you offer any guarantees on your services?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we stand behind our work with a satisfaction guarantee. If pests return within the warranty period after our treatment, we'll return to address the issue at no additional cost. Our goal is your complete satisfaction and a pest-free home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center">
              {/* Custom mouse on house logo in footer */}
              <Logo className="h-10 w-10" />
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
