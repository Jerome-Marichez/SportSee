# SportSee
P12 - OpenClassRoom - Develop an analytics dashboard with React

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Installation](#installation)

## Introduction

SportSee is a demonstration of an interactive analytics dashboard with React using an API.

A rendering of this code, using a deployed API, is accessible via this link [https://sport-see-lime.vercel.app/?id=12](https://sport-see-lime.vercel.app/?id=12) to test user 12 or this link [https://sport-see-lime.vercel.app/?id=18](https://sport-see-lime.vercel.app/?id=18) to test user 18.

The deployment and hosting of the backend and frontend have been done with [Vercel](https://vercel.app/).

If you wish to observe the backend code, you can go to [this repo](https://github.com/Jerome-Marichez).

## Technologies 

- <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width="24"/> React
- <img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" width="24"/> TypeScript
- <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Vite-Dark.svg" width="24"/> Vite.js
- <img src="https://img.icons8.com/color/24/000000/styled-components.png" width="24"/> Styled Components


## Installation 

### Prerequisites

- [NodeJS (**version 14 or higher**)](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation and Launch of FrontEnd

- Clone the present repo of the _front-end_ of _SportSee_.
- In the directory of the cloned repo, install its dependencies: `npm install`.
- Launch the _front-end_ on port 5173: `npm run dev`.
- The _front-end_ is then accessible at URL `http://localhost:5173`.

### Switching from MockUp Data to API

To switch from MockUp data to the API or vice versa, you need to go to the following file: 

`src/hooks/useData.ts`

You can then observe the `ENV_PROD` variable that you can switch from false to true directly in the parameter of the HOOK:

`export default function useData(userID: number, ENV_PROD: boolean = true)` -> Production Environment (API).

`export default function useData(userID: number, ENV_PROD: boolean = false)` -> Development Environment (MockUp).


You also have 2 base URLs in this Hook that need to be modified according to the address of the mockup.json and/or API:

`const BASE_URL_DEV = "http://localhost:5173/mockup.json";`

`const BASE_URL_PROD = "https://sport-see-backend-9li7kmslm-jerome-marichez.vercel.app/user";`

### Note: 

- The _SportSee_ API only provides data for users with IDs 12 and 18.
- User 18 has an alternative rendering of the "Average Session Duration" chart, which is more relevant than that of the [Figma mockup](https://www.figma.com/file/BMomGVZqLZb).
