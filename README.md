# FindMyClass

Lost? Missed a turn? Introducing FindMyClass.

FindMyClass is an innovative solution for all students at the University of Guelph. The full-stack application guides students to any class located on campus through step-by-step instructions paired with photos to ensure effortless navigation. With an intuitive interface, accurate time predictions powered by a machine learning algorithm, and real-world photo guidance, FindMyClass helps students save time and feel more confident about navigating their university.

## Features

- **Step-by-Step Navigation**: Clear, concise instructions with real-world photos to guide students across the University of Guelph campus.
- **Time Estimation**: A K-Nearest Neighbors (KNN) machine learning algorithm predicts the time required to reach each class based on parameters such as day of week, time, and month.
- **User-Friendly Interface**: Built with Next.js, TailwindCSS, and ShadcnUI the app is fast, responsive, and accessible across devices.
- **Database Integration**: Utilizes Supabase for efficient and reliable storage of class data and navigation steps.

## Data Source
There is no data available on foot traffic for the University of Guelph, so I knew I had to improvise. The University of Guelph's institutional repository posted an analysis report on the City of Guelph's transportation data for 2016-2017. This report contains transportation data for every major intersection in Guelph, and I focused on the two streets that surround the University, which include Stone Road and College Avenue. The analyses and figures for these streets provided by the report were enough data that was suitable for the algorithm.

Analysis Source: [**City of Guelph 2016-2017 Active Transportation Data Collection Report**](https://atrium.lib.uoguelph.ca/items/05b30416-b82b-4b0a-b101-ddb1bf63dea2)

## Technologies Used

- **Next.js**: React-based framework for building user-friendly and performant interfaces. Used to create an aesthetic
- **TailwindCSS**: Utilized for styling the app to create an aesthetic and responsive layout.
- **Python**: Used for backend algorithm and data processing.
- **Flask**: Utilized to create the RESTful API and connecting the frontend and backend.
- **Supabase**: A Postgres-based database service for managing class locations, photos, and other app data.
- **Vercel**: Utilized as the hosting platform for deplying the application.


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
   
