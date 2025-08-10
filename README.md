# My Portfolio - Interactive 3D Navigation

A modern portfolio website built with React, Three.js, and TypeScript featuring an interactive 3D navigation system.

## Features

- **Interactive 3D Navigation**: Navigate between portfolio sections using 3D objects in a Three.js scene
- **Modern UI**: Glassmorphism design with smooth animations using Framer Motion
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript**: Full type safety throughout the application
- **React Router**: Client-side routing between sections

## Sections

- **Home**: Landing page with introduction
- **About**: Skills and personal information
- **Projects**: Portfolio projects with category filtering
- **Contact**: Contact form and social links

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use

1. **3D Navigation**: Use your mouse to interact with the 3D scene
   - Click on the floating 3D objects to navigate to different sections
   - Hover over objects to see labels and visual effects
   - Use mouse to rotate the camera view

2. **Content Navigation**: The content pages overlay the 3D scene
   - Each section has its own page with animations
   - Use the 3D objects or browser navigation to move between sections

## Technologies Used

- **React 18** - UI framework
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Three.js helpers and components
- **TypeScript** - Type safety
- **Framer Motion** - Animations
- **React Router DOM** - Client-side routing

## Project Structure

```
src/
├── components/
│   └── 3d/
│       ├── NavigationScene.tsx    # Main 3D scene
│       └── NavigationObject.tsx   # Individual 3D objects
├── pages/
│   ├── Home.tsx                   # Landing page
│   ├── About.tsx                  # About section
│   ├── Projects.tsx               # Projects section
│   └── Contact.tsx                # Contact section
├── styles/
│   └── App.css                    # Global styles
├── App.tsx                        # Main app component
└── index.tsx                      # Entry point
```

## Customization

- **Colors**: Modify the color scheme in `NavigationScene.tsx` and `App.css`
- **3D Objects**: Add new navigation objects in the `navigationObjects` array
- **Content**: Update the content in each page component
- **Styling**: Modify the CSS in `App.css` for different visual themes

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## License

This project is open source and available under the [MIT License](LICENSE).
