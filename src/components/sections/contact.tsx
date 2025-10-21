"use client";

import { Phone, Mail, MapPin, Clock, Lock, Send } from "lucide-react";
import { useState } from "react";

interface InfoCardProps {
  icon: React.ElementType;
  bgColor: string;
  title: string;
  line1: string;
  line2: string;
  href?: string;
}

const contactDetails: InfoCardProps[] = [
  {
    icon: Phone,
    bgColor: "bg-gradient-to-br from-accent-coral to-accent-salmon",
    title: "Téléphone",
    line1: "06 95 21 23 25",
    line2: "Appel confidentiel",
    href: "tel:0695212325",
  },
  {
    icon: Mail,
    bgColor: "bg-gradient-to-br from-accent-blue to-blue-600",
    title: "Email",
    line1: "contact@julien-hoang-detective.fr",
    line2: "Réponse rapide garantie",
    href: "mailto:contact@julien-hoang-detective.fr",
  },
  {
    icon: MapPin,
    bgColor: "bg-gradient-to-br from-accent-coral to-accent-salmon",
    title: "Localisation",
    line1: "Biarritz, Pays Basque",
    line2: "Interventions dans toute la France",
  },
  {
    icon: Clock,
    bgColor: "bg-gradient-to-br from-accent-blue to-blue-600",
    title: "Disponibilité",
    line1: "24/7 pour les urgences",
    line2: "Horaires de bureau: Lun-Ven 9h-19h",
  },
];

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, bgColor, title, line1, line2, href }) => {
  const CardContent = () => (
    <>
      <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center shadow-lg ${bgColor}`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <p className="text-gray-200">{line1}</p>
        <p className="text-sm text-gray-400">{line2}</p>
      </div>
    </>
  );

  const cardClasses = "block bg-bg-secondary/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-glow";

  if (href) {
    return (
      <a href={href} className={cardClasses}>
        <CardContent />
      </a>
    );
  }

  return (
    <div className={cardClasses}>
      <CardContent />
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg(null);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          message: formData.message,
          subject: formData.subject || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Échec de l'envoi du message");
      setSuccessMsg(
        "Votre message a été envoyé avec succès. Je vous répondrai sous 24h."
      );
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: any) {
      setErrorMsg(err?.message || "Erreur serveur. Veuillez réessayer plus tard.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-bg-primary py-20 lg:py-32 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-blue/20 to-transparent top-0 -left-40 blur-[100px]"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-coral/20 to-transparent bottom-0 -right-40 blur-[100px]"></div>
        <div className="absolute top-[10%] left-[5%] w-4 h-4 border-2 border-white/10 transform rotate-45"></div>
        <div className="absolute top-[20%] right-[10%] w-3 h-3 bg-accent-blue/20 rounded-full"></div>
        <div className="absolute bottom-[15%] left-[20%] w-5 h-5 border border-accent-coral/20"></div>
        <div className="absolute bottom-[25%] right-[25%] w-2 h-2 bg-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center">
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Me Contacter</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-16 lg:mb-24">
            Première consultation découverte gratuite de 15 minutes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
          <div className="space-y-8">
            <div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                    Parlons de votre situation
                </h3>
                <p className="text-text-secondary text-lg">
                    Chaque situation est unique. Je suis là pour vous écouter et vous accompagner avec empathie et professionnalisme.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((item, index) => (
                <InfoCard key={index} {...item} />
              ))}
            </div>
          </div>

          <div className="bg-bg-secondary/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 h-full shadow-lg">
            {successMsg && (
              <div className="mb-6 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-300">
                {successMsg}
              </div>
            )}
            {errorMsg && (
              <div className="mb-6 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-red-300">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Nom complet <span className="text-accent-coral">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom et prénom"
                  className="w-full bg-[#1a202c]/50 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue transition-colors duration-300 placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email <span className="text-accent-coral">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full bg-[#1a202c]/50 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue transition-colors duration-300 placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 XX XX XX XX"
                  className="w-full bg-[#1a202c]/50 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue transition-colors duration-300 placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Sujet de votre demande <span className="text-accent-coral">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#1a202c]/50 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue transition-colors duration-300"
                >
                  <option value="" disabled>
                    Choisissez le sujet de votre demande
                  </option>
                  <option value="violences-conjugales">Violences conjugales</option>
                  <option value="harcelement">Harcèlement</option>
                  <option value="cyberviolences">Cyberviolences</option>
                  <option value="arnaques">Arnaques et escroqueries</option>
                  <option value="protection">Protection et prévention</option>
                  <option value="constitution-dossier">Constitution de dossier</option>
                  <option value="accompagnement">Accompagnement judiciaire</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Votre message <span className="text-accent-coral">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre situation de manière confidentielle..."
                  className="w-full bg-[#1a202c]/50 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue transition-colors duration-300 placeholder:text-gray-500 resize-none"
                ></textarea>
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-warning-orange/15 p-4 text-sm text-warning-orange border border-warning-orange/20">
                <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Vos informations sont strictement confidentielles et ne seront jamais partagées.</span>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#4A90E2] via-[#EA6C4F] to-[#E85D4D] px-6 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-button-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative z-10">{submitting ? "Envoi en cours..." : "Envoyer le message"}</span>
                  <Send className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;