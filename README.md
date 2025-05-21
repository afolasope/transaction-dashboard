# Transaction Management Dashboard

A React-based transaction management component for handling client-freelancer projects.  
This project includes features to track transaction statuses, raise disputes, request funds, and release funds — all integrated with a clean UI and state management using Zustand and React Query.

---

## Features

-   Display transaction details including client, freelancer, status, and amounts.
-   Track transaction statistics (completed, disputed, in progress) with Zustand for global state management.
-   Raise disputes with a modal dialog supporting user input.
-   Request funds with comments and file proof upload via a modal.
-   Release funds action with confirmation and success/error notifications.
-   Role-based UI rendering (client vs freelancer).
-   Responsive and accessible UI components.
-   Integration with backend APIs for transaction operations.
-   Notifications powered by SweetAlert2 for smooth UX feedback.
-   React Query for efficient server state synchronization and caching.

---

## Tech Stack

-   **React** (with functional components and hooks)
-   **TypeScript**
-   **Zustand** for global state management
-   **React Query (@tanstack/react-query)** for API data fetching and mutations
-   **SweetAlert2** for user-friendly dialogs and alerts
-   **Tailwind CSS** for styling
-   Custom UI components (Button, Badge, Card, Dialog, Textarea)

---

## Installation

1. Clone the repo:

    ```bash
    git clone https://github.com/your-username/transaction-dashboard.git
    cd transaction-dashboard

    ```

2. Clone the repo:

    ````bash
    npm install
    Start the development server:
    ```bash
    npm run dev
    ````
