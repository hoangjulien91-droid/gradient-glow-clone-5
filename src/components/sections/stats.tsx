"use client";

import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

type StatCard = {
  value: string;
  label: string;
  Icon: React.ElementType;
  colorClass: string;
  bgClass: string;
  glowClass: string;
};

const statsData: StatCard[] = [
  {
    value: "60%",
    label: "des victimes renoncent faute de preuves suffisantes",
    Icon: TrendingDown,
    colorClass: "text-accent-coral",
    bgClass: "bg-gradient-to-br from-accent-coral/15 to-accent-salmon/15",
    glowClass: "bg-accent-coral",
  },
  {
    value: "80%",
    label: "des procédures échouent par manque de constitution de dossier",
    Icon: AlertTriangle,
    colorClass: "text-warning-orange",
    bgClass: "bg-gradient-to-br from-warning-orange/15 to-orange-400/15",
    glowClass: "bg-warning-orange",
  },
  {
    value: "3x",
    label: "plus de chances de succès avec un accompagnement professionnel",
    Icon: TrendingUp,
    colorClass: "text-accent-blue",
    bgClass: "bg-gradient-to-br from-accent-blue/15 to-blue-500/15",
    glowClass: "bg-accent-blue",
  },
];

const StatCard = ({ stat }: { stat: StatCard }) => (
  <div className="group relative glass-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden hover:-translate-y-2">
    <div className="relative z-10 flex flex-col items-center">
      <div
        className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${stat.bgClass}`}
      >
        <stat.Icon
          className={`w-11 h-11 ${stat.colorClass}`}
          strokeWidth={2}
        />
      </div>
      <div
        className={`text-7xl font-bold mb-6 font-display ${stat.colorClass}`}
      >
        {stat.value}
      </div>
      <p className="text-text-secondary text-center leading-relaxed font-semibold text-base">
        {stat.label}
      </p>
    </div>
    <div
      className={`absolute -bottom-12 -right-12 w-36 h-36 rounded-full ${stat.glowClass} blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
    ></div>
  </div>
);

const StatsSection = () => {
  return (
    <section className="bg-background py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-accent-blue/10 to-transparent rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-accent-coral/10 to-transparent rounded-full blur-[90px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-display bg-gradient-to-r from-accent-blue via-text-primary to-accent-coral bg-clip-text text-transparent">
            Les Chiffres qui Parlent
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-medium">
            Pourquoi l'accompagnement professionnel fait toute la différence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-text-secondary mb-6 font-semibold">
            Ne laissez pas votre situation sans réponse
          </p>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-cta-bg text-primary-foreground rounded-xl font-semibold text-lg shadow-lg hover:shadow-button-glow transition-all duration-300 overflow-hidden transform hover:scale-105"
            style={{ backgroundSize: '200% auto' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-700"></div>
            <Sparkles className="w-5 h-5 relative z-10" />
            <span className="relative z-10">
              Obtenez un accompagnement professionnel
            </span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;