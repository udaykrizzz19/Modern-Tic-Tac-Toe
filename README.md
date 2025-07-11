# Modern Tic Tac Toe ⚛️

A classic game of Tic Tac Toe, reimagined with a stunning, modern user interface and a delightful user experience. This isn't just a game; it's a showcase of fluid animations, responsive design, and thoughtful features built with a cutting-edge React tech stack.

### 🔴 [Live Demo] [View On vercel](https://modern-tic-tac-toe-eight.vercel.app/) 🔵

---

## ✨ Features

This project is packed with features designed to create a seamless and enjoyable experience for the user:

*   **👤 Personalized Welcome:** The app greets you by name after a quick and simple sign-up.
*   **📜 Interactive Game Rules:** Before you play, a beautifully designed, animated rules page explains the win, lose, and draw conditions.
*   **✨ Sleek & Animated Game Board:** The game itself is brought to life with smooth animations powered by Framer Motion for every move and board transition.
*   **🌗 Light & Dark Mode Toggle:** Choose your preferred theme! The app includes a gorgeous, animated toggle that instantly switches between a light and dark color palette. The system's preferred theme is also detected on first load.
*   **☀️/🌙 Dynamic Greetings:** The header displays a time-appropriate greeting (Good Morning, Afternoon, or Evening) and a matching icon.
*   **🏆 Clear Winner & Draw States:** The app clearly announces the winner or a draw, making it easy to start a new game.
*   **🤖 Google reCAPTCHA:** Ensures a secure user entry point before the game begins in the background.
*   **📱 Fully Responsive Design:** The experience is flawless whether you're playing on a large desktop monitor or your mobile phone.

---

## 🛠️ Tech Stack

This project was built using a modern and powerful set of tools:

*   **[React.js](https://reactjs.org/)** - A JavaScript library for building user interfaces.
*   **[Vite](https://vitejs.dev/)** - A next-generation frontend tooling for a blazing fast development experience.
*   **[Framer Motion](https://www.framer.com/motion/)** - A production-ready motion library for React to create fluid animations.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
*   **Node.js** (v18.x or v20.x recommended)
*   **npm** (comes with Node.js)

### Installation & Setup

1.  **Clone the repository**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```

2.  **Navigate to the project directory**
    ```sh
    cd your-repo-name
    ```

3.  **Install NPM packages**
    ```sh
    npm install
    ```

4.  **Create a local environment file**
    The app uses Google reCAPTCHA. You need to provide your own Site Key. Create a file named `.env.local` in the root of your project and add your key:
    ```
    VITE_RECAPTCHA_SITE_KEY=YOUR_GOOGLE_RECAPTCHA_SITE_KEY_HERE
    ```
    *(You will also need to update this key directly in `src/components/NameInput.jsx` if you haven't moved it to environment variables yet.)*

5.  **Run the development server**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

---

## 🔮 Future Improvements

While the current version is polished, here are some ideas for future enhancements:

-   [ ] **Player vs. AI Mode:** Implement a simple AI opponent.
-   [ ] **Score Tracking:** Keep a running score between players across multiple games.
-   [ ] **Sound Effects:** Add subtle sounds for moves, wins, and clicks to enhance the UX.

---

## 👨‍💻 Author

**[Uday Krishna]** - [udaykrizzz19](https://github.com/udaykrizzz19)


### Building for Production

To create an optimized production build:
```sh
npm run build
