🚀 Personal Portfolio (Next.js + TypeScript)

A modern, responsive, and customizable developer portfolio built with
Next.js App Router, TypeScript, Framer Motion, and a fully modular
component architecture.

This project is designed to be easily reusable — you can simply replace
the resume/config files with your own information and deploy your
personal website in minutes.

---

✨ Features

- Fully responsive, modern UI
- Modular section-based architecture
- Framer Motion animations
- Reusable components
- Centralized resume + site config
- Easy to customize
- SEO-ready
- Dark/Light theme with automatic system detection

---

👤 About Me

Hi, I’m Mohammadreza Sharifkhani, a frontend developer passionate about
building fast, scalable, and smart web applications.
I work mainly with React, Next.js, TypeScript, and real-time intelligent
systems.

This portfolio showcases my skills, experience, and selected
projects—fully structured to be reusable for other developers as well.

---

📦 How to Use This Project as Your Own Portfolio

You can freely use this project as a template for your personal website.

1. Clone the project

   git clone https://github.com/mosharif30/my-portfolio
   cd my-portfolio

2. Install dependencies

   npm install

   # or

   yarn

   # or

   pnpm install

   # or

   bun install

3. Run the development server

   npm run dev

   # or

   yarn dev

   # or

   pnpm dev

   # or

   bun dev

Now open:

👉 http://localhost:3000

---

🛠 Customize for Your Own Use

To make this your personal portfolio:

🔹 1. Update your resume

Edit:

    /lib/resume.ts

Change: - name

- title
- contact info
- skills
- experience
- education
- projects
- languages
- certifications

Everything on the portfolio updates automatically.

---

🔹 2. Update global site configuration

Edit:

    /lib/siteConfig.ts

Change: - site title

- your domain
- meta description
- social links

This automatically updates SEO and metadata.

---

🔹 3. Replace your photo

Place your photo in:

    /public/me.jpg

And it will appear in the Hero section.

---

🧱 Project Structure

    src/
      app/
      components/
        layout/
        ui/
        sections/
      lib/
      types/
      public/

Section-based architecture makes it easy to reorder or remove sections.

---

🌍 Deploy

You can deploy the site easily on Vercel:

    vercel deploy

or connect the GitHub repo to Vercel for automatic deployment.

---

🧑‍💻 Connect With Me

- LinkedIn: https://www.linkedin.com/in/msharifkhani/
- GitHub: https://github.com/mosharif30
- Email: Sharifkhani.mr@gmail.com

---

Feel free to fork, customize, and use this template for your own
personal portfolio!
