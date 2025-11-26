# AIDF Front-End

A modern job application platform built with React, Vite, and Tailwind CSS. This application provides a comprehensive solution for job seekers to browse and apply for positions, and for administrators to manage job postings and applications.

## 🚀 Features

### User Features

- **Browse Jobs**: View available job postings with detailed information
- **Job Applications**: Apply for jobs and track application status
- **User Authentication**: Secure sign-in and sign-up powered by Clerk
- **Responsive Design**: Fully responsive UI built with Tailwind CSS

### Admin Features

- **Job Management**: Create, edit, and manage job postings
- **Application Review**: View and manage job applications
- **Admin Dashboard**: Centralized control panel for all administrative tasks

## 🛠️ Tech Stack

- **Framework**: [React 18.2](https://react.dev/)
- **Build Tool**: [Vite 5.2](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com/)
  - [Lucide React](https://lucide.dev/) (Icons)
  - Custom components with shadcn/ui patterns

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/savanisgithub/AIDF-front-end.git
   cd AIDF-front-end
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_API_BASE_URL=your_api_base_url
   ```

   > **Note**: Get your Clerk Publishable Key from [Clerk Dashboard](https://dashboard.clerk.com/)

4. **Run the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
AIDF-front-end/
├── public/                  # Static assets
│   └── assets/             # Images and media files
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── shared/        # Shared components (JobCard, Navigation, etc.)
│   │   └── ui/            # Base UI components (button, input, etc.)
│   ├── layouts/           # Layout components
│   │   ├── RootLayout.jsx
│   │   ├── main.layout.jsx
│   │   └── admin.layout.jsx
│   ├── pages/             # Page components
│   │   ├── home/          # Homepage
│   │   ├── job/           # Job details page
│   │   ├── admin/         # Admin pages
│   │   ├── sign-in page.jsx
│   │   └── sign-up page.jsx
│   ├── lib/               # Utilities and services
│   │   ├── services/      # API services
│   │   └── utils.js       # Helper functions
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── components.json        # shadcn/ui configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies
```

## 🔐 Authentication

This application uses [Clerk](https://clerk.com/) for authentication and user management. Clerk provides:

- Secure user authentication
- Pre-built sign-in/sign-up components
- Session management
- User profile management

Make sure to configure your Clerk application and add the publishable key to your environment variables.

## 🎨 Styling

The project uses:

- **Tailwind CSS** for utility-first styling
- **shadcn/ui** component patterns for consistent UI
- **CSS Variables** for theming
- **Tailwind Merge** and **Class Variance Authority** for component variants

## 🌐 Routing

The application uses React Router v6 with the following structure:

### Public Routes

- `/` - Homepage with job listings
- `/job/:id` - Individual job details
- `/sign-in` - User sign-in
- `/sign-up` - User registration

### Admin Routes (Protected)

- `/admin/jobs` - Job posts management
- `/admin/job/create` - Create new job posting
- `/admin/job/:id` - Job details and applications
- `/admin/job/:id/application/:applicationId` - Individual application review

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/savanisgithub/AIDF-front-end)

Or manually:

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/savanisgithub/AIDF-front-end)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of the AI Driven Development Course.

## 👥 Authors

- [@savanisgithub](https://github.com/savanisgithub)

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the blazing-fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Clerk](https://clerk.com/) for authentication
- [shadcn/ui](https://ui.shadcn.com/) for component patterns
- [Radix UI](https://www.radix-ui.com/) for accessible components

## 📧 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Built with ❤️ using React and Vite
