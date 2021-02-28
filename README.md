# Morning Briefing
Morning Briefing is a website that allows you to create a dashboard and report with data that is most important to you (such as weather, stocks, covid cases, etc.) and schedule it to be sent to you first thing in the morning.

This project consists of a React frontend that communicates with a Python Flask backend through a REST API. The front-end allows a user to view their data sources on a dashboard and select them to be included in their Morning Briefing' (which is a PDF file that is sent to the user at a set time). The backend supplies the front-end with data from a Weather API & a stocks API and also handles the creation and submission of the 'Morning Briefings'.

## Actual Implementation
At this time, only the Dashboard with data sources has been implemented.

## Setup
### React Website
Windows:
```bash
cd PATHTOPROJ\morning_briefing\morning_briefing_react
npm install
npm start
```

Linux:
```bash
cd /PATHTOPROJ/morning_briefing/morning_briefing_react
npm install
npm start
```

### Flask Server
If possible, please create a venv before running the following commands.

Windows:
```bash
pip install -r requirements.txt
cd PATHTOPROJ\morning_briefing\python-backend
python app.py
```

Linux:
```bash
pip3 install -r requirements.txt
python3 app.py
```

## Team Members
- Bread and Cheese#2194 - Beginner
- Shachin22#4543 - Beginner
- Fake Nyano#1606 - Intermediate
- Crazy Pyro#9319 - Intermediate
