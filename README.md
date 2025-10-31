# WorkBridge Project
# WorkBridge

## Description

WorkBridge is a job-matching and communication platform designed to streamline interactions between job seekers and
employers.​ Unlike traditional job portals where communication is slow and fragmented, WorkBridge enables real-time messaging and notification updates, improving hiring efficiency and response
rates.​

​Our GOAL​ is to create an efficient platform that connects job seekers and employers with direct, seamless, and instant communication while supporting the hiring workflow from application to response.​

---

## ✨ Features
- Landing Page: Hero section, featured jobs, companies, and testimonials.

- Authentication: Login and Signup for Job Seekers and Employers.

- Dashboard: Role-based dashboards showing relevant information.

- Job Listings: Browse, search, and paginate job listings.

- Job Details: View job descriptions, apply for jobs, and favorite them.

- Favorites: Save and manage favorite jobs.

- Static Pages: About, Contact, Privacy Policy, and Terms of Service.

- Responsive Design: Works beautifully on mobile, tablet, and desktop.

- Protected Routes: Role-based access control for certain pages.

## User Stories

For Job Seekers

- As a job seeker, I want to sign up and log in so that I can access job listings securely.

- As a job seeker, I want to browse available jobs with filters and search, so I can find relevant opportunities.

- As a job seeker, I want to view job details, including employer info, job description, location, and salary.

- As a job seeker, I want to apply for jobs directly from the platform and receive confirmation.

- As a job seeker, I want to favorite jobs so I can easily track the positions I’m interested in.

- As a job seeker, I want to access my dashboard to view my applications and track my activity.

For Employers

- As an employer, I want to sign up and log in so that I can post and manage jobs.

- As an employer, I want to post new job openings with all relevant details.

- As an employer, I want to view applicants for my posted jobs.

- As an employer, I want to manage job postings, including editing or removing them as needed.

General
 
- As a user, I want to read about the platform’s policies, including Privacy Policy and Terms of Service.

- As a user, I want the platform to be responsive and easy to navigate on all devices.

- As a user, I want role-based access so that job seekers, employers, and admins only see relevant content.

## 🛠️ Technologies used


### Frontend
- **React**: ^19.1.1  
- **React DOM**: ^19.1.1
- **React Router DOM**: ^7.9.2
- **Formik**: ^2.4.6 
- **Yup**: ^1.7.1  
- **Axios**: ^1.12.2
- **Boxicons**: ^2.1.4

### Backend
- **Flask**
- **Flask-CORS** 
- **Flask-RESTful**
- **Flask-SQLAlchemy**
- **Flask-Migrate** 
- **SQLAlchemy-Serializer**
- **Faker** 
- **Gunicorn**   

### Database
- **PostgreSQL** — Production database  
- **SQLite** — Local development database  


## Getting Started

#### Frontend setup 

1. Clone the Repository
 
``` 
git clone git@github.com:leekabiruu/workbridge_frontend.git
cd workbridge_frontend
```


2. Install dependencies
```
npm install
```
3. Start the Server
```
npm run dev
```
or
```
npm start
```

### Project Structure
```
src/
├─ components/
│  ├─ Navbar.jsx
│  ├─ Footer.jsx
│  ├─ JobList.jsx
│  ├─ Hero.jsx
│  ├─ CompanySection.jsx
│  └─ TestimonialSection.jsx
├─ context/
│  └─ AuthContext.jsx
├─ pages/
│  ├─ LandingPage.jsx
│  ├─ Home.jsx
│  ├─ Jobs.jsx
│  ├─ JobDetails.jsx
│  ├─ Dashboard.jsx
│  ├─ Login.jsx
│  ├─ Signup.jsx
│  ├─ About.jsx
│  ├─ Contact.jsx
│  ├─ Terms.jsx
│  └─ Policy.jsx
├─ services/
│  └─ api.js
├─ App.jsx
├─ main.jsx
└─ index.css
```
---

 #### Backend Setup
 From the README, at the about section, click the backend link to the backend repository, then clone it:

 ```
 git clone https://github.com/leekabiruu/WorkBridge-Backend
 ```
 2. Install dependencies:
 ```
 pipenv install
 ```

 3. Activate the virtual environment (if using Pipenv):
```
pipenv shell
```

4. Run the Flask application:
```
python run.py
```

or

```
flask run
```

### URL Links:

- live site → 

- Frontend Repository → https://github.com/leekabiruu/workbridge_frontend#

- Frontend → http://localhost:5174/

- Backend Repository → https://github.com/leekabiruu/WorkBridge-Backend

- Backend API → http://localhost:5555

## 📸 Screenshots

Home Page 
---
<img src="" alt="Home Page" width="600">

Playlist Page 
---
<img src="" alt="Playlist Page" width="600">

Songs Page
---
<img src="" alt="Songs Page" width="600">

Profile Page
---
<img src="" alt="Profile Page" width="600">


### 🤝 Contributing
Contributions are welcome! 🎉
1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Open a Pull Request


### Future Improvements
- Advanced Notifications​

- Push notifications (mobile & web) for new job posts, messages, application status, and interview scheduling.​

- Resume & Portfolio Builder​

- Allow job seekers to create resumes and upload portfolios directly on the platform.​

- Employer Job Analytics Dashboard​

- Provide insights like number of applicants, most viewed job posts, and candidate profile stats.​

- Automated Interview Scheduling​

- Smart scheduling system that syncs with calendar apps (Google Calendar, Outlook).​

- Mobile App Version​

- Develop a cross-platform mobile app (React Native / Flutter) for easier access and real-time alerts.​

- Skills & Certification Hub​

- Add training courses, mock tests, and certification support for upskilling job seekers.


### 💡 Inspiration
WorkBridge was inspired by the need for a simple, modern, and efficient platform that connects job seekers with employers. Many existing job portals are cluttered, slow, or difficult to navigate, especially for first-time users.

### Credits
 This project was done by four brilliant individuals:
   1. Lee Kabiru (Scrum Master)
   2. Nicholas Kiama
   1. Jimmy Okiwri
   2. Steve Mburu

We would like to thank Moringa for such a good opportuninity to do this project aand help us test the skills we gathered so far .