# Copilot Instructions: Journal for Advanced Computational and Business Studies (JACBS)

Goal: Build a fun, reactive research paper showcase and publication website with smooth animations, Google Scholar-friendly pages, and direct PDF downloads.

Key decisions
- Framework: Next.js App Router (TypeScript, `src/` structure).
- Hosting: Vercel.
- Auth: Supabase (@supabase/ssr + supabase-js) with email/password.
- UI/UX: Framer Motion for animations and transitions.
- Forms: react-hook-form + zod.
- SEO: next-sitemap postbuild, Metadata API + Highwire Press `citation_*` meta tags, JSON-LD for articles.
- Content: Papers hardcoded for now with direct PDF links in `/public/papers/*`.

Routes
- `/` Home: Hero, featured papers, animated CTAs.
- `/about`: Journal mission, scope, editorial approach, contact.
- `/browse`: List of papers with metadata, filters (basic), and direct PDF download.
- `/submit`: Auth-gated page with Sign In/Sign Up tabs; (stub) submission form once signed in.

SEO/Scholar
- Each page exports `generateMetadata` and includes `other.citation_*` tags when applicable.
- Include JSON-LD (`ScholarlyArticle`) per item on browse.
- `next-sitemap` generates `sitemap.xml` and `robots.txt` on build using `NEXT_PUBLIC_SITE_URL`.

Data shape (hardcoded for now)
```
Paper: {
  slug: string,
  title: string,
  authors: string[],
  abstract: string,
  publishedAt: string (YYYY-MM-DD),
  pdfUrl: string ("/papers/<file>.pdf"),
  keywords?: string[]
}
```

Auth notes
- Use `createBrowserClient` from `@supabase/ssr` for client-side auth in forms.
- Persist session with cookies via `@supabase/ssr` helpers when needed later.

Dev tips
- Add PDFs under `public/papers/`. Update `pdfUrl` in `src/data/papers.ts` accordingly.
- Set `NEXT_PUBLIC_SITE_URL` for correct sitemap links.
