-- Insert some dummy data into the courses table
INSERT INTO public.courses (title, description, image_url, duration, price, category, career_outcomes, enrollment_details, modules, slug)
SELECT
    'Cybersecurity Professional',
    'Comprehensive course covering cybersecurity fundamentals and advanced topics.',
    '/images/cybersecurity-professional-flyer.png',
    '12 Weeks',
    '€1200',
    'Cybersecurity',
    ARRAY['Security Analyst', 'Penetration Tester', 'Incident Responder'],
    'Enrollment is open year-round. Prerequisites: Basic IT knowledge.',
    '[{"title": "Module 1: Introduction to Cybersecurity", "description": "Overview of cybersecurity concepts."}, {"title": "Module 2: Network Security", "description": "Securing network infrastructure."}]',
    'cybersecurity-professional'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'Cybersecurity Professional');

INSERT INTO public.courses (title, description, image_url, duration, price, category, career_outcomes, enrollment_details, modules, slug)
SELECT
    'Cybersecurity Vulnerability',
    'Deep dive into identifying and mitigating software vulnerabilities.',
    '/images/cybersecurity-vulnerability-flyer.png',
    '8 Weeks',
    '€900',
    'Cybersecurity',
    ARRAY['Vulnerability Analyst', 'Security Auditor'],
    'Next intake: September. Prerequisites: Intermediate programming skills.',
    '[{"title": "Module 1: Web Application Vulnerabilities", "description": "Common web app flaws."}, {"title": "Module 2: Exploit Development", "description": "Understanding exploit techniques."}]',
    'cybersecurity-vulnerability'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'Cybersecurity Vulnerability');

INSERT INTO public.courses (title, description, image_url, duration, price, category, career_outcomes, enrollment_details, modules, slug)
SELECT
    'European Languages',
    'Learn essential communication skills in various European languages.',
    '/images/european-languages-flyer.png',
    '10 Weeks',
    '€750',
    'Languages',
    ARRAY['Translator', 'International Business Professional'],
    'Multiple start dates available. No prerequisites.',
    '[{"title": "Module 1: Basic Grammar", "description": "Foundational grammar rules."}, {"title": "Module 2: Conversational Practice", "description": "Daily conversation scenarios."}]',
    'european-languages'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'European Languages');

INSERT INTO public.courses (title, description, image_url, duration, price, category, career_outcomes, enrollment_details, modules, slug)
SELECT
    'IAM Specialist',
    'Master Identity and Access Management principles and technologies.',
    '/images/iam-specialist-flyer.png',
    '14 Weeks',
    '€1500',
    'Cybersecurity',
    ARRAY['IAM Engineer', 'Access Control Specialist'],
    'Enrollment closes soon. Prerequisites: Experience with enterprise IT systems.',
    '[{"title": "Module 1: IAM Fundamentals", "description": "Core concepts of IAM."}, {"title": "Module 2: Directory Services", "description": "Working with LDAP and Active Directory."}]',
    'iam-specialist'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'IAM Specialist');

INSERT INTO public.courses (title, description, image_url, duration, price, category, career_outcomes, enrollment_details, modules, slug)
SELECT
    'KYC Compliance',
    'Understand Know Your Customer regulations and compliance best practices.',
    '/images/kyc-compliance-flyer.png',
    '6 Weeks',
    '€800',
    'Finance',
    ARRAY['Compliance Officer', 'AML Analyst'],
    'Flexible start dates. Prerequisites: Basic understanding of financial regulations.',
    '[{"title": "Module 1: Introduction to KYC", "description": "Regulatory landscape."}, {"title": "Module 2: Customer Due Diligence", "description": "Performing CDD."}]',
    'kyc-compliance'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'KYC Compliance');

INSERT INTO public.courses (title, description, image_url, duration, price, category, career_outcomes, enrollment_details, modules, slug)
SELECT
    'UI/UX Design',
    'Learn to create intuitive and engaging user interfaces and experiences.',
    '/images/uiux-design-flyer.png',
    '10 Weeks',
    '€1100',
    'Design',
    ARRAY['UI Designer', 'UX Researcher', 'Product Designer'],
    'Enrollment is open. Prerequisites: No prior design experience needed.',
    '[{"title": "Module 1: Design Principles", "description": "Foundational design concepts."}, {"title": "Module 2: User Research", "description": "Techniques for understanding users."}]',
    'uiux-design'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'UI/UX Design');

INSERT INTO public.courses (title, description, category, image_url, slug)
SELECT
    'UI/UX Design Fundamentals',
    'Master the principles of user interface and user experience design, from wireframing to prototyping and user testing.',
    'Design',
    '/images/uiux-design-course.jpg',
    'uiux-design'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'UI/UX Design Fundamentals');

INSERT INTO public.courses (title, description, category, image_url, slug)
SELECT
    'Identity & Access Management (IAM) Specialist',
    'Learn to manage digital identities and access controls, a critical skill for modern enterprise security.',
    'Cybersecurity',
    '/images/iam-course.jpg',
    'iam-specialist'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'Identity & Access Management (IAM) Specialist');

INSERT INTO public.courses (title, description, category, image_url, slug)
SELECT
    'KYC & AML Compliance',
    'Understand the essentials of Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations and practices.',
    'Business',
    '/images/kyc-compliance-course.jpg',
    'kyc-compliance'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'KYC & AML Compliance');

INSERT INTO public.courses (title, description, category, image_url, slug)
SELECT
    'European Languages for Business',
    'Enhance your career prospects by learning key European languages with a focus on business communication.',
    'Languages',
    '/images/language-courses.jpg',
    'european-languages'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'European Languages for Business');

INSERT INTO public.courses (title, description, category, image_url, slug)
SELECT
    'Cybersecurity Vulnerability Assessment',
    'Develop skills in identifying, analyzing, and mitigating security vulnerabilities in systems and applications.',
    'Cybersecurity',
    '/images/cybersecurity-vuln-flyer.jpg',
    'cybersecurity-vulnerability'
WHERE NOT EXISTS (SELECT 1 FROM public.courses WHERE title = 'Cybersecurity Vulnerability Assessment');
