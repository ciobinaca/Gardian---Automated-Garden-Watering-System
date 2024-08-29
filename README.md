# Gardian - Automated-Garden-Watering-System
Smart tool designed to help users effectively care for their plants by integrating Arduino technology and user-friendly interfaces.

# Setup 

Before you begin, make sure you have the following installed:

    Java JDK 17 or later
    Maven 4.0.0
    Node.js 18.x or later
    npm (Node Package Manager) - you can download it at https://nodejs.org/en.
    Arduino IDE 2.2.1
    ESP32 Board Support for Arduino IDE
    MySQL Workbench 8.0

## Backend Setup

  - Configure the Database

    Create and Set Up MySQL Database
    Import Database Schema:

       Use the schema.sql file located in src/main/resources to create the necessary tables and initial data.

  - Update Configuration:

    Edit src/main/resources/application.properties to configure your database credentials:

          properties
          
              spring.datasource.url=jdbc:mysql://localhost:3306/gardian_db
              spring.datasource.username=root
              spring.datasource.password=yourpassword

  - Build and Run the Backend

    Install Dependencies and Build
    Run the Application:

## Frontend Setup

  - Install Dependencies using npm install 

  - Configure API Endpoint

     Update API URL:
         Modify src/config/apiConfig.js to point to your backend API

          export const API_URL = 'http://localhost:8080';

  - Run the Frontend Application

      Start the Development Server:

        npm start

  - Verify Frontend Operation:
            Open http://localhost:3000 in your browser to access the application.

## ESP32 and Arduino Setup

   - Install ESP32 Board Support
        Open Arduino IDE and navigate to File > Preferences.
        In the Additional Board Manager URLs field, add: https://dl.espressif.com/dl/package_esp32_index.json.
        Go to Tools > Board > Board Manager, search for ESP32, and install it.

   - Upload Code to ESP32
        Connect your ESP32 board to your computer via USB.
        Open the appropriate Arduino sketch (code) file for your ESP32 in the Arduino IDE.
        Select the correct ESP32 board from Tools > Board.
        Select the correct port from Tools > Port.
        Click Upload to transfer the code to your ESP32.

   - Configure ESP32 Settings
        Update the Wi-Fi credentials and backend server URL in the ESP32 code to match your network and backend settings.

# Technical Details and Documentation:

https://biancaciobanu.slite.page/p/0TEDFltkdBC3Uk/Gardian-Automated-Garden-Watering-System




