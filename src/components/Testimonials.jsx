const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Learners Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-md rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-yellow-400">
          <div className="card-body">
            <span className="text-5xl text-orange-500">“</span>

            <p className="text-gray-600 mb-6">
              This course was exactly what I needed! The lessons were clear,
              well-structured, and easy to follow. I’ve already started applying
              the techniques in real projects and the results are amazing.
              Worth every penny!
            </p>

            <hr className="border-orange-400 mb-4" />

            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Sarah M."
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Sarah M.</h4>
                <p className="text-sm italic text-gray-500">
                  Cooking Student
                </p>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-md rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-yellow-400">
          <div className="card-body">
            <span className="text-5xl text-orange-500">“</span>

            <p className="text-gray-600 mb-6">
              At first, I wasn’t sure if an online course could actually help me
              level up my skills. But after finishing this one, I can
              confidently say it exceeded my expectations. The step-by-step
              approach was excellent.
            </p>

            <hr className="border-orange-400 mb-4" />

            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/46.jpg"
                alt="James K."
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">James K.</h4>
                <p className="text-sm italic text-gray-500">
                  Yoga Student
                </p>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-md rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-yellow-400">
          <div className="card-body">
            <span className="text-5xl text-orange-500">“</span>

            <p className="text-gray-600 mb-6">
              I’ve bought several courses before, but this one truly stands
              out. The instructor broke down complex topics into simple,
              practical examples that were easy to understand and apply.
            </p>

            <hr className="border-orange-400 mb-4" />

            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/52.jpg"
                alt="M. Dhenier"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">M. Dhenier</h4>
                <p className="text-sm italic text-gray-500">
                  English Student
                </p>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
