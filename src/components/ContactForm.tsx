"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Une erreur est survenue");
      }

      setStatus("success");
      reset(); // Reset form after successful submission

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Erreur lors de l'envoi du message"
      );

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-secondary mb-2"
        >
          Nom complet <span className="text-accent-coral">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "Le nom est requis",
            minLength: {
              value: 2,
              message: "Le nom doit contenir au moins 2 caractères",
            },
          })}
          className={`w-full px-4 py-3 bg-bg-secondary border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 transition-all ${
            errors.name
              ? "border-destructive focus:ring-destructive"
              : "border-border focus:ring-accent-blue"
          }`}
          placeholder="Votre nom complet"
          disabled={status === "loading"}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-secondary mb-2"
        >
          Email <span className="text-accent-coral">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "L'email est requis",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Format d'email invalide",
            },
          })}
          className={`w-full px-4 py-3 bg-bg-secondary border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 transition-all ${
            errors.email
              ? "border-destructive focus:ring-destructive"
              : "border-border focus:ring-accent-blue"
          }`}
          placeholder="votre.email@exemple.com"
          disabled={status === "loading"}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone Field (Optional) */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-text-secondary mb-2"
        >
          Téléphone <span className="text-text-muted text-xs">(optionnel)</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="w-full px-4 py-3 bg-bg-secondary border border-border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
          placeholder="06 12 34 56 78"
          disabled={status === "loading"}
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-secondary mb-2"
        >
          Message <span className="text-accent-coral">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message", {
            required: "Le message est requis",
            minLength: {
              value: 10,
              message: "Le message doit contenir au moins 10 caractères",
            },
          })}
          className={`w-full px-4 py-3 bg-bg-secondary border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message
              ? "border-destructive focus:ring-destructive"
              : "border-border focus:ring-accent-blue"
          }`}
          placeholder="Décrivez votre situation en quelques mots..."
          disabled={status === "loading"}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div className="flex items-center gap-2 p-4 bg-success-green/10 border border-success-green/20 rounded-xl text-success-green">
          <CheckCircle2 className="w-5 h-5" />
          <p className="text-sm font-medium">
            Votre message a été envoyé avec succès ! Nous vous répondrons dans
            les plus brefs délais.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm font-medium">
            {errorMessage || "Une erreur est survenue. Veuillez réessayer."}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-8 py-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-coral text-white font-semibold rounded-xl shadow-lg hover:shadow-button-glow transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Envoyer le message
          </>
        )}
      </button>

      {/* Privacy Notice */}
      <div className="flex items-start gap-2 p-3 bg-warning-orange/10 border border-warning-orange/20 rounded-lg">
        <AlertCircle className="w-4 h-4 text-warning-orange flex-shrink-0 mt-0.5" />
        <p className="text-xs text-text-secondary">
          <strong className="text-text-primary">Confidentialité garantie :</strong>{" "}
          Vos informations sont strictement confidentielles et protégées. Elles
          ne seront jamais partagées avec des tiers.
        </p>
      </div>
    </form>
  );
}