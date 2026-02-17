# 🎵 Productions Beaulieu – Website & Booking Platform

Official website and booking request platform for Productions Beaulieu, a musical performance service based in Québec, Canada.

This project is a modern full-stack web application built with scalability, security, and legal compliance in mind.

---

## 🚀 Features

- Event booking request form
- Authentication system
- Email template system
- Admin dashboard
- Automated email notifications
- Responsive modern UI
- Secure backend with Supabase
- Analytics integration
- Québec Law 25–ready privacy compliance
- Cookie consent banner
- Music demos page with supabase bucket implementation
- Implemented rate limiting for api routes
- Legal pages (Privacy Policy, Terms of Use, Cookies Policy)

---

## 🛠️ Tech Stack

### Frontend
- [Next.js](https://nextjs.org/) (App Router)
- React
- Tailwind CSS

### Backend / Database
- [Supabase](https://supabase.com/) (PostgreSQL + Row-Level Security)

### Email Service
- [Resend](https://resend.com/) (transactional email API)

### Hosting & Deployment
- [Vercel](https://vercel.com/)

### Analytics
- Vercel Analytics

---

## ✉️ Email Workflow

When a booking form is submitted:
A notification email is sent to Productions Beaulieu.
Emails are handled server-side using the Resend API with secured environment variables.

---

## 📦 Project Structure

```
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── api/
│   │   └── booking/
│   │       └── route.js
│   ├── politique-de-confidentialite/
│   ├── conditions-dutilisation/
│   └── politique-de-cookies/
├── components/
│   └── form/
│   │       └── FormCard.tsx
│   │       └── FormInput.tsx
│   └── AboutUs.tsx
│   └── CookieBanner.jsx
│   └── Footer.tsx
│   └── Header.tsx
│   └── HeroSection.tsx
└── lib/
    ├── supabase.js
    └── resend.js
```

---

## 🔐 Privacy & Legal Compliance

This project includes:

- Privacy Policy compliant with Québec's **Law 25**
- Terms of Use
- Cookies Policy
- Cookie consent mechanism

No payment processing is currently integrated.

---

## 🧩 Environment Variables

Create a `.env.local` file at the root of the project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
NEXT_PUBLIC_RESEND_API_KEY=your_resend_key
```

> ⚠️ Never commit this file to version control.

---

## 🖥️ Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

---

## 🚀 Deployment

The project is optimized for deployment on Vercel.

1. Push to the `main` branch
2. Vercel automatically builds and deploys
3. Set environment variables in the Vercel dashboard

---

## 🔒 Security Considerations

- HTTPS enforced in production
- Environment variables stored securely server-side
- Database access restricted via Supabase RLS policies
- No sensitive data exposed client-side
- Email API keys never sent to the browser

---

## 📌 Future Improvements

- Stripe payment integration
- Booking management system
- Contract PDF generation
  
---

## 👤 Authors

Made with passion by [Samuel Harvey](https://github.com/sharvey0) and [Édouard Dupont](https://github.com/edupont16).

---

## 📄 License

This project is licensed under the [AGPL-3.0 License](./LICENSE).
