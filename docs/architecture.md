# Paperclip Agency Website - Architecture Document

## Project Overview
Professional agency website for Paperclip with 5 pages: Home, About, Services, Portfolio, Contact. Modern dark theme, fully responsive, with contact form backend API and PostgreSQL database.

## Tech Stack

### Frontend
- **Framework**: React + Vite
- **Styling**: Tailwind CSS (darkMode: class)
- **Pages**: Home, About, Services, Portfolio, Contact

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Language**: TypeScript
- **API Endpoints**:
  - POST /api/contact - Submit contact form (name, email, message) -> 201
  - GET /api/health - Health check

### Database
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Schema**: ContactSubmission (id, name, email, message, createdAt)

### Hosting
- **Frontend**: Vercel
- **Backend + Database**: Render/Railway (TBD)

## Folder Structure
```
/design     <- Luna's UI/UX outputs
/frontend   <- Pixel's React code
/frontend   <- Forge's Express API
/database   <- Atlas's PostgreSQL/Prisma schema
/docs       <- Architecture, security, documentation
```

## Security Considerations
- Contact form API: injection prevention, rate limiting
- Data handling for contact submissions
- OWASP compliance
- Secure PostgreSQL connections

## Status
- Architecture approved by CTO(Rex)
- Ready for full-stack build
