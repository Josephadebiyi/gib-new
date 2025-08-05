# GITB - Global Institute of Technology and Business

This is a Next.js application for the Global Institute of Technology and Business (GITB), offering professional courses in Tech, Business, and Language.

## Features

- **Multi-language Support**: English and Lithuanian translations.
- **Course Catalog**: Browse various industry-ready programs.
- **Course Detail Pages**: Detailed information for each course.
- **Application Form**: Online application for prospective students.
- **Admin Dashboard**: Manage courses (CRUD operations).
- **Legal Pages**: Cookie Policy, Privacy Policy, Terms & Conditions.
- **Responsive Design**: Optimized for various screen sizes.

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/your-repo/gitb-website.git
cd gitb-website
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Set up Environment Variables

Create a `.env.local` file in the root of your project and add your Supabase credentials:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_URL"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
SUPABASE_SERVICE_ROLE_KEY="YOUR_SUPABASE_SERVICE_ROLE_KEY" # Used for server-side operations if needed
\`\`\`

You can find these keys in your Supabase project settings under `API`.

### 4. Run Supabase Migrations (Optional, but Recommended)

If you want to set up your Supabase database with the necessary tables and data, you can run the provided SQL scripts.

First, ensure you have the Supabase CLI installed and configured.
Then, you can execute the scripts in order:

\`\`\`bash
# Connect to your Supabase project
supabase login
supabase link --project-ref your-project-ref

# Run the migration scripts
supabase db push
\`\`\`

Alternatively, you can manually run the SQL commands from `scripts/01-create-tables.sql`, `scripts/02-insert-courses.sql`, and `scripts/03-setup-rls.sql` in your Supabase SQL Editor.

## Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable React components, including `shadcn/ui` components.
- `hooks/`: Custom React hooks (e.g., `useTranslation`, `use-toast`).
- `lib/`: Utility functions and API integrations (e.g., `supabase.ts`, `api.ts`, `translations.ts`).
- `public/`: Static assets like images.
- `scripts/`: SQL scripts for database setup.
- `styles/`: Global CSS.

## Technologies Used

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React (icons)
- Supabase (database and authentication)

## Deployment

This project can be easily deployed to Vercel. Ensure your environment variables are configured in your Vercel project settings.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
