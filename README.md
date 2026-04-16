# forfx — Sales & Support Dashboard

A comprehensive, frontend-only analytics dashboard designed for Sales & Support teams at a forex brokerage. Built with vanilla HTML, CSS, and JavaScript, leveraging Material Design 3 principles, it requires no backend or build tools, making it exceptionally easy to deploy and manage.

---

## Overview

The forfx Dashboard offers a unified view of critical business metrics, including client data, sales performance, support ticket management, and agent productivity. The entire application is self-contained within a single HTML file (`index.html`), allowing for effortless deployment to any static hosting service like GitHub Pages, Netlify, or Vercel.

This application serves as a realistic simulation of a forex CRM interface, featuring secure client-side login, seamless multi-page navigation, dynamic interactive charts, and a dark mode toggle for enhanced user experience.

---

## Features

-   **Secure Client-Side Login**: Robust credential validation, including detection of Persian characters and enforcement of a 12-character alphanumeric password policy.
-   **Multi-page SPA Routing**: Smooth, hash-based navigation across 9 distinct pages without page reloads, providing a fluid single-page application experience.
-   **Dark Mode Toggle**: Full light/dark theme functionality that persists across all pages, adaptable to user preference.
-   **Responsive Design**: Fully optimized layout for optimal viewing and interaction across desktop, tablet, and mobile devices.
-   **Interactive Data Visualizations**: Over 9 Chart.js-powered visualizations, offering deep insights into various data points across the dashboard.
-   **Intuitive Homepage**: Icon-based quick navigation, providing direct access to key charts and data sections.

---

## Pages & Routes

The dashboard includes the following main sections, accessible via hash-based routing:

| Route          | Page              | Description                                        |
| :------------- | :---------------- | :------------------------------------------------- |
| `#home`        | Home              | Quick overview and navigation to all data sections |
| `#dashboard`   | Dashboard         | Key Performance Indicators (KPIs), revenue trends, and client segmentation |
| `#sales`       | Sales Analytics   | Detailed insights into revenue over time, account types, and purchase plans |
| `#clients`     | Clients           | Searchable and filterable table of client data     |
| `#geography`   | Geography         | Global client distribution and regional revenue analysis |
| `#tickets`     | Tickets           | Management and analysis of support ticket categories, pipeline, and live feed |
| `#agents`      | Agents            | Agent workload, response times, and performance metrics |
| `#marketing`   | Marketing         | Analysis of UTM sources, traffic channels, and campaign statistics |
| `#reports`     | Reports           | Summary of KPIs against targets and exportable reports |

---

## Data Structure

The dashboard operates using a simulated client dataset (`client_data_fake.csv`), providing comprehensive data for demonstration purposes. The schema includes:

| Column              | Type    | Description                           |
| :------------------ | :------ | :------------------------------------ |
| `date`              | Date    | Client registration date              |
| `Email`             | String  | Client email address                  |
| `billing_phone`     | String  | Contact phone number                  |
| `Lname`             | String  | Last name                             |
| `Fname`             | String  | First name                            |
| `Country`           | String  | Country of residence                  |
| `Plan-Tags`         | String  | Account tier tag (e.g., VIP, Gold)    |
| `Purchase Plans`    | String  | Trading account type                  |
| `Amount-USD`        | Float   | Initial deposit amount in USD         |
| `UTM Campaign`      | String  | Marketing campaign identifier         |
| `UTM Medium`        | String  | Traffic medium (e.g., cpc, email)     |
| `UTM Source`        | String  | Traffic source (e.g., Google, Facebook)|
| `Status`            | String  | Client pipeline status                |
| `Account Type`      | String  | Account category (e.g., ECN, Islamic) |
| `Platform`          | String  | Trading platform (e.g., MT4, MT5)     |
| `Leverage`          | String  | Trading leverage ratio                |
| `Deposit Count`     | Integer | Number of deposits made               |
| `Total Deposits (USD)` | Float   | Cumulative deposit amount             |
| `Profit/Loss (USD)` | Float   | Client Profit/Loss                    |
| `Ticket Category`   | String  | Support issue type                    |
| `Ticket Status`     | String  | Current ticket status                 |
| `Response Time (hrs)` | Float   | Hours to first agent response         |
| `Assigned Agent`    | String  | Support agent name                    |
| `Last Login Date`   | Date    | Most recent platform login            |
| `Trades Count`      | Integer | Total number of executed trades       |

---

## Authentication Details

Client-side login validation rules:

-   Usernames and passwords must not contain Persian (Farsi) characters.
-   Passwords require a minimum length of **12 characters** and must include at least one **letter** and one **number**.
-   Invalid credentials or rule violations trigger immediate inline error messages.

> **Note**: Authentication is simulated client-side for demonstration purposes. Any credentials adhering to the above rules will grant access.

---

## Libraries & Dependencies

All external dependencies are loaded via CDN, eliminating the need for `npm install` or complex build processes.

| Library                               | Version | Usage                        |
| :------------------------------------ | :------ | :--------------------------- |
| [Chart.js](https://www.chartjs.org/) | 4.4.1   | All charts and data visualizations |

The application's routing, state management, and UI logic are entirely implemented using vanilla JavaScript.

---

## Deployment

The dashboard is designed for straightforward deployment:

### GitHub Pages (Current Host)

The live demo is available at:
```
https://mahya454545.github.io/first-task/
```

To deploy updates via Git:
```bash
git add .
git commit -m "Your descriptive commit message"
git push origin main
```
GitHub Pages automatically serves the `index.html` file from the root of the `main` branch.

### Run Locally

No web server is required. Simply open `index.html` in any modern web browser:

```bash
# On macOS
open index.html

# Alternatively, double-click the index.html file in your file explorer.
```

---

## Project Structure

```
first-task/
├── index.html           # Main application file (HTML, CSS, and JS combined)
├── client_data_fake.csv # Simulated client dataset (100 rows, 25 columns)
├── client_data_fake.xlsx# Excel version of the simulated dataset
└── README.md            # Project README documentation
```

---

## Design System

The dashboard is built upon **Material Design 3** guidelines, featuring a custom purple color palette:

| Token             | Light Theme   | Dark Theme    |
| :---------------- | :------------ | :------------ |
| Primary           | `#6750A4`     | `#D0BCFF`     |
| Primary Container | `#EADDFF`     | `#4F378B`     |
| Surface           | `#FFFBFE`     | `#1C1B1F`     |
| On Surface        | `#1C1B1F`     | `#E6E1E5`     |

**Typography**: `Segoe UI`, with `system-ui` as a fallback.
**Border Radius**: Ranges from `4px` (xs) to `50px` (full) for various UI components.

---

## Development Notes

-   **Chart Management**: All Chart.js instances are stored in a `chartInstances` object and are destroyed before re-rendering to prevent memory leaks.
-   **Dark Mode Integration**: Switching themes in dark mode triggers a re-render of all active charts to ensure correct color application.
-   **Optimized Chart Initialization**: The router intelligently calls `initPageCharts(pageId)` on navigation, ensuring charts are only initialized when their respective canvas elements are visible, optimizing performance.
-   **Client Table Functionality**: Supports dynamic live filtering by status chips and simultaneous free-text search.

---

*forfx Internal AI Training Program — Opofinance 2026*
