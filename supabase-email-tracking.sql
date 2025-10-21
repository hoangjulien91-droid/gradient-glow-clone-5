-- ============================================================================
-- AJOUT DES COLONNES DE SUIVI DES EMAILS
-- ============================================================================
-- Ce fichier ajoute les colonnes de tracking pour les emails envoyés
-- depuis le formulaire de contact.
-- ============================================================================

-- Ajouter les colonnes de suivi des emails à la table contact_submissions
ALTER TABLE contact_submissions
ADD COLUMN IF NOT EXISTS email_sent_confirmation BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS email_sent_notification BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS email_sent_at TIMESTAMPTZ;

-- Commentaires pour documentation
COMMENT ON COLUMN contact_submissions.email_sent_confirmation IS 'Indique si l''email de confirmation a été envoyé au visiteur';
COMMENT ON COLUMN contact_submissions.email_sent_notification IS 'Indique si l''email de notification a été envoyé à l''admin';
COMMENT ON COLUMN contact_submissions.email_sent_at IS 'Horodatage de l''envoi des emails';

-- Index pour faciliter les requêtes de suivi des emails
CREATE INDEX IF NOT EXISTS idx_contact_email_tracking 
ON contact_submissions(email_sent_confirmation, email_sent_notification);

-- Index pour recherche par date d'envoi
CREATE INDEX IF NOT EXISTS idx_contact_email_sent_at 
ON contact_submissions(email_sent_at DESC);