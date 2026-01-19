import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const TopRatedProviders = () => {
  const [loading, setLoading] = useState(true);

  // simulate loading (like API call)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // SHOW SPINNER
  if (loading) {
    return (
      <div className="min-h-75 flex justify-center items-center">
        <ClipLoader color="#f59e0b" size={60} />
      </div>
    );
  }

  // SHOW CONTENT
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Top Rated Providers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Provider 1 */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
          <div className="card-body text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-24 h-24 mx-auto rounded-full mb-4"
              alt="Alex Martin"
            />
            <h3 className="text-xl font-semibold">Alex Martin</h3>
            <p className="text-gray-500">Guitar Instructor</p>
            <p className="text-yellow-400 mt-2">★★★★★ 4.9</p>
          </div>
        </div>

        {/* Provider 2 */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
          <div className="card-body text-center">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              className="w-24 h-24 mx-auto rounded-full mb-4"
              alt="Sara Hossain"
            />
            <h3 className="text-xl font-semibold">Sara Hossain</h3>
            <p className="text-gray-500">English Mentor</p>
            <p className="text-yellow-400 mt-2">★★★★★ 4.8</p>
          </div>
        </div>

        {/* Provider 3 */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
          <div className="card-body text-center">
            <img
              src="https://randomuser.me/api/portraits/men/54.jpg"
              className="w-24 h-24 mx-auto rounded-full mb-4"
              alt="James K."
            />
            <h3 className="text-xl font-semibold">James K.</h3>
            <p className="text-gray-500">Cooking Coach</p>
            <p className="text-yellow-400 mt-2">★★★★★ 4.9</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedProviders;
