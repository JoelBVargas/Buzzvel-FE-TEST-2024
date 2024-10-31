# Buzzvel FE - TEST 2024

This is a frontend test project focused on building a stylish and responsive interface using **React.js**, **Tailwind CSS**, and **Swiper**. The main focus was creating an aesthetically pleasing layout with attention to responsiveness and user experience.

## 📋 Prerequisites

To run the project, you will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Installation

1. Clone the repository:

   ```bash
   git clone
   https://github.com/JoelBVargas/Buzzvel-FE-TEST-2024
   cd frontend-test-styling

2. Install project dependencies:

   ```bash
   npm install

3. Start the development server:

   ```bash
   npm start

## 🛠️ Technologies and Tools Used

- **React.js** - JavaScript library for building user interfaces.
- **Tailwind CSS** - CSS framework for rapid and responsive styling.
- **Swiper** - Library for creating responsive carousels.

## 🎨 Styling Structure

This project is focused on page styling and element layout. Below are the key styling highlights:

- **Responsiveness:** The layout adjusts elegantly to different screen sizes, with breakpoints defined to optimize the experience on mobile, tablet, and desktop devices.
- **Swiper:** The Swiper component is used to display content slides fluidly and responsively, with customized controls and options for a better visual experience.
- **Tailwind CSS:** Used for styling across the page, leveraging utility classes for quick and consistent styling of components.

## 🔧 Configurations and Adjustments

### Swiper

Customized breakpoints were applied in Swiper to adjust the number of slides displayed according to the screen size, enhancing content visualization:

```javascript
import Swiper from "swiper";

const swiper = new Swiper('.swiper', {
  breakpoints: {
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 2.5 },
    1440: { slidesPerView: 4.3 }
  }
});
```
### Tailwind Responsive Styling

Styles were applied responsively using Tailwind classes to ensure an adaptable design for all resolutions.

## 📄 License

This project was developed as part of a test and is free for study and reference purposes.
