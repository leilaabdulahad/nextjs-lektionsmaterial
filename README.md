
## Table of Contents
- [About the Project](#about-the-project)
- [Technologies](#technologies)
- [Installation](#installation)

### About the project 
As a former teacher, I understand the importance of having comprehensive and easily accessible resources. While there are many educational websites available, I noticed a significant gap: none of the websites offer all the materials firmly anchored in the Swedish curriculum in an easy and understandble way for the students. 

This project aims to fill that gap by providing a complete set of teaching materials clearly aligned with the Swedish curriculum, ensuring that educators have everything they need to support their teaching objectives effectively. As a new teacher especially, creating new resources takes time. Another gap that I noticed working as a teacher there are no clear yearly rough plan for each subject available for teacher to use or take inspiration from. I often see in teacher groups on facebook where often new teachers ask for a rough plan in different subjects. 

### Technologies
Next.js
Convex
Tailwind
Clerk

### Installation 

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Install packages
   ```sh
   npm install
   ```
3. Create an `.env.local` file and fill in the necessary keys from Clerk and Convex. The Convex keys are created automatically by Convex during installation. 
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=
   ```
4. Run the development server
   ```sh
   npm run dev
   ```
5. Run the Convex development server. Here the Convex enviroment variables will be automatically generated
   ```sh
   npx convex dev
   ```