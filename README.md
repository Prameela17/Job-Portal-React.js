# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## General Routes

- `/`: Homepage
    - Element: `<HomePage />`
- `/login`: Login Page
    - Element: `<Login />`
- `/signup`: Signup Page
    - Element: `<SignUp />`
- `/job`: Jobs Page
    - Element: `<Jobs />`
- `/profile`: User Profile Page
    - Element: `<Profile />`
- `/notification`: Notification Page
    - Element: `<Notifications />`
- `/edit-profile`: Edit Profile Page
    - Element: `<EditProfile />`
- `/my-jobs`: User's Jobs Page
    - Element: `<MyJobs />`

## Employer Routes

- `/employer/create-account`: Create Employer Account Page
    - Element: `<CreateAccount />`
- `/employer/account`: Employer Account Information Page
    - Element: `<AccountInfo />`
- `/employer/notification`: Employer Notification Page
    - Element: `<EmployerNotification />`

## Job Application Routes

- `/job-apply/*`: Job Application Process
    - Element: `<JobApply />`
    - Subroutes:
        - `/job-apply/` (index): Job Application Page 1
            - Element: `<JobApplyPage1 />`
        - `/job-apply/page-2`: Job Application Page 2
            - Element: `<JobApplyPage2 />`
        - `/job-apply/page-3`: Job Application Page 3
            - Element: `<JobApplyPage3 />`
        - `/job-apply/page-4`: Job Application Page 4
            - Element: `<JobApplyPage4 />`
        - `/job-apply/page-5`: Job Application Page 5
            - Element: `<JobApplyPage5 />`

## Job Posting Routes

- `/job-post/*`: Job Posting Process
    - Element: `<PostJob />`
    - Subroutes:
        - `/job-post/` (index): Post Job Page 1
            - Element: `<PostJobPage1 />`
        - `/job-post/page-2`: Post Job Page 2
            - Element: `<PostJobPage2 />`
