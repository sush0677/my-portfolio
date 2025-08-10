# Sushant Patil - AI/ML Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Three.js. Features a 3D navigation scene with floating objects that users can interact with to explore different sections of Sushant's AI/ML portfolio.

## About Sushant

Sushant Patil is a master's student in Artificial Intelligence and Machine Learning at the University of Birmingham Dubai. He's passionate about building and implementing AI-driven solutions and has expertise in:

- **Machine Learning**: TensorFlow, PyTorch, scikit-learn
- **Data Science**: Pandas, NumPy, OpenCV
- **Web Development**: React, Python, Flask
- **AI/ML Projects**: Loan prediction, Generative AI agents, Kaggle competitions
- **Professional Experience**: AI/ML research, Data Science projects, Academic studies

## Features

- **3D Interactive Navigation**: Floating 3D objects that users can click to navigate between sections
- **Modern Design**: Clean, responsive design with smooth animations using Framer Motion
- **TypeScript**: Full TypeScript support for better development experience
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Easy Customization**: Centralized configuration file for easy personalization
- **Professional Experience**: LinkedIn-integrated experience section showcasing career progression

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sush0677/my-portfolio.git
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

## Customization

### Personal Information

All personal information is centralized in `src/utils/personalInfo.ts`. This file has been updated with Sushant's actual information from his GitHub profile and LinkedIn profile, including:

- Real projects from his repositories
- Actual skills and expertise levels
- Correct location and background
- Links to his GitHub projects
- Professional experience from LinkedIn
- Updated social links and contact information

### Styling

- Main styles are in `src/styles/App.css`
- You can customize colors, fonts, and layout by modifying the CSS variables
- The 3D scene background gradient can be changed in `src/App.tsx`

### 3D Navigation

The 3D navigation scene is in `src/components/3d/NavigationScene.tsx`. You can:
- Modify the 3D objects and their positions
- Change colors and materials
- Add more interactive elements

## Project Structure

```
src/
├── components/
│   ├── 3d/           # 3D navigation components
│   ├── layout/       # Layout components
│   └── ui/           # UI components
├── pages/            # Portfolio pages (Home, About, Projects, Contact)
├── styles/           # CSS styles
├── utils/            # Utilities and configuration
└── hooks/            # Custom React hooks
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animations
- **React Router** - Navigation

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

## Portfolio Highlights

This portfolio showcases Sushant's key projects:

1. **Loan Acceptance Prediction** - Logistic regression model for loan classification
2. **Generative AI Agent** - Langchain-based structured data agent with Azure OpenAI
3. **Compass Hack Project** - Innovative hackathon solutions
4. **Kaggle Competitions** - Data science competition participation
5. **PyTorch Projects** - Deep learning implementations
6. **3D Portfolio Website** - This interactive portfolio itself

All projects are linked to their respective GitHub repositories for visitors to explore the actual code and implementations.
