# Deployment & Quality Assurance Guide

*Kinetic Atelier Architecture Documentation*

---

## 1. Prerequisites & Environment

- **Node.js:** v20.0.0 or higher (v24 LTS recommended)
- **Package Manager:** npm v10+

---

## 2. Production Build

To create an optimized production build:

```bash
# Install dependencies
npm install

# Run unit tests to verify content graph integrity
npm test

# Build production bundle
npm run build
```

To run the production server locally:

```bash
npm start
```

---

## 3. Deployment Targets

### Vercel (Recommended)
1. Import repository into Vercel.
2. Framework preset: Next.js.
3. Build command: `npm run build`.
4. Output directory: `.next`.

### Docker / Self-Hosted Node.js
```dockerfile
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 4. Verification & Auditing Protocols

1. **Lighthouse Audit:**
   - Performance: Target 90+
   - Accessibility: Target 95+
   - Best Practices: Target 95+
   - SEO: Target 95+
2. **Reduced Motion Audit:**
   - Toggle system accessibility setting `Reduce Motion` to verify that all GSAP ScrollTrigger pinning collapses to accessible vertical scrolling with zero layout shift.
3. **Mobile Viewport Test:**
   - Test across iPhone 14/15 Safari and Android Chrome to verify that address bar toggling does not introduce layout jumps (`min-h-[100dvh]`).
