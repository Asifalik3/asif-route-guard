import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Asifbrowsertest
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are passionate about creating exceptional digital experiences that drive business growth and innovation.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Asifbrowsertest, we believe in the power of technology to transform businesses. Our mission is to 
                provide cutting-edge web solutions that not only meet current needs but anticipate future challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine creativity with technical expertise to deliver solutions that are both beautiful and functional, 
                ensuring our clients stay ahead in the competitive digital landscape.
              </p>
            </div>
            <div className="bg-gradient-card rounded-lg p-8 shadow-elegant">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading provider of innovative web solutions that empower businesses to achieve their digital transformation goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape our approach to every project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">💡</span>
                </div>
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  We constantly explore new technologies and methodologies to deliver cutting-edge solutions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <CardTitle>Collaboration</CardTitle>
                <CardDescription>
                  We work closely with our clients as partners to achieve shared success
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">⭐</span>
                </div>
                <CardTitle>Excellence</CardTitle>
                <CardDescription>
                  We strive for perfection in every project, ensuring the highest quality standards
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="bg-gradient-hero rounded-lg p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Passionate Professionals</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in web development, 
              design, and digital strategy to deliver exceptional results for our clients.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;