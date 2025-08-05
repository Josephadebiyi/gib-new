-- This script is for initial table creation if not using Supabase directly.
-- It's superseded by 01-create-tables.sql, 02-insert-courses.sql, and 03-setup-rls.sql for Supabase.

CREATE TABLE IF NOT EXISTS public.courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    duration TEXT,
    price TEXT,
    category TEXT,
    career_outcomes TEXT[],
    enrollment_details TEXT,
    modules JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert some dummy data if the table is empty
INSERT INTO public.courses (title, description, image_url, duration, price, category, career_outcomes, enrollment_details, modules)
SELECT
    'Cybersecurity Professional',
    'Comprehensive course covering cybersecurity fundamentals and advanced topics.',
    '/images/cybersecurity-professional-flyer.png',
    '12 Weeks',
    '€1200',
    'Cybersecurity',
    ARRAY['Security Analyst', 'Penetration Tester', 'Incident Responder'],
    'Enrollment is open year-round. Prerequisites: Basic IT knowledge.',
    '[{"title": "Module 1: Introduction to Cybersecurity", "description": "Overview of cybersecurity concepts."}, {"title": "Module 2: Network Security", "description": "Securing network infrastructure."}]'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'Cybersecurity Professional');

INSERT INTO public.courses (title, description, image_url, duration, price, category, career_outcomes, enrollment_details, modules)
SELECT
    'Cybersecurity Vulnerability',
    'Deep dive into identifying and mitigating software vulnerabilities.',
    '/images/cybersecurity-vulnerability-flyer.png',
    '8 Weeks',
    '€900',
    'Cybersecurity',
    ARRAY['Vulnerability Analyst', 'Security Auditor'],
    'Next intake: September. Prerequisites: Intermediate programming skills.',
    '[{"title": "Module 1: Web Application Vulnerabilities", "description": "Common web app flaws."}, {"title": "Module 2: Exploit Development", "description": "Understanding exploit techniques."}]'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'Cybersecurity Vulnerability');

INSERT INTO public.courses (title, description, image_url, duration, price, category, career_outcomes, enrollment_details, modules)
SELECT
    'European Languages',
    'Learn essential communication skills in various European languages.',
    '/images/european-languages-flyer.png',
    '10 Weeks',
    '€750',
    'Languages',
    ARRAY['Translator', 'International Business Professional'],
    'Multiple start dates available. No prerequisites.',
    '[{"title": "Module 1: Basic Grammar", "description": "Foundational grammar rules."}, {"title": "Module 2: Conversational Practice", "description": "Daily conversation scenarios."}]'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'European Languages');

INSERT INTO public.courses (title, description, image_url, duration, price, category, career_outcomes, enrollment_details, modules)
SELECT
    'IAM Specialist',
    'Master Identity and Access Management principles and technologies.',
    '/images/iam-specialist-flyer.png',
    '14 Weeks',
    '€1500',
    'Cybersecurity',
    ARRAY['IAM Engineer', 'Access Control Specialist'],
    'Enrollment closes soon. Prerequisites: Experience with enterprise IT systems.',
    '[{"title": "Module 1: IAM Fundamentals", "description": "Core concepts of IAM."}, {"title": "Module 2: Directory Services", "description": "Working with LDAP and Active Directory."}]'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'IAM Specialist');

INSERT INTO public.courses (title, description, image_url, duration, price, category, career_outcomes, enrollment_details, modules)
SELECT
    'KYC Compliance',
    'Understand Know Your Customer regulations and compliance best practices.',
    '/images/kyc-compliance-flyer.png',
    '6 Weeks',
    '€800',
    'Finance',
    ARRAY['Compliance Officer', 'AML Analyst'],
    'Flexible start dates. Prerequisites: Basic understanding of financial regulations.',
    '[{"title": "Module 1: Introduction to KYC", "description": "Regulatory landscape."}, {"title": "Module 2: Customer Due Diligence", "description": "Performing CDD."}]'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'KYC Compliance');

INSERT INTO public.courses (title, description, image_url, duration, price, category, career_outcomes, enrollment_details, modules)
SELECT
    'UI/UX Design',
    'Learn to create intuitive and engaging user interfaces and experiences.',
    '/images/uiux-design-flyer.png',
    '10 Weeks',
    '€1100',
    'Design',
    ARRAY['UI Designer', 'UX Researcher', 'Product Designer'],
    'Enrollment is open. Prerequisites: No prior design experience needed.',
    '[{"title": "Module 1: Design Principles", "description": "Foundational design concepts."}, {"title": "Module 2: User Research", "description": "Techniques for understanding users."}]'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'UI/UX Design');

-- This script is a placeholder for initial table creation.
-- It's superseded by 01-create-tables.sql, 02-insert-courses.sql, and 03-setup-rls.sql.
-- No content needed here as per previous context.
