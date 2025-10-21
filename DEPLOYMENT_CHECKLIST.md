# ✅ Checklist de Déploiement - Optimisations Next.js

## 📋 Pré-déploiement

### 1. Variables d'Environnement (CRITIQUE)

Créer `.env.local` avec les variables suivantes :

```bash
# REQUIS - Le build échouera sans ces variables
NEXT_PUBLIC_SUPABASE_URL=https://wpgtsqjcdosuegpophvv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anon_key_ici
SUPABASE_SERVICE_ROLE_KEY=votre_service_role_key_ici

# REQUIS - Configuration Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=atgarfdr
NEXT_PUBLIC_SANITY_DATASET=production

# REQUIS - URL du site
NEXT_PUBLIC_SITE_URL=https://julienhoang-detective.fr

# OPTIONNEL - Revalidation on-demand
REVALIDATE_SECRET=générer_une_clé_aléatoire_sécurisée

# OPTIONNEL - Emails
ADMIN_EMAIL=julien.hoang@example.com
RESEND_API_KEY=re_votre_clé_resend

# OPTIONNEL - Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 2. Configuration Vercel

**Variables d'environnement à ajouter sur Vercel :**
1. Aller dans Settings → Environment Variables
2. Ajouter toutes les variables ci-dessus
3. Scope: Production, Preview, Development (selon besoin)

### 3. Tests Locaux

```bash
# 1. Installer les dépendances
npm install

# 2. Créer .env.local avec vos clés réelles

# 3. Tester le build
npm run build

# 4. Tester en production locale
npm run start

# 5. Vérifier que tout fonctionne :
- ✅ Page d'accueil charge
- ✅ Images Hero s'affichent
- ✅ Formulaire de contact fonctionne
- ✅ Blog charge les articles Sanity
- ✅ Pas d'erreurs dans la console
```

### 4. Analyse Bundle (Recommandé)

```bash
# Analyser la taille du bundle
npm run build:analyze

# Vérifier :
- Client Bundle < 200KB (gzip)
- First Load < 150KB
- Pas de duplications de packages
```

### 5. Audit Performance

```bash
# Option A: Lighthouse CI
npm run lighthouse

# Option B: Lighthouse manuel
# 1. Build production: npm run build && npm run start
# 2. Chrome DevTools > Lighthouse
# 3. Mode Desktop ET Mobile
# 4. Vérifier scores > 90
```

---

## 🚀 Déploiement Vercel

### Configuration Recommandée

**Build & Development Settings:**
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

**Root Directory:** (laisser vide si racine du repo)

**Node Version:** 20.x ou 18.x

### Headers de Sécurité

Les headers sont configurés dans `next.config.ts`. Vérifier qu'ils sont appliqués :

```bash
curl -I https://votre-domaine.com
```

Devrait inclure :
- `Strict-Transport-Security`
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`

### Optimisations Vercel Spécifiques

1. **Enable Edge Network**: Automatique avec Vercel
2. **Image Optimization**: Automatique avec next/image
3. **Analytics**: Activer Vercel Analytics dans le dashboard

---

## 🔄 Post-déploiement

### 1. Tester en Production

```bash
# URLs à tester :
✅ https://julienhoang-detective.fr/
✅ https://julienhoang-detective.fr/blog
✅ https://julienhoang-detective.fr/services
✅ https://julienhoang-detective.fr/contact

# Vérifier :
- Temps de chargement < 3s
- Images au format AVIF/WebP
- Pas d'erreurs console
- Formulaire de contact fonctionne
```

### 2. Configurer Webhooks Sanity (Optionnel)

Pour revalidation on-demand des articles de blog :

**Dans Sanity Studio :**
1. Aller dans Settings → Webhooks
2. Créer nouveau webhook
3. URL: `https://julienhoang-detective.fr/api/revalidate`
4. Method: POST
5. Body:
```json
{
  "secret": "votre_REVALIDATE_SECRET",
  "tag": "posts"
}
```
6. Trigger: On create/update/delete de documents `post`

### 3. Monitoring Continu

**Vercel Analytics :**
- Activer dans Project Settings → Analytics
- Suivre Core Web Vitals en temps réel

**Erreurs :**
- Vérifier Vercel Logs régulièrement
- Configurer Sentry (optionnel) pour error tracking

**Performance :**
- Surveiller les métriques Core Web Vitals
- Target : LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 🐛 Troubleshooting

### Erreur: "Missing env variable"

**Solution :**
```bash
# Vérifier .env.local existe
cat .env.local

# Vérifier les variables Vercel
vercel env ls

# Ajouter les variables manquantes
vercel env add NEXT_PUBLIC_SUPABASE_URL
```

### Erreur: "Cannot find module 'sharp'"

**Solution :**
```bash
npm install sharp
npm run build
```

### Images ne chargent pas

**Solution :**
1. Vérifier que les domaines sont dans `next.config.ts` → `images.remotePatterns`
2. Vérifier que les URLs images sont HTTPS
3. Vérifier les logs Vercel pour erreurs 403/404

### Build TypeScript échoue

**Solution :**
```bash
# Vérifier les erreurs
npm run type-check

# Corriger les erreurs TypeScript
# NE PAS mettre ignoreBuildErrors: true
```

### Performance dégradée

**Checklist :**
- [ ] Vérifier que les images ont `priority` si LCP
- [ ] Vérifier cache Sanity (logs network)
- [ ] Vérifier bundle size (npm run build:analyze)
- [ ] Vérifier fonts preload
- [ ] Vérifier DNS prefetch

---

## 📊 Métriques de Succès

### Core Web Vitals (Target)

- **LCP (Largest Contentful Paint):** < 2.5s ✅
- **FID (First Input Delay):** < 100ms ✅
- **CLS (Cumulative Layout Shift):** < 0.1 ✅

### Lighthouse Scores (Target)

- **Performance:** > 90 ✅
- **Accessibility:** > 95 ✅
- **Best Practices:** > 90 ✅
- **SEO:** > 95 ✅

### Bundle Size (Target)

- **First Load JS:** < 150KB ✅
- **Total Page Weight:** < 500KB ✅

---

## 🔐 Sécurité Post-déploiement

### Vérifications

```bash
# 1. Test injection SQL (devrait échouer)
curl -X POST https://votre-domaine.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"test","email":"test@test.com","message":"<script>alert(1)</script>"}'

# 2. Test rate limiting (3ème requête devrait retourner 429)
for i in {1..4}; do
  curl -X POST https://votre-domaine.com/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"test","email":"test@test.com","message":"test"}'
done

# 3. Vérifier headers sécurité
curl -I https://votre-domaine.com | grep -E "(X-Frame|Strict-Transport|Content-Type-Options)"
```

### Résultats Attendus

- ✅ Injection HTML sanitizée
- ✅ Rate limiting actif (429 après 3 req/min)
- ✅ Headers sécurité présents

---

## 📞 Support

En cas de problème :

1. Vérifier les logs Vercel
2. Vérifier la documentation des optimisations (`OPTIMIZATIONS.md`)
3. Tester localement avec `npm run build && npm run start`
4. Rollback si nécessaire : `vercel rollback`

---

**Date:** 21 Octobre 2025  
**Version:** 0.1.1  
**Dernière révision:** Optimisations complètes effectuées

