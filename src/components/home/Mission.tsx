import madhubaniImage from "@/assets/madhubani-pattern.jpg";

const Mission = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-muted">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div
              className="relative rounded-2xl overflow-hidden shadow-elevated h-[400px] lg:h-[500px]"
              style={{
                backgroundImage: `url(${madhubaniImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Our Mission
            </h2>

            <p
              className="text-lg text-foreground/80 leading-relaxed"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              MGVP works on community development in the Mithila region of Bihar, 
              focusing on socio-economic upliftment, educational advancement, healthcare, 
              and environmental conservation for women and children. We strive to create 
              lasting change through grassroots action, innovation, and inclusive partnerships.
            </p>

            <blockquote
              className="border-l-4 border-secondary pl-6 py-2 italic text-xl md:text-2xl text-secondary font-bold"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              "Community action creates lasting change"
            </blockquote>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">33+</span>
                </div>
                <p className="text-sm font-semibold text-foreground/70">Years of Impact</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">4</span>
                </div>
                <p className="text-sm font-semibold text-foreground/70">Focus Areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
