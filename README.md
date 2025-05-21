# LinkedIn Post Viewer

A responsive and dynamic LinkedIn post viewer built with **Next.js**, **TypeScript**, and **Tailwind CSS**. The app allows users to search, filter, and view the most engaging LinkedIn posts using the RapidAPI LinkedIn Endpoint.

---

## 🚀 Features

- 🔍 **Search by keyword**
- 🎯 **Filter options**: **search by keyword , content type**
- ⭐ **Top 3 Most Engaging Posts** (toggle)
- 🎛️ **Sliding Filter Drawer UI**
- ⚡ **Skeleton Loaders** for seamless UI
- 📱 **Mobile responsive**
- 🌍 Environment variables via `.env.local`

---

## 📦 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Icons**
- **RapidAPI LinkedIn Endpoint**

---

## 📂 Project Structure

├── src/
│ ├── app
│ | └──pages
│ | └──layout
│ | └──globals css
│ ├── components/ # All the components are placed here like filterDrawer, Header, PostCard and skelteon.
│ | └── FilterDrawer.tsx # Right-slide filter drawer
│ | └── LinkdinHeader.tsx # App header with logo + filter icon
│ | └── PostCard.tsx # Displays individual post
│ | └── PostSkeleton.tsx # Skeleton loader
│ ├── hooks/
│ | └── useFetchPosts.ts # Custom hook for API fetch
│ ├── asset/ # all image and icon
│ │
│ ├── types/
│ └── postTypes.ts # Type definitions for API response
├── .env.local # Environment variables
└── README.md



---

## 🧪 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/BaljeetGunghas/linkedin-post-viewer.git
cd linkedin-post-viewer

npm install


3. Set environment variables
Create a .env file in the root:

## NEXT_PUBLIC_X_RAPIDAPI_KEY=08d3c5ac61msh7a4d612941cc7bep1ffcd3jsn8b9e6f678219
## NEXT_PUBLIC_X_RAPIDAPI_HOST=linkedin-api8.p.rapidapi.com



4. Run the dev server

npm run dev
Visit http://localhost:3000