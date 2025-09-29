import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Mobile-First Approach"]
    },
    {
      icon: "📱",
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Native Performance", "Cross-Platform", "App Store Optimization", "Push Notifications"]
    },
    {
      icon: "☁️",
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions",
      features: ["Auto Scaling", "High Availability", "Security", "Cost Optimization"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design", 
      description: "Beautiful and intuitive user interfaces that engage your audience",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: "🔧",
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your systems running smoothly",
      features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes", "Performance Optimization"]
    },
    {
      icon: "📈",
      title: "Digital Strategy",
      description: "Strategic consulting to help you achieve your digital transformation goals",
      features: ["Technology Consulting", "Digital Roadmap", "ROI Analysis", "Process Optimization"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your business and drive sustainable growth
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap" },
              { step: "03", title: "Development", description: "Building your solution with precision" },
              { step: "04", title: "Delivery", description: "Launch and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-20">
          <div className="bg-gradient-hero rounded-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your digital presence and achieve your business goals
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;