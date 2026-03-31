# Herbs n' Terps – Projekt-Dokumentation

## Projektstruktur

```
Website Herbs n Terps/
├── src/                        # Angular Source Code
│   ├── app/
│   │   ├── components/         # Wiederverwendbare Komponenten
│   │   │   ├── age-verification/
│   │   │   └── footer/
│   │   ├── pages/              # Seitenkomponenten
│   │   │   ├── home/           # Startseite (Hero, Mission, Mitgliederbereich)
│   │   │   └── impressum/      # Impressum / Datenschutz
│   │   ├── app.html            # Root-Template
│   │   ├── app.ts              # Root-Komponente
│   │   └── app.routes.ts       # Routing-Konfiguration
│   ├── styles.scss             # Globale Styles (Tailwind + Custom)
│   └── index.html              # HTML-Einstiegspunkt
├── public/                     # Statische Assets (Bilder, Favicon)
├── dist/herbs-n-terps/browser/ # Build-Output (nach `ng build`)
├── angular.json                # Angular-Konfiguration
├── tailwind.config.js          # Tailwind CSS Konfiguration
├── package.json                # npm Abhängigkeiten & Scripts
└── tsconfig.json               # TypeScript-Konfiguration
```

## Git Repository

- **Remote:** `https://github.com/JohnnyBackflip/herbsandterps.git`
- **Branch:** `main`
- **Push:** `git push origin main`

## AWS S3 – Hosting & Deployment

### Bucket-Informationen

| Eigenschaft       | Wert                                     |
| ----------------- | ---------------------------------------- |
| **Bucket-Name**   | `herbs-terps.farm`                       |
| **Region**        | `eu-central-1` (Frankfurt)               |
| **ARN**           | `arn:aws:s3:::herbs-terps.farm`          |
| **AWS Account**   | `184394181055`                           |
| **IAM User**      | `aws-cli-user`                           |
| **Website URL**   | `http://herbs-terps.farm.s3-website.eu-central-1.amazonaws.com` |

### Website-Hosting Konfiguration

- **Index Document:** `index.html`
- **Error Document:** `index.html` (SPA-Routing)
- **Public Access:** Aktiviert (kein Block)
- **Bucket Policy:** `PublicReadGetObject` für alle Objekte

### AWS CLI – Deployment-Befehle

```bash
# Build erstellen
npx ng build

# Alle Dateien zum S3-Bucket synchronisieren (alte Dateien löschen)
aws s3 sync dist/herbs-n-terps/browser/ s3://herbs-terps.farm/ --delete

# Nur bestimmte Dateien hochladen
aws s3 cp dist/herbs-n-terps/browser/index.html s3://herbs-terps.farm/index.html

# Bucket-Inhalt anzeigen
aws s3 ls s3://herbs-terps.farm/

# Bucket-Website-Konfiguration anzeigen
aws s3api get-bucket-website --bucket herbs-terps.farm

# Bucket-Policy anzeigen
aws s3api get-bucket-policy --bucket herbs-terps.farm
```

### Aktuelle Dateien im Bucket

```
Untitled.png          (88 KB)   – Logo
apple-touch-icon.png  (12 KB)   – Apple Touch Icon
favicon-192.png       (13 KB)   – Favicon 192px
favicon-512.png       (56 KB)   – Favicon 512px
favicon.ico           ( 1 KB)   – Favicon
grow_equip.png        (94 KB)   – Hero-Hintergrundbild
index.html            ( 3 KB)   – SPA Einstiegspunkt
logo.webp             (60 KB)   – Logo (WebP)
main-*.js             (215 KB)  – Angular Bundle
styles-*.css          (19 KB)   – CSS Bundle
sunset_friends.png    (69 KB)   – Mission-Section Hintergrundbild
```

## Kompletter Deploy-Workflow

```bash
# 1. Build
npx ng build

# 2. Git commit & push
git add -A
git commit -m "feat: Beschreibung der Änderung"
git push origin main

# 3. S3 Deployment
aws s3 sync dist/herbs-n-terps/browser/ s3://herbs-terps.farm/ --delete
```
