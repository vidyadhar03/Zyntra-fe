# Zyntra - Your Holistic Wellness Companion

![Zyntra App](./assets/images/icon.png)

## About Zyntra

Zyntra is an AI-powered mobile application designed to help users "get their life together" by providing holistic wellness insights. By unifying data from multiple sources (like Spotify, Instagram, Fitbit, etc.), Zyntra delivers personalized insights, adaptive micro-challenges, and weekly shareable recaps—all while prioritizing privacy and user control.

## Key Features

### 🔢 Unified Life Score
A comprehensive wellness metric (0-100) that reflects combined insights from your connected data sources.

### 💡 Daily "Aha!" Insight Cards
Fun, personalized daily insights generated from your activity patterns.

### 🎯 Adaptive Micro-Challenges
Small, contextual wellness challenges tailored based on your lowest-performing life areas.

### 📊 Weekly "Life Wrapped" Recap
Shareable meme-style weekly summaries highlighting your activity across all connected platforms.

## Technology Stack

- **Frontend**: React Native with Expo
- **Navigation**: Expo Router
- **Styling**: React Native's StyleSheet API
- **UI Components**: Custom themed components

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. Scan the QR code with:
   - **Expo Go** app on iOS/Android
   - Run on an iOS simulator or Android emulator

## Application Structure

- `app/` - Main screens and navigation setup
  - `(tabs)/` - Bottom tab navigation screens
  - Other standalone screens (login, insights, etc.)
- `components/` - Reusable UI components
- `assets/` - Images, fonts, and other static resources
- `constants/` - Theme colors and other application constants
- `hooks/` - Custom React hooks for shared functionality

## Privacy & Data

Zyntra is designed with user privacy as a priority. The app provides:
- Clear controls for data source connections
- Transparency in how data is used
- Options to limit or delete collected information

## Development Status

This repository contains the front-end code for Zyntra, currently in active development.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

For more information, please contact the repository owner.
