# FastFeet — Delivery Management API

FastFeet is a fictional carrier service designed to manage the full lifecycle of deliveries, from order creation and courier assignment to final delivery confirmation. This API is built with a **domain-driven approach** following **clean architecture principles** to ensure maintainability, scalability, and separation of concerns.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Project Structure](#project-structure)


---

## Overview

FastFeet provides a structured system for managing deliveries, couriers, and recipients while enforcing key business rules to maintain order integrity. The API is modular and divided into the following **core subdomains**:

- **Delivery**: Manages orders, couriers, and recipients, including delivery statuses and order tracking.
- **User**: Handles user authentication, authorization, and role-based access control (`admin` and `courier`).
- **Notification**: Sends real-time notifications to recipients whenever an order’s status changes.

By implementing a **clean architecture**, the API separates **domain logic** from **infrastructure and framework-specific code**, making it easy to test and extend.

---

## Features

- **User Management**
  - Authentication via CPF and password
  - Role-based access control (`admin` and `courier`)
  - Secure password management and permission enforcement

- **Delivery Management**
  - Full CRUD operations for couriers, orders, and recipients
  - Order lifecycle tracking (waiting, picked up, delivered, returned)
  - Ensures only the assigned courier can mark an order as delivered

- **Notifications**
  - Automated notifications to recipients when order statuses change

- **Architecture & Scalability**
  - Modular, clean architecture with separation of concerns
  - Easy to maintain and extend

## Project Structure
.
├── .git
├── node_modules
├── src
│   ├── core
│   │   ├── entities
│   │   ├── errors
│   │   ├── events
│   │   ├── repositories
│   │   ├── services
│   │   ├── shared
│   │   ├── types
│   │   ├── either.spec.ts
│   │   └── either.ts
│   └── domain
│       ├── delivery
│       ├── notification
│       └── user
├── test
├── .eslintrc.json
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
└── vite.config.mts