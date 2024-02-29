# Library Management System using Angular and Dotnet8 - RestfulAPI

This is the front-end repository of this back-end repository: https://github.com/MinhNguyen5199/.NET-8 

## The purpose of this project is to learn and practice concepts related to:
> - Angular 17
> - Material UI
> - Back-end ASP.NET Core WEB API using .NET 8(C#)
> - Entity Framework Core, ORM for Database Access (DBContext, Migration)
> - SQL server from Google Cloud
> - Deploy back-end with Google App Engine
> - Continuous Integration/Continuous Deployment
> - Dependency Injection in .NET

## In this Website, I have created 
🔑 Authentication System : User would be able to login and create account.<br>
🔑 JWT Authentication : User's data will be stored in tokens in browser.<br>
🔑 Role based Authorization : Some features are only accessible to admin, some can be access by user and admin.<br>
🔑 Manage Books and Categories : Admin and inser/delete books/categories in the Library.<br>
🔑 Blocking / Disabling : Admin can block/unblock or disable/enable any User.<br>
🔑 Fine Calculation : Users can also see their fine, if they doesn't submit book withing specified time.<br>

## How to run locally

In the file api.service.ts ( in directory src/app/shared/services/api.service.ts): you set baseUrl to baseUrl: string = 'https://localhost:7197/api/Library/';

![image](https://github.com/MinhNguyen5199/AngularApp/assets/86221335/49ed9049-4eeb-4b6e-9eb4-8f3c2fbd9f1f)

In the file app.config.ts ( in directory src/app/app.config.ts): you set allowedDomains to allowedDomains: ['localhost:7197'],

![image](https://github.com/MinhNguyen5199/AngularApp/assets/86221335/ec6efc70-f072-4beb-b59f-88008c349ac3)

## How to run an application from a deployed back-end

Just set allowedDomains and baseUrl to where you host your back-end.

![image](https://github.com/MinhNguyen5199/AngularApp/assets/86221335/96d439ec-e7e0-47f4-8924-1cf26608115d)
![image](https://github.com/MinhNguyen5199/AngularApp/assets/86221335/bf912939-ba3f-4633-b3a2-f6fece9c6183)

❗❗❗ Always keep the route /api/Library/ because back-end app uses that route

## Application Architecture

![image](https://github.com/MinhNguyen5199/AngularApp/assets/86221335/47c8a765-6925-4e2b-aca2-ecd67068c006)

## Website look

![ScreenRecording2024-02-29at12 25 50AM-ezgif com-video-to-gif-converter](https://github.com/MinhNguyen5199/AngularApp/assets/86221335/d7a4edfb-8bd3-4f3e-8d91-8a13210595a4)
