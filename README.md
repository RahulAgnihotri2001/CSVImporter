[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_IojtdoU)
# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**


We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:
- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it *Jugaad* 
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

You get brownie points 🍪 if you can make it even easier by allowing them to filter the data as well before importing it into Google Sheets 🔍.

**Other pointers**:
- Import to Sheet – After validation and mapping, devise a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimize for Large Files – Large datasets are common in analytics. Your solution should effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

## Submission ⏰
The timeline for this submission is: **9AM, 30th Sept, 2023 - 12PM, 2nd Oct, 2023**

Some things you might want to take care of:
- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- [x] My code's working just fine! 🥳
- [x] I have recorded a video showing it working and embedded it in the README ▶️
- [x] I have tested all the normal working cases 😎
- [x] I have even solved some edge cases (brownie points) 💪
- [x] I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓
Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore 😛

## Developer's Section
*Add your video here, and your approach to the problem (optional). Leave some comments for us here if you want, we will be reading this :)*  

**Video link** -  [CSV Importer](https://drive.google.com/file/d/1FSx9TWcNllDfDe2tuFl2PYAzmjaRlfZv/view?usp=sharing)

### Explaination 
This web application allows users to select specific columns from a CSV file and import the selected data into a Google Sheets spreadsheet. It's a convenient way to avoid sending unnecessary data to the backend and streamline the process of importing CSV data into Google Sheets.

*_Getting Started_*  

Follow these steps to set up and run the application:

*_Prerequisites_*  

Node.js and npm installed on your system.
A Google Cloud service account key with access to the Google Sheets API. You can obtain this key by following the Google Sheets API documentation.

*_Installation_*  

1. Clone the repository to your local machine.
```
git clone https://github.com/yourusername/csv-importer.git
cd csv-importer
```
2. Install the required dependencies.
```
npm install
```

*_Configuration_*  

1. Create a Google Cloud service account key JSON file and save it as path_to_your_service_account_key.json. Make sure this key has access to the Google Sheets API.
2. Open server.js and replace the placeholders with your own configurations:
  - 'path_to_your_service_account_key.json' with the path to your service account key file.
  - 'your_spreadsheet_id' with the ID of the Google Sheets spreadsheet where you want to paste the data.
  - 'Sheet1' with the name of the sheet in your spreadsheet where you want to paste the data.

_*Usage*_  

1. Start the server.
```
npm start
```
2. Access the web application in your browser at http://localhost:3000.
3. Select a CSV file using the file input field.
4. Choose one or more columns from the dropdown list that you want to import.
5. Click the "Import CSV" button to initiate the import process.
6. The application will send only the selected columns to the backend, which will then paste the data into your Google Sheets spreadsheet.

*_Program Files_*  

- server.js: The Node.js backend that handles the file upload and data import into Google Sheets. It also serves static files and sets up the Express server.
- public/index.html: The HTML file for the web application's user interface, where users can select columns and upload a CSV file.
- public/app.js: The JavaScript file responsible for handling user interactions and sending selected CSV data to the backend.

### Workflow Explanation  
![Workflow](Workflow.jpg)
