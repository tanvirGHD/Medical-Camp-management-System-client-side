# Project Name: Medical Camp Management System (MCMS)

## Objective
Develop a **Medical Camp Management System (MCMS)** using the MERN stack. This system helps organizers and participants easily manage and coordinate medical camps.

## Live Site URL
[[Enter Live Site Link Here](https://medicare-camp.web.app/)]


---

## Key Features

1. **Responsive Design**: Fully responsive for mobile, tablet, and desktop, including the dashboard.
2. **User Authentication**: Secure login and registration with social login options.
3. **Home Page**:
   - Navbar with logo, links, and dynamic user profile dropdown.
   - Banner slider showcasing success stories.
   - Popular camps section featuring Camp Name, Image, Fees, Date & Time, Location, Healthcare Professional, and Participant Count.
4. **Available Camps Page**:
   - Displays all camps with filtering, sorting, and search functionality.
   - Ability to toggle layout between three-column and two-column views.
5. **Camp Details Page**:
   - Comprehensive details with participant registration modal.
   - Incremental participant count on registration.
6. **Participant Dashboard**:
   - Analytics with charts for lifetime camp registrations.
   - Registered Camps table with payment, feedback, and cancellation options.
   - Payment History table showing all past transactions.
7. **Organizer Dashboard**:
   - Manage profile information.
   - Add, update, and delete camps.
   - View and manage registered participants with payment and confirmation statuses.
8. **Feedback & Ratings**: Collect and display participant feedback on camps.
9. **Pagination and Search**: Implemented on all tables.
10. **Notifications**: Sweet alerts/toasts for all CRUD operations and authentication events.
11. **Error Handling**:
    - 404 Page for undefined routes.
    - Proper modals for form submissions and errors.
12. **Animations**: Framer Motion or AOS for smooth UI interactions.

13.**Payment Handling**:
   - Integration with payment gateways (e.g., Stripe or PayPal).
   - APIs for payment processing and transaction history.
---

## Technical Specifications 

- **Framework**: React.js with React Router.
- **UI Library**: Material Tailwind (or other alternatives).
- **State Management**: Context API.
- **Data Fetching**: TanStack Query for GET requests.
- **Form Management**: React Hook Form or Formik.
- **Charts**: Recharts for data visualization in participant dashboards.
- **Optional Features**: Volunteer or health record management modules.

---

## **Run the Server**:
   ```bash
   npm start
   ```
   The server will be running on `https://y-omega-ten.vercel.app` by default.

## **Run in Development Mode**:
   ```bash
   npm run dev
   ```

