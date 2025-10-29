# Robert Reder Portfolio

A modern, responsive portfolio website built with Vue 3, TypeScript, and Tailwind CSS. Inspired by the Myphz portfolio design with interactive animations and smooth transitions.

## Features

- **Interactive Work Timeline**: Hover-based experience showcase with animated timeline
- **Project Carousel**: Showcase projects with cover images and descriptions
- **Skills Organization**: Categorized skills with neon separator lines
- **Contact Form**: Email submission form with social media links
- **Animated Background**: Site-wide floating gradient patterns and grid effects
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern Animations**: Typing effects, fade-ins, and smooth transitions

## Technologies Used

- **Frontend**: Vue 3 with Composition API, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite
- **Animations**: OGL for WebGL effects, CSS keyframes
- **Components**: Vue3-Carousel for project showcase

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable Vue components
├── pages/         # Main page components
├── utils/         # Utility functions and store
├── assets/        # CSS and static assets
└── types/         # TypeScript type definitions
```

## Customization

The portfolio is easily customizable:

- **Personal Info**: Update experience, projects, and skills in respective components
- **Styling**: Modify colors and animations in `tailwind.config.ts` and `main.css`
- **Content**: Add/remove projects, update contact information
- **Images**: Replace project covers in `public/images/`

## Deployment

This portfolio is deployed on Vercel with automatic deployments from the main branch.

## License

This project is open source and available under the MIT License.
