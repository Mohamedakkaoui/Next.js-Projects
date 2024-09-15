# Predict Personal Info Component

This project is a small Next.js app that predicts a person's **age**, **gender**, and **country** based on their first name. It fetches data from three external APIs and dynamically displays the information on a page created using Next.js dynamic routing.

## Features

- **Next.js Built-in Routing**: 
  - This project leverages the Next.js dynamic routing feature. When a file is created under the `pages` directory (e.g., `pages/[name].tsx`), Next.js automatically generates a route for it. In this project, the `[name]` dynamic route is used to predict personal information based on the `name` parameter passed in the URL.
  
- **Dynamic Data Fetching**: 
  - The app fetches data from three APIs:
    - [Agify.io](https://agify.io/) for predicting age
    - [Genderize.io](https://genderize.io/) for predicting gender
    - [Nationalize.io](https://nationalize.io/) for predicting the probable country
  - It uses `Promise.all` to handle multiple asynchronous requests efficiently, ensuring that all the data is fetched before rendering the results.

## API Endpoints Used

1. **Agify API**: Predicts the person's age based on their first name.
    - Endpoint: `https://api.agify.io/?name=<name>`
  
2. **Genderize API**: Predicts the person's gender based on their first name.
    - Endpoint: `https://api.genderize.io/?name=<name>`

3. **Nationalize API**: Predicts the most probable country for the person based on their first name.
    - Endpoint: `https://api.nationalize.io/?name=<name>`

## Project Structure

```bash
├── Prediction
│   └── [name].tsx  # Dynamic route that handles the fetching and rendering
│ 
├── page.tsx # Main component for displaying predicted data
│    
└── README.md # Project documentation
