-- =============================================
-- Supabase Database Schema
-- Tables: contact_submissions, testimonials, faq_items
-- =============================================

-- 1. Table: contact_submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  service_type TEXT,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour recherche et tri
CREATE INDEX idx_contact_email ON contact_submissions(email);
CREATE INDEX idx_contact_created ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_read ON contact_submissions(read);

-- 2. Table: testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id BIGSERIAL PRIMARY KEY,
  auteur TEXT NOT NULL,
  role TEXT NOT NULL,
  contenu TEXT NOT NULL,
  image TEXT,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour tri
CREATE INDEX idx_testimonials_created ON testimonials(created_at DESC);

-- 3. Table: faq_items
CREATE TABLE IF NOT EXISTS faq_items (
  id BIGSERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  reponse TEXT NOT NULL,
  categorie TEXT,
  ordre INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour tri par ordre
CREATE INDEX idx_faq_ordre ON faq_items(ordre ASC);
CREATE INDEX idx_faq_categorie ON faq_items(categorie);

-- =============================================
-- Row Level Security (RLS) Policies
-- =============================================

-- Enable RLS on all tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE faq_items ENABLE ROW LEVEL SECURITY;

-- =============================================
-- Policies for contact_submissions
-- =============================================

-- Public can INSERT (for contact form submissions)
CREATE POLICY "Public can insert contact submissions"
ON contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- Admin can SELECT, UPDATE, DELETE
CREATE POLICY "Admin can select contact submissions"
ON contact_submissions
FOR SELECT
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admin can update contact submissions"
ON contact_submissions
FOR UPDATE
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admin can delete contact submissions"
ON contact_submissions
FOR DELETE
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin');

-- =============================================
-- Policies for testimonials
-- =============================================

-- Public can SELECT (read testimonials)
CREATE POLICY "Public can select testimonials"
ON testimonials
FOR SELECT
TO public
USING (true);

-- Admin can INSERT, UPDATE, DELETE
CREATE POLICY "Admin can insert testimonials"
ON testimonials
FOR INSERT
TO authenticated
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admin can update testimonials"
ON testimonials
FOR UPDATE
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admin can delete testimonials"
ON testimonials
FOR DELETE
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin');

-- =============================================
-- Policies for faq_items
-- =============================================

-- Public can SELECT (read FAQ items)
CREATE POLICY "Public can select faq items"
ON faq_items
FOR SELECT
TO public
USING (true);

-- Admin can INSERT, UPDATE, DELETE
CREATE POLICY "Admin can insert faq items"
ON faq_items
FOR INSERT
TO authenticated
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admin can update faq items"
ON faq_items
FOR UPDATE
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admin can delete faq items"
ON faq_items
FOR DELETE
TO authenticated
USING (auth.jwt() ->> 'role' = 'admin');

-- =============================================
-- Trigger: Auto-update updated_at timestamp
-- =============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON contact_submissions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_testimonials_updated_at
BEFORE UPDATE ON testimonials
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_faq_items_updated_at
BEFORE UPDATE ON faq_items
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- Sample Data (Optional - for testing)
-- =============================================

-- Sample testimonials
INSERT INTO testimonials (auteur, role, contenu, rating) VALUES
('Sophie M.', 'Victime de violences conjugales', 'Grâce à l''accompagnement de Julien, j''ai pu rassembler les preuves nécessaires pour obtenir une ordonnance de protection. Son professionnalisme et son empathie m''ont aidée à traverser cette épreuve difficile.', 5),
('Marc D.', 'Victime de harcèlement professionnel', 'L''investigation menée par Julien a été déterminante dans ma procédure. Il a su documenter avec précision tous les faits et constituer un dossier solide qui m''a permis d''obtenir gain de cause.', 5),
('Claire L.', 'Victime d''escroquerie', 'Un accompagnement remarquable du début à la fin. Julien a non seulement mené l''enquête avec rigueur, mais m''a aussi soutenue psychologiquement tout au long de la procédure.', 5);

-- Sample FAQ items
INSERT INTO faq_items (question, reponse, categorie, ordre) VALUES
('Qu''est-ce qu''un détective victimologue?', 'Un détective victimologue combine l''expertise d''investigation privée avec une formation spécialisée en victimologie. Cette approche unique permet d''accompagner les victimes tout en menant des enquêtes rigoureuses pour constituer des dossiers solides recevables en justice.', 'Général', 1),
('Mes informations resteront-elles confidentielles?', 'Absolument. Le secret professionnel est au cœur de mon métier. Toutes les informations partagées sont strictement confidentielles et protégées. Je suis soumis aux obligations légales de confidentialité régies par le Code de la sécurité intérieure.', 'Confidentialité', 2),
('Combien coûte une enquête?', 'Les tarifs varient selon la complexité et la durée de l''enquête. Je propose une consultation découverte gratuite de 15 minutes pour évaluer votre situation et vous fournir une estimation personnalisée. Chaque cas étant unique, je m''adapte à votre budget.', 'Tarifs', 3),
('Combien de temps dure une enquête?', 'La durée dépend de la nature de l''affaire et des objectifs fixés. Une enquête peut durer de quelques jours à plusieurs semaines. Lors de notre première rencontre, je vous donnerai une estimation réaliste basée sur votre situation spécifique.', 'Processus', 4),
('Les preuves collectées sont-elles recevables en justice?', 'Oui, toutes les preuves que je collecte sont recueillies dans le respect strict du cadre légal français. En tant que détective privé agréé par le CNAPS, je maîtrise parfaitement les procédures pour garantir la recevabilité des éléments en justice.', 'Légal', 5),
('Puis-je vous contacter en urgence?', 'Oui, je propose un service d''intervention d''urgence disponible 24h/24 et 7j/7 pour les situations critiques nécessitant une action immédiate. N''hésitez pas à me contacter à tout moment si vous êtes en danger ou en détresse.', 'Disponibilité', 6),
('Travaillez-vous avec d''autres professionnels?', 'Oui, je collabore avec Audrey Castets, psychologue spécialisée en TCC, pour offrir un accompagnement global. Je travaille également en réseau avec des avocats, experts médicaux et associations d''aide aux victimes selon les besoins de chaque cas.', 'Collaboration', 7),
('Comment se déroule la première consultation?', 'La première consultation gratuite de 15 minutes permet d''évaluer votre situation, de discuter de vos besoins et de déterminer si je peux vous aider. Si nous décidons de travailler ensemble, je vous proposerai un plan d''action détaillé et un devis personnalisé.', 'Processus', 8);