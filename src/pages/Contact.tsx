import React, { useState } from "react";
import { HeaderNav } from "../components/HeaderNav";
import { Link } from "react-router-dom";
import { SocialLinks } from "../components/SocialLinks";
import { motion } from "framer-motion";

type ServiceType =
  | ""
  | "web-development"
  | "logo-design"
  | "ui-ux-design"
  | "brand-identity"
  | "other";

const services = [
  { id: "web-development", label: "Web Development" },
  { id: "logo-design", label: "Logo Design" },
  { id: "ui-ux-design", label: "UI/UX Design" },
  { id: "brand-identity", label: "Brand Identity" },
  { id: "other", label: "Other" },
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "" as ServiceType,
    // budget: "",
    // timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const response = await fetch("https://formspree.io/f/xqaqbegd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        service: formData.service,
        // budget: formData.budget,
        // timeline: formData.timeline,
        message: formData.message,
      }),
    });
  
    setIsSubmitting(false);
  
    if (response.ok) {
      setSubmitMessage("Thank you for your message! I will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        service: "" as ServiceType,
        // budget: "",
        // timeline: "",
        message: "",
      });
      setTimeout(() => setSubmitMessage(""), 5000);
    } else {
      setSubmitMessage("Something went wrong. Please try again later.");
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <HeaderNav />
      <Link
        to="/"
        className="inline-block mb-8 text-white/70 hover:text-white transition-colors"
      >
        ← Back to Home
      </Link>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Contact</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-white/80 mb-6">
                  I'm always open to new opportunities and collaborations.
                  Whether you need a website, logo design, or brand identity,
                  I'm here to help bring your vision to life.
                </p>

                <div className="mb-8">
                  <SocialLinks />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Location</h2>
                <p className="text-white/80">Based in Butwal, Nepal</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
                <p className="text-white/80">
                  Monday - Friday: 9:00 AM - 5:00 PM (NPT)
                </p>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Let's Work Together</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        service: e.target.value as ServiceType,
                      }))
                    }
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30 [&>option]:bg-black [&>option]:text-white"
                  >
                    <option
                      value=""
                      disabled={formData.service !== ""}
                      className="text-white bg-black"
                    >
                      Select a service 
                    </option>
                    {services.map((service) => (
                      <option
                        key={service.id}
                        value={service.id}
                        className="text-white bg-black py-2"
                      >
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30 [&>option]:bg-black [&>option]:text-white"
                    >
                      <option value="" className="text-white bg-black">Select budget</option>
                      <option value="< Rs2000" className="text-white bg-black py-2">Less than Rs 2000</option>
                      <option value="$1000-$3000" className="text-white bg-black py-2">$1,000 - $3,000</option>
                      <option value="$3000-$5000" className="text-white bg-black py-2">$3,000 - $5,000</option>
                      <option value="> $5000" className="text-white bg-black py-2">More than $5,000</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-white/80 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30 [&>option]:bg-black [&>option]:text-white"
                    >
                      <option value="" className="text-white bg-black">Select timeline</option>
                      <option value="< 1 month" className="text-white bg-black py-2">Less than 1 month</option>
                      <option value="1-2 months" className="text-white bg-black py-2">1-2 months</option>
                      <option value="2-3 months" className="text-white bg-black py-2">2-3 months</option>
                      <option value="> 3 months" className="text-white bg-black py-2">More than 3 months</option>
                    </select>
                  </div>
                </div> */}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto" />
                  ) : (
                    "Send Message"
                  )}
                </button>

                {submitMessage && (
                  <p className="text-green-400 text-sm text-center">
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
