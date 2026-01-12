const HeroSlider = () => {
  return (
    <div className="carousel w-full h-[80vh]">

      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/M5JytyD7/New-skills-to-learn-for-kids.png"
          className="w-full h-full object-cover"
          alt="Learn Skills"
        />

        <div
          className="absolute inset-0 flex items-center px-6 md:px-16"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div style={{ color: "white", maxWidth: "520px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>
              Learn New Skills
            </h1>
            <p style={{ fontSize: "1.1rem" }}>
              Discover and learn skills from experienced people around you.
            </p>
          </div>
        </div>

        <a href="#slide3" className="btn btn-circle absolute left-5 top-1/2">❮</a>
        <a href="#slide2" className="btn btn-circle absolute right-5 top-1/2">❯</a>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/b57Ybq7Q/1666863574630-e-2147483647-v-beta-t-432-POqaf-RWqv-Kt-B6j-A7k-0-JAn-SM-Re-FTh-Zur-Ej2unu8.png"
          className="w-full h-full object-cover"
          alt="Teach Skills"
        />

        <div
          className="absolute inset-0 flex items-center px-6 md:px-16"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div style={{ color: "white", maxWidth: "520px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>
              Teach What You Know
            </h1>
            <p style={{ fontSize: "1.1rem" }}>
              Share your expertise, help others grow, and earn while teaching.
            </p>
          </div>
        </div>

        <a href="#slide1" className="btn btn-circle absolute left-5 top-1/2">❮</a>
        <a href="#slide3" className="btn btn-circle absolute right-5 top-1/2">❯</a>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/4gjLRmx9/artworks-000584137988-s6br73-t1080x1080.jpg"
          className="w-full h-full object-cover"
          alt="Community"
        />

        <div
          className="absolute inset-0 flex items-center px-6 md:px-16"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div style={{ color: "white", maxWidth: "520px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>
              Grow Together
            </h1>
            <p style={{ fontSize: "1.1rem" }}>
              Build a community where everyone learns and grows together.
            </p>
          </div>
        </div>

        <a href="#slide2" className="btn btn-circle absolute left-5 top-1/2">❮</a>
        <a href="#slide1" className="btn btn-circle absolute right-5 top-1/2">❯</a>
      </div>

    </div>
  );
};

export default HeroSlider;
