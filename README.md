**Floor Management Application**
================================
The **Floor Management Application** is a React-based web application designed for managing restaurant tables and room layouts. It allows users to drag and drop tables, configure table details, manage rooms, and save layouts for efficient restaurant floor management.

**Features**
------------

### **Table Management**

*   Drag and drop tables onto the floor plan with precise positioning.
    
*   Edit table details like name, minimum and maximum covers, and status (Active/Inactive).
    
*   Resize, rotate, duplicate, or delete tables.
    

### **Room Management**

*   Add, view, and save room layouts.
    
*   Toggle between different rooms seamlessly.
    

### **Statistics**

*   Display real-time statistics including:
    
    *   Total number of tables.
        
    *   Minimum covers.
        
    *   Maximum covers.
        
    *   Online capacity.
        

### **Advanced Features**

*   Placeholder for future advanced settings.
    
*   Clean and responsive UI for desktop and mobile devices.
    

**Technologies Used**
---------------------

*   **Frontend**: React
    
*   **Styling**: CSS (with modules), Tailwind CSS (optional)
    
*   **State Management**: Context API
    
*   **Drag and Drop**: react-dnd
    
*   **Form Handling**: react-hook-form
    
*   **Persistence**: Local storage
    
*   **Testing**: Jest, React Testing Library, Cypress (for e2e tests)
    

**Installation**
----------------

Follow these steps to get the application up and running:

1. Clone the Repository
```bash
git clone https://github.com/your-username/floor-management-app.git
cd floor-management-app
```

2. Install Dependencies
```bash
npm install
```

3. Run the Application
```bash
npm start
```
The application will be available at "http://localhost:3000".

4. Run Tests (Optional)
```bash
npm test
```

5. Build for Production
```bash
npm run build
```    

**File Structure**
------------------
```bash
src/
├── assets/              # Static assets like icons and images
├── components/          # React components
│   ├── FloorPlan/       # Floor management components
│   ├── RoomManagement/  # Room-related components
│   └── Common/          # Shared components like Modals and Buttons
├── context/             # Context API for global state management
├── hooks/               # Custom hooks for reusable logic
├── styles/              # CSS files (global and component-specific)
├── utils/               # Utility functions and constants
├── App.js               # Main application component
├── index.js             # Entry point
└── index.css            # Global styles

```

**Key Libraries and Tools**
---------------------------

| **Library/Tool**          | **Purpose**                                   |
|---------------------------|-----------------------------------------------|
| **React**                 | Core framework for building the UI.          |
| **Context API**           | State management for tables and rooms.       |
| **react-dnd**             | Enables drag-and-drop functionality.         |
| **react-hook-form**       | Simplifies form handling.                    |
| **Jest/React Testing Library** | Unit tests for components.               |
| **Cypress**               | End-to-end testing (optional).               |


**How It Works**
----------------

### **Drag-and-Drop Tables**

*   Uses react-dnd to provide intuitive drag-and-drop functionality for positioning tables on the floor plan.
    
*   Adjustments are saved in local storage for persistence.
    

### **Room and Table Details**

*   Context API is used to manage the global state of rooms and tables.
    
*   Forms handled using react-hook-form ensure validation and state updates are efficient.
    

### **Statistics**

*   A custom hook, useTableStatistics, computes live statistics like total tables and covers.
    

**Future Enhancements**
-----------------------

*   Add backend integration using Node.js and MongoDB/PostgreSQL.
    
*   Enable user authentication for personalized layouts.
    
*   Add advanced room and table settings (e.g., dynamic room resizing).
    
*   Introduce real-time collaborative editing.
    

**Screenshots**
---------------

<img screenshot="11.jpg" width="250"/> 


**Contributing**
----------------

Contributions are welcome! To contribute:

1.  Fork the repository. 
```bash
git checkout -b feature-name
```
    
3.  Commit and push your changes.
    
4.  Submit a pull request for review.
    

**License**
-----------

This project is licensed under the MIT License.

**Acknowledgments**
-------------------

*   Thank you!! 😊
*   Fathima Shahana Rifkhan
