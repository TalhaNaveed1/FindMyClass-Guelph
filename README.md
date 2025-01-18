# FindMyClass

Lost? Missed a turn? Introducing FindMyClass.

FindMyClass is an innovative solution for all students at the University of Guelph. The full-stack application guides students to any class located on campus through step-by-step instructions paired with photos to ensure effortless navigation. With an intuitive interface, accurate time predictions powered by a machine learning algorithm, and real-world photo guidance, FindMyClass helps students save time and feel more confident about navigating their university.

## Features

- **Step-by-Step Navigation**: Clear, concise instructions with real-world photos to guide students across the University of Guelph campus.
- **Time Estimation**: A K-Nearest Neighbors (KNN) machine learning algorithm predicts the time required to reach each class based on various parameters.
- **User-Friendly Interface**: Built with Next.js, the app is fast, responsive, and accessible across devices.
- **Database Integration**: Utilizes Supabase for efficient and reliable storage of class data and navigation steps.


## Technologies Used

-[**Next.js**](https://nextjs.org/): React-based framework for building user-friendly and performant interfaces.
-[**Python**](https://nextjs.org/): For styling the app with a modern and responsive design.
-[**Flask**](https://flask.palletsprojects.com/): Lightweight WSGI framework for building the REST API.
-[**Supabase**](https://supabase.com/): A Postgres-based database service for managing class locations, photos, and other app data.
-[**Vercel**](https://nextjs.org/): For styling the app with a modern and responsive design.


## Installation & Steps to run locally
1. Clone the repository:
   ```bash
   git clone https://github.com/TalhaNaveed1/FindMyClass-Guelph
   cd FindMyClass-Guelph
   ```
2. Navigate to the backend and install the required packages:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
3. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
4. Install the required packages for the frontend:
   ```bash
   cd findmyclass
   npm install
   ```
5. Run the application:
   ```bash
   npm run dev
   ```
   
