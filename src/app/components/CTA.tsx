const CTA = () => {
  return (
    <section id="cta" className="py-16 bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Kick Pests Out with a Grin—Call Us Today!
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          No more sneaky critters or midnight squeaks! Let’s make your home pest-free, hassle-free, and a little more fun. Dial now!
        </p>
        <div className="mt-8">
          <a
            href="tel:+15551234567"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg bg-white text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-lg transition ease-in-out duration-200"
          >
            Call (555) 123-4567 Now!
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;