# Configuration Vercel - Variables d'environnement

## Variables d'environnement requises

Pour que l'application fonctionne correctement sur Vercel, vous devez configurer les variables d'environnement suivantes dans votre dashboard Vercel :

### 1. Aller dans votre projet Vercel
- Connectez-vous à [vercel.com](https://vercel.com)
- Sélectionnez votre projet `gradient-glow-clone-5`
- Allez dans l'onglet "Settings" → "Environment Variables"

### 2. Ajouter les variables suivantes :

#### Sanity CMS
```
NEXT_PUBLIC_SANITY_PROJECT_ID = atgarfdr
NEXT_PUBLIC_SANITY_DATASET = production
```

#### Supabase
```
NEXT_PUBLIC_SUPABASE_URL = https://wpgtsqjcdosuegpophvv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZ3RzcWpjZG9zdWVncG9waHZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMTQ4MTIsImV4cCI6MjA3MzU5MDgxMn0.NDVPPOABuSsBUMTzCvbsrcTE7Kf2DuJYBR_JVPk3b0M
SUPABASE_SERVICE_ROLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZ3RzcWpjZG9zdWVncG9waHZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODAxNDgxMiwiZXhwIjoyMDczNTkwODEyfQ.wUEG-t35GSsJ_KEJb83j_ylH7lw0HZdqOsjSHvX1Q6s
```

#### Email (Resend)
```
RESEND_API_KEY = re_4vCecTrb_JJW6mQp4xyU6CYBY3DD3GaRF
ADMIN_EMAIL = julien.hoang@gmail.com
```

**Note :** Les variables Resend ont des valeurs par défaut dans le code, donc l'application fonctionnera même sans les configurer dans Vercel.

### 3. Redéployer
- Après avoir ajouté toutes les variables, redéployez votre application
- Le build devrait maintenant réussir

## Alternative : Configuration via CLI

Vous pouvez aussi configurer les variables via la CLI Vercel :

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add RESEND_API_KEY
vercel env add ADMIN_EMAIL
```
