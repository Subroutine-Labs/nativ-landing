# Nativ

Nativ is a local knowledge layer for any place. It makes the knowledge that exists in people's heads — about neighborhoods, streets, cafes, shortcuts, hidden spots, what to avoid —
persistent, findable, and useful.

Local knowledge evaporates. Every day, valuable knowledge is shared in conversations, WhatsApp messages, Instagram comments. It helps one person in one moment. Then it's gone. The next person who needs that same knowledge has to rediscover it from scratch. Knowledge that could help thousands helps one. Knowledge that could persist disappears.
Nativ creates infrastructure where local knowledge compounds over time instead of evaporating after each use. It's a home for local knowledge — where it accumulates instead of
evaporating, organized by location, stays fresh through community validation, and trustworthy because you can see who shared it and when.

## Core Philosophy

- **Knowledge should compound, not evaporate** — When someone knows something valuable about a place, that knowledge should reach everyone who needs it.
- **Sharing should feel natural** — Like telling a friend, not writing a review. A photo, a line, a voice note. Fifteen seconds, not fifteen minutes.
- **Presence is signal** — If someone is physically present at a place, their knowledge is inherently more valuable.
- **Local is not just travel** — Anyone unfamiliar with a place needs local knowledge.

## Tech Stack

### iOS App
- **Frontend**: SwiftUI + MapKit
- **Backend**: Supabase (Auth, PostgreSQL, Storage)
- **Voice**: On-device transcription via Speech framework
- **Target**: iOS 18+, iPhone

### Landing Page
- **Framework**: Next.js 14, React 18
- **Language**: TypeScript
- **Email**: Resend (waitlist & notifications)
- **Hosting**: Vercel

## Key Features [ Current ]

- Apple Maps with knowledge glow annotations
- In-app walking/driving navigation with live GPS tracking
- Share knowledge via text, photo, or voice note
- Community validation (useful, accurate, changed)
- Google Places search with autocomplete
- Map POI filtering by category (Food, Stay, Fitness, Nightlife, Shopping, Transport)
- Luma event discovery with location enrichment and geocoding
- Nearby users presence and real-time chat messaging
- Profile with photo upload & Email OTP authentication

## Team

A [Subroutine Labs](https://subroutinelabs.com) product.
