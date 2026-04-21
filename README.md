# Y Network 🚀

Y Network is a modern, responsive social media platform interface built with **Next.js 16** and **Tailwind CSS v4**. It features a clean, high-performance UI designed for seamless user interaction, mimicking the core functionalities of major social networks.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router with Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [FontAwesome](https://fontawesome.com/)
- **State Management**: React Hooks (useState, etc.)

## ✨ Features

- **Dynamic Feed**: Real-time feel feed with support for text and high-quality images.
- **User Profiles**: Comprehensive profile pages showing user bio, stats (following/followers), and personal post history.
- **Search System**: Fully integrated search input with query-based routing.
- **Interactions**: Interactive tweet components with support for:
  - Liking (with state persistence)
  - Commenting
  - Retweeting
- **Responsive Design**: Mobile-first architecture that scales beautifully to desktop displays.
- **Edit Profile**: Dedicated interface for updating user information, including bio and links.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YujiSeto/y-network.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `src/app`: Page routing and Server Components.
- `src/components`: Reusable UI components (Feed, Profile, Search, etc.).
- `src/data`: Mock data handling for users and posts.
- `src/types`: TypeScript interfaces and definitions.
- `src/utils`: Helper functions and formatting utilities.