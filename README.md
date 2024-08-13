# ContextApiProject

## Overview

**ContextApiProject** is a modern React application designed to showcase the effective use of the Context API for managing and toggling between light and dark themes. Built with Vite for an optimized development experience, this project also leverages Tailwind CSS to ensure a responsive and visually appealing UI. The application is structured around reusable custom components like `Card` and `ThemeBtn`, making it a solid foundation for any developer looking to implement theme management in their React projects.

## Features

- **Theme Management**: Seamlessly toggle between light and dark themes using the Context API.
- **Custom Components**: Includes reusable components such as `Card` and `ThemeBtn`, which help maintain a clean and organized codebase.
- **Responsive Design**: Tailwind CSS is used for crafting a responsive, modern, and accessible user interface.

## Project Structure

```plaintext
ContextApiProject/
├── src/
│   ├── components/
│   │   ├── card.jsx
│   │   └── themebtn.jsx
│   ├── context/
│   │   └── theme.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   └── index.html
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/ContextApiProject.git
   cd ContextApiProject
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Project

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Usage

### Theme Toggle

The application uses the Context API to manage theme states. The `ThemeProvider` component provides the current theme and functions to toggle between light and dark themes.

### Example Usage

Below is an example of how the `ThemeProvider`, `Card`, and `ThemeBtn` components are used in the `App.jsx` file.

```javascript
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';
import ThemeBtn from './components/themebtn';
import { ThemeProvider } from './context/theme';

function App() {
  const [Thememode, setThememode] = useState('light');

  const darkTheme = () => {
    setThememode('dark');
  };

  const lightTheme = () => {
    setThememode('light');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(Thememode);
  }, [Thememode]);

  return (
    <ThemeProvider value={{ Thememode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### Custom Components

#### `ThemeBtn`

The `ThemeBtn` component is responsible for toggling between the light and dark themes.

```javascript
import useTheme from "../context/theme";

export default function ThemeBtn() {
  const { Thememode, darkTheme, lightTheme } = useTheme();

  const handleTheme = () => {
    if (Thememode === 'dark') {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={handleTheme}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600  peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium dark:text-white text-gray-900">Toggle Theme</span>
    </label>
  );
}
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with any improvements, features, or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React**
- **Vite**
- **Tailwind CSS**

---

This README should provide clear and concise information to anyone who wants to understand, run, or contribute to your project.
