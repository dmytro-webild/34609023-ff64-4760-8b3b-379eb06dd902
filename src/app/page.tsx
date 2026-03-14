"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { AlertCircle, Award, BarChart3, CheckCircle, HelpCircle, Phone, Sparkles, Star, TrendingUp, Users, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeLargeTitles"
      background="floatingGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Heat-N-Air Guys"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Quote", href: "#contact" }}
          className=""
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Heat-N-Air Guys"
          description="Expert HVAC solutions for your home and business. Fast, reliable heating and cooling service you can trust."
          buttons={[
            { text: "Schedule Service", href: "#contact" },
            { text: "Learn More", href: "#services" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          imageSrc="http://img.b2bpic.net/free-photo/woman-taking-notes-from-her-friend-s-doctor_23-2148944853.jpg"
          imageAlt="Modern HVAC system installation"
          mediaAnimation="blur-reveal"
          frameStyle="card"
          ariaLabel="Heat-N-Air Guys Hero Section"
          className=""
          containerClassName=""
          logoContainerClassName=""
          logoClassName=""
          descriptionClassName=""
          buttonContainerClassName=""
          buttonClassName=""
          buttonTextClassName=""
          mediaWrapperClassName=""
          imageClassName=""
          browserBarClassName=""
          addressBarClassName=""
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Why Choose Heat-N-Air Guys?"
          description="With over 15 years of experience serving the community, Heat-N-Air Guys is your trusted partner for all HVAC needs. We pride ourselves on expert installation, responsive maintenance, and emergency repair services that keep your systems running smoothly year-round."
          tag="Industry Leading"
          tagIcon={Award}
          tagAnimation="slide-up"
          buttons={[{ text: "View Our Services", href: "#services" }]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/african-american-worker-sweeping-away-loose-debris-accumulated-around-air-conditioner-base-trained-engineer-cleaning-hvac-system-body-control-panel-with-dusting-brush-tool-remove-loose-dirt_482257-70162.jpg"
          imageAlt="Professional HVAC technician"
          useInvertedBackground={true}
          ariaLabel="About Heat-N-Air Guys"
          className=""
          textBoxClassName=""
          titleClassName=""
          descriptionClassName=""
          tagClassName=""
          buttonContainerClassName=""
          buttonClassName=""
          buttonTextClassName=""
          mediaWrapperClassName=""
          mediaClassName=""
        />
      </div>

      <div id="services" data-section="services">
        <FeatureBento
          title="Our HVAC Services"
          description="Comprehensive heating and cooling solutions tailored to your needs. From routine maintenance to emergency repairs, we've got you covered."
          tag="Complete Solutions"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="blur-reveal"
          carouselMode="buttons"
          features={[
            {
              title: "Installation",              description: "Professional installation of new heating and cooling systems with expert guidance on the best solutions for your home.",              button: { text: "Learn More", href: "#contact" },
              bentoComponent: "icon-info-cards",              items: [
                { icon: Zap, label: "Fast Setup", value: "Same Day" },
                { icon: CheckCircle, label: "Quality", value: "Guaranteed" }
              ]
            },
            {
              title: "Maintenance",              description: "Regular maintenance keeps your system efficient and extends its lifespan. We offer seasonal checkups and filter replacements.",              button: { text: "Schedule Maintenance", href: "#contact" },
              bentoComponent: "icon-info-cards",              items: [
                { icon: AlertCircle, label: "Protection", value: "Full Coverage" },
                { icon: Zap, label: "Efficiency", value: "Optimized" }
              ]
            },
            {
              title: "Emergency Repair",              description: "HVAC system failing? We offer 24/7 emergency repair services to get your heating or cooling back online fast.",              button: { text: "Call Now", href: "#contact" },
              bentoComponent: "icon-info-cards",              items: [
                { icon: AlertCircle, label: "Response", value: "24/7 Available" },
                { icon: Zap, label: "Speed", value: "Emergency Priority" }
              ]
            }
          ]}
          ariaLabel="HVAC Services Section"
          className=""
          containerClassName=""
          cardClassName=""
          textBoxTitleClassName=""
          textBoxDescriptionClassName=""
          cardTitleClassName=""
          cardDescriptionClassName=""
          cardButtonClassName=""
          cardButtonTextClassName=""
          gridClassName=""
          carouselClassName=""
          controlsClassName=""
          textBoxClassName=""
          textBoxTagClassName=""
          textBoxButtonContainerClassName=""
          textBoxButtonClassName=""
          textBoxButtonTextClassName=""
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Trusted by Our Community"
          description="Our commitment to excellence is reflected in these numbers that represent years of dedicated service."
          tag="Our Impact"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="depth-3d"
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
          metrics={[
            {
              id: "metric-customers",              value: "5,000+",              title: "Happy Customers",              description: "Satisfied homeowners and businesses we've served",              icon: Users
            },
            {
              id: "metric-years",              value: "15+",              title: "Years Experience",              description: "Over a decade of industry expertise",              icon: Award
            },
            {
              id: "metric-uptime",              value: "99.2%",              title: "System Uptime",              description: "Average customer system performance rate",              icon: BarChart3
            }
          ]}
          ariaLabel="Company Metrics Section"
          className=""
          containerClassName=""
          cardClassName=""
          textBoxTitleClassName=""
          textBoxDescriptionClassName=""
          valueClassName=""
          titleClassName=""
          descriptionClassName=""
          iconContainerClassName=""
          iconClassName=""
          gridClassName=""
          carouselClassName=""
          controlsClassName=""
          textBoxClassName=""
          textBoxTagClassName=""
          textBoxButtonContainerClassName=""
          textBoxButtonClassName=""
          textBoxButtonTextClassName=""
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="What Our Customers Say"
          description="Real feedback from homeowners who trust Heat-N-Air Guys for their HVAC needs."
          tag="Customer Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="blur-reveal"
          carouselMode="buttons"
          kpiItems={[
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Would Recommend" },
            { value: "150+", label: "5-Star Reviews" }
          ]}
          testimonials={[
            {
              id: "testimonial-1",              name: "Sarah Johnson",              role: "Homeowner",              company: "Residential Customer",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-posing-while-nature-adventure_23-2148647990.jpg",              imageAlt: "Sarah Johnson"
            },
            {
              id: "testimonial-2",              name: "Michael Chen",              role: "Property Manager",              company: "Commercial Client",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-professional_1098-12931.jpg",              imageAlt: "Michael Chen"
            },
            {
              id: "testimonial-3",              name: "Jennifer Martinez",              role: "Homeowner",              company: "Residential Customer",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-young-elegant-man-smiling_23-2148332976.jpg",              imageAlt: "Jennifer Martinez"
            },
            {
              id: "testimonial-4",              name: "David Williams",              role: "Business Owner",              company: "Commercial Client",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-brunette-caucasian-girl-stands-isolated-olive-green-background-with-copy-space_141793-67073.jpg",              imageAlt: "David Williams"
            },
            {
              id: "testimonial-5",              name: "Emily Rodriguez",              role: "Homeowner",              company: "Residential Customer",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-female-blazer-beauty-blonde_1139-773.jpg",              imageAlt: "Emily Rodriguez"
            },
            {
              id: "testimonial-6",              name: "Robert Thompson",              role: "Facilities Manager",              company: "Commercial Client",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe_273609-12865.jpg",              imageAlt: "Robert Thompson"
            }
          ]}
          ariaLabel="Customer Testimonials Section"
          className=""
          containerClassName=""
          cardClassName=""
          imageClassName=""
          overlayClassName=""
          ratingClassName=""
          nameClassName=""
          roleClassName=""
          companyClassName=""
          gridClassName=""
          carouselClassName=""
          controlsClassName=""
          textBoxClassName=""
          textBoxTitleClassName=""
          textBoxDescriptionClassName=""
          textBoxTagClassName=""
          textBoxButtonContainerClassName=""
          textBoxButtonClassName=""
          textBoxButtonTextClassName=""
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our HVAC services and how we can help you."
          tag="Need Help?"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="smooth"
          faqsAnimation="slide-up"
          showCard={true}
          faqs={[
            {
              id: "faq-1",              title: "How often should I have my HVAC system maintained?",              content: "We recommend professional maintenance at least twice a year—once before the heating season and once before the cooling season. Regular maintenance improves efficiency, extends system life, and prevents costly breakdowns."
            },
            {
              id: "faq-2",              title: "Do you offer emergency repair services?",              content: "Yes! We provide 24/7 emergency HVAC repair services. If your system fails outside normal business hours, call us immediately and we'll get a technician to you as quickly as possible."
            },
            {
              id: "faq-3",              title: "What warranties do you offer?",              content: "We offer manufacturer warranties on all equipment we install, plus our own service warranty covering labor. Warranties typically range from 1 to 10 years depending on the equipment."
            },
            {
              id: "faq-4",              title: "How can I improve my HVAC system's efficiency?",              content: "Regular filter changes, annual maintenance, proper thermostat settings, and sealing air leaks all help. Our technicians can provide a full energy audit and recommend specific improvements for your system."
            },
            {
              id: "faq-5",              title: "What should I do if my AC stops working in summer?",              content: "Turn off the system immediately to prevent damage. Check your thermostat settings and filter. If that doesn't help, call us for emergency service. Don't attempt repairs yourself—HVAC systems require professional expertise."
            }
          ]}
          ariaLabel="FAQ Section"
          className=""
          containerClassName=""
          textBoxTitleClassName=""
          textBoxDescriptionClassName=""
          textBoxClassName=""
          textBoxTagClassName=""
          textBoxButtonContainerClassName=""
          textBoxButtonClassName=""
          textBoxButtonTextClassName=""
          faqsContainerClassName=""
          accordionClassName=""
          accordionTitleClassName=""
          accordionIconContainerClassName=""
          accordionIconClassName=""
          accordionContentClassName=""
          separatorClassName=""
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Get Started?"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Schedule Your HVAC Service Today"
          description="Contact Heat-N-Air Guys to book an installation, maintenance appointment, or emergency repair. Our friendly team is ready to help you stay comfortable."
          buttons={[
            { text: "Call Us: (555) 123-4567", href: "tel:5551234567" },
            { text: "Request Quote Online", href: "#" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "downward-rays-static" }}
          useInvertedBackground={true}
          ariaLabel="Contact and Request Quote Section"
          className=""
          containerClassName=""
          contentClassName=""
          textBoxClassName=""
          titleClassName=""
          descriptionClassName=""
          tagClassName=""
          buttonContainerClassName=""
          buttonClassName=""
          buttonTextClassName=""
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/male-electrician-working-switchboard-with-fuses_169016-53034.jpg"
          imageAlt="HVAC maintenance service"
          logoText="Heat-N-Air Guys"
          copyrightText="© 2025 Heat-N-Air Guys. All rights reserved."
          columns={[
            {
              title: "Services",              items: [
                { label: "Installation", href: "#services" },
                { label: "Maintenance", href: "#services" },
                { label: "Emergency Repair", href: "#contact" },
                { label: "Inspections", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#about" },
                { label: "Why Choose Us", href: "#about" },
                { label: "Testimonials", href: "#testimonials" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Facebook", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Google Reviews", href: "#" }
              ]
            }
          ]}
          ariaLabel="Site footer with navigation links"
          className=""
          containerClassName=""
          mediaWrapperClassName=""
          mediaClassName=""
          logoTextClassName=""
          columnsClassName=""
          columnClassName=""
          columnTitleClassName=""
          columnItemClassName=""
          copyrightContainerClassName=""
          copyrightTextClassName=""
          privacyButtonClassName=""
        />
      </div>
    </ThemeProvider>
  );
}