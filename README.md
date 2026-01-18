<div align="center">

# 🐟 FishMart

### _Your Trusted Online Marketplace for Fresh Fish in Bangladesh_

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://fishmart-by-biswanath.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[Live Demo](https://fishmart-by-biswanath.vercel.app/) • [Features](#-features) • [Installation](#-installation) • [Routes](#-routes)

</div>

---

## 📖 About FishMart

FishMart is a modern, full-featured e-commerce platform designed specifically for the fresh fish market in Bangladesh. Built with Next.js 14 and styled with Tailwind CSS, it offers a seamless shopping experience with beautiful animations, responsive design, and intuitive user interface.

### ✨ Why FishMart?

- 🎨 **Modern UI/UX** - Clean, minimal design with smooth animations
- 📱 **Fully Responsive** - Perfect experience on all devices
- 🔐 **Secure Authentication** - Cookie-based auth system
- 🛒 **Smart Cart System** - LocalStorage-powered shopping cart
- 🐠 **Rich Product Details** - Comprehensive fish information with nutritional facts
- ⚡ **Fast & Optimized** - Built with Next.js for optimal performance

---

## 🚀 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/BiswanathBD/fishmart.git
   cd fishmart
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**

   ```
   Navigate to http://localhost:3000
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## 🗺️ Routes

| Route        | Description                                   | Protected |
| ------------ | --------------------------------------------- | --------- |
| `/`          | Home page with hero, categories, and features | ❌        |
| `/shop`      | Browse all fish products with filters         | ❌        |
| `/shop/[id]` | Detailed product page with full information   | ❌        |
| `/cart`      | Shopping cart with quantity management        | ✅        |
| `/about`     | About FishMart and our story                  | ❌        |
| `/contact`   | Contact form and information                  | ❌        |
| `/login`     | User authentication page                      | ❌        |

> **Note:** Protected routes require authentication. Users will be redirected to login if not authenticated.

---

## 🎯 Features

### 🏠 **Landing Page**

- **Hero Section** - Eye-catching animated hero with rotating fish image
- **Featured Categories** - Display popular fish categories with images
- **Why Choose Us** - 6 key benefits with icons
- **How It Works** - 4-step process guide
- **Customer Testimonials** - Real customer reviews with ratings
- **Recipe Blog** - Fish recipes and cooking tips
- **About Section** - Brief company introduction
- **Newsletter** - Email subscription with toast notifications

### 🛍️ **Shop Page**

- **Product Grid** - Responsive grid layout (1-4 columns)
- **Category Filters** - Filter by Freshwater, Saltwater, Shellfish, Processed
- **Product Cards** - Image, name, description, category badge
- **Quick Actions** - View Details and Quick Add to Cart buttons
- **Empty State** - Friendly message when no products found

### 📦 **Product Details**

- **Large Image Display** - High-quality product images
- **Comprehensive Info** - Price, origin, availability, size
- **Nutritional Facts** - Detailed nutritional information
- **Cooking Tips** - How to prepare the fish
- **Storage Instructions** - Proper storage guidelines
- **Key Benefits** - Health benefits as tags
- **Quantity Selector** - Increase/decrease quantity
- **Tabbed Interface** - Organized information in tabs

### 🛒 **Shopping Cart**

- **Cart Management** - Add, remove, update quantities
- **Order Summary** - Subtotal, delivery fee, total
- **Persistent Storage** - Cart saved in localStorage
- **Empty Cart State** - Friendly message with shop link
- **Checkout** - Clear cart and show success toast
- **Dynamic Count** - Cart badge updates in real-time

### 🔐 **Authentication**

- **Login System** - Cookie-based authentication
- **Demo Credentials** - babu@gmail.com / Babu@995
- **Protected Routes** - Middleware-based route protection
- **Auto Redirect** - Redirect to shop after login
- **Logout** - Clear session and redirect to home
- **Toast Notifications** - Success/error messages

### 📱 **Responsive Design**

- **Mobile First** - Optimized for mobile devices
- **Tablet Support** - Perfect layout for tablets
- **Desktop Enhanced** - Full features on large screens
- **Adaptive Navigation** - Mobile menu with smooth animations

### 🎨 **UI/UX Features**

- **Smooth Animations** - Framer Motion animations throughout
- **Gradient Backgrounds** - Beautiful primary-to-accent gradients
- **No Shadows** - Clean, flat design aesthetic
- **Rounded Elements** - Consistent border-radius usage
- **Hover Effects** - Interactive feedback on all clickable elements
- **Loading States** - Spinners for async operations

### 🧭 **Navigation**

- **Sticky Navbar** - Always accessible navigation
- **Dynamic Cart Badge** - Shows item count when logged in
- **Mobile Menu** - Hamburger menu for small screens
- **Quick Links** - Easy access to all pages
- **Logo Link** - Click logo to return home

### 📄 **Additional Pages**

- **About Page** - Company story, stats, values, CTA
- **Contact Page** - Contact form, business hours, social links
- **Footer** - Quick links, categories, contact info, social media

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons (HeroIcons)
- **Image Optimization:** Next.js Image
- **State Management:** React Hooks + LocalStorage
- **Authentication:** Cookie-based
- **Deployment:** Vercel

---

## 📊 Project Structure

```
fishmart/
├── public/
│   ├── categories.json      # Product data
│   ├── logo.png            # Brand logo
│   ├── hero.png            # Hero image
│   └── heroBg.png          # Hero background
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── cart/           # Cart page
│   │   ├── contact/        # Contact page
│   │   ├── login/          # Login page
│   │   ├── shop/           # Shop pages
│   │   │   └── [id]/       # Product details
│   │   ├── layout.js       # Root layout
│   │   └── page.jsx        # Home page
│   ├── Component/
│   │   ├── Shared/         # Reusable components
│   │   │   ├── Container.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Logo.jsx
│   │   │   └── Navbar.jsx
│   │   ├── AboutSection.jsx
│   │   ├── BlogRecipes.jsx
│   │   ├── FeaturedCategories.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Newsletter.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhyChooseUs.jsx
│   ├── middleware.js       # Route protection
│   └── proxy.js           # Auth proxy
└── tailwind.config.js     # Tailwind configuration
```

---

## 🎨 Design Philosophy

FishMart follows a **minimal, modern, and clean** design approach:

- **No Shadows** - Flat design for a contemporary look
- **Rounded Corners** - Consistent use of rounded elements
- **Gradient Accents** - Primary-to-accent gradients for visual interest
- **White Space** - Generous spacing for better readability
- **Consistent Typography** - Clear hierarchy with bold headings
- **Icon-Based UI** - Visual cues with HeroIcons
- **Smooth Transitions** - Subtle animations for better UX

---

## 🔑 Demo Credentials

```
Email: babu@gmail.com
Password: Babu@995
```

---

## 📞 Contact

**Developer:** Biswanath Sarker

- 📧 Email: biswanath.sarker.bd@gmail.com
- 📱 Phone: +880 1628 284848
- 📍 Location: Dhaka, Bangladesh
- 💼 LinkedIn: [biswanath-sarker-bd](https://www.linkedin.com/in/biswanath-sarker-bd/)
- 🐙 GitHub: [BiswanathBD](https://github.com/BiswanathBD)

---

## 📝 License

This project is open source and available for educational purposes.

---

<div align="center">

### 🌟 If you like this project, please give it a star! 🌟

**Made with ❤️ in Bangladesh**

[⬆ Back to Top](#-fishmart)

</div>
