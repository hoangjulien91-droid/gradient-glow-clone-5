"use client";

import { motion } from "framer-motion";
import { Lock, Send } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
      if (!res.ok) {
        throw new Error(data?.error || "Échec de l'envoi du message");
      }
      setSuccessMsg("Votre message a été envoyé avec succès. Je vous répondrai sous 24h.");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setErrorMsg(err?.message || "Erreur serveur. Veuillez réessayer plus tard.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-gradient-to-b from-bg-primary to-bg-secondary py-16 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-coral/20 to-transparent bottom-0 left-0 blur-[100px]"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent-blue/20 to-transparent top-0 right-0 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">Envoyez-moi un message</span>
            </h2>
          </div>

          <div className="glass-card rounded-3xl p-8 lg:p-12 shadow-lg">
            {/* Feedback messages */}
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
                  <option value="" disabled>Choisissez le sujet de votre demande</option>
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
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre situation de manière confidentielle..."
                  className="w-full bg-[#1a202c]/50 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue transition-colors duration-300 placeholder:text-gray-500 resize-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-warning-orange/15 p-4 text-sm text-warning-orange border border-warning-orange/20">
                <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Vos informations sont strictement confidentielles et protégées par le secret professionnel. 
                  Elles ne seront jamais partagées sans votre accord explicite.
                </span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group relative w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-accent-blue via-accent-purple to-accent-coral px-6 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-button-glow hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
                <span className="relative z-10">{submitting ? "Envoi en cours..." : "Envoyer le message"}</span>
                <Send className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;