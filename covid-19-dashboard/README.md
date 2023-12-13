#COVID-19 Dashboard

## Table of Contents
- [Getting Started](#getting-started) 
  - [Prerequisites](#prerequisites)
  - [Installation](#installation) 
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Implementation](#implementation)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

The purpose of creating a new dashboard is to complement The COVID Tracking Project at The Atlantic by adding additional UI/UX features for viewing tables/charts with the numbers of COVID-19 confirmed, recovered, and death cases per State & Territories.

Customization:

The new dashboard can be tailored to specific user needs or preferences. For example, you may focus on presenting data in a way that is relevant to certain states or territories, whether for a single day or historic data.

Educational Purpose:

The new dashboard can be designed with educational objectives in mind. It can help users learn more about the patterns and impacts of the COVID-19 pandemic, fostering a better understanding of the data and its implications.

Innovation and Experimentation:

Creating a new dashboard allows for innovation and experimentation with different data visualization techniques, user interface designs, and interactive features. This can contribute to the ongoing improvement of how COVID-19 data is presented and understood.

Localization:

The new dashboard could offer more localized information, breaking down data by all states, single states, historic data for states or territories, and single-day data for a state or territory.

Data Source and Tech Stack:

The dashboard utilizes [COVID Tracking Project's API version-2](https://covidtracking.com/data/api/version-2) as its data source.

Front-end:

The dashboard is built using React tsx, incorporating charts, Material-UI tables, Styled Components, and TypeScript.

Main Functionality:

The dashboard is still in its early stages, providing basic functionality for displaying per-state or territory data charts/ tables.

### Installation

1. Clone the repository:

git clone 

1.Navigate to the project

cd covid-19-dashboard

### Prerequisites

# 👇️ if you use npm
npm install
npm install vite

npm run dev

# 👇️ if you use yarn
yarn install
yarn add vite

yarn dev

vite [Why vite ?](https://vitejs.dev/guide/why.html)

Yarn should handle the installation automatically. However, in case you encounter any issues, here are the instructions to follow.

## Install React Query

yarn add @tanstack/react-query
yarn add -D @tanstack/eslint-plugin-query

## Install MUI
yarn add @mui/icons-material

## Install reach-chart

yarn add chart.js

yarn add react-chartjs-2

## Install axios

yarn add axios

## Install MUI date picker

yarn add @mui/x-date-pickers

## days

yarn add days

## Install lodash-es

yarn add lodash-es

## Install react-router-dom

yarn add react-router-dom
yarn add react-dom

## Install vite, vitest
yarn add vite
yarn add vitest

## Usage
----

## Folder Structure

* components: Reusable, presentational components. Each component has its own folder containing the component file (e.g., Button.tsx), styles (e.g., Button.css), and tests (e.g., Button.spec.tsx)

* pages: Components that are connected to the store or manage state. Each container has its own folder similar to components

* services: Utility functions, API calls, and other services.

* utils: General utility functions that are not specific to a component or service.

* styles: Global styles and style-related files.

* assets: Images, fonts, and other static assets.

* hooks:

* layout:

* context:

* store:

* index.js: The entry point of the application.

* App.js: The root component of the application.

This folder structure promotes modularity, separation of concerns, and scalability. However, the best structure may vary depending on the size and requirements of the project. As the project grows, we might need to adjust the structure to maintain a clean and organized codebase. 

## requirement

## Implementation

1. Setting Up React TypeScript Project
2. Installing Dependencies
3. Creating Components
4. Using Components in App 
4. Integrating the api to Fetch and Display Data 
5. Writing unit tests 

## 

 ## Home Page
<p align="center">
  <img src="./about.jpeg">
</p>
<p align="center">
  <img src="./graph.jpeg">
</p>
<p align="center">
  <img src="./table.jpeg">
</p>

Ram Gotru

### Author:
- [RAM GOTRU] (https://github.com/ramsgotrus)
