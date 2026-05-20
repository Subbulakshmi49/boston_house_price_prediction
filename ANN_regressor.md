Build a complete production-grade AI/ML web application for “Boston House Price Prediction” using Flask framework. The application should use the already trained ANN regression model (`boston_house_price_model.h5`) and scaler file (`scaler.pkl`) to predict median house prices based on 13 socio-economic and property-related features from the Boston Housing dataset.

The web app must have a modern premium UI/UX, responsive design, smooth animations, professional color palette, clean typography, and production-grade folder structure.

---

# Tech Stack

Use the following technologies:

* Python
* Flask
* TensorFlow / Keras
* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* Font Awesome Icons
* Jinja2 Templates

---

# Core Features

## Prediction Functionality

The user should be able to:

* Enter all 13 feature values
* Click “Predict Price”
* Get predicted house price instantly
* Display result beautifully in a premium prediction card

---

## Clear Button

Add a “Clear” button that:

* Clears all input fields
* Removes old prediction result
* Resets the form smoothly

---

## Input Features

Create input fields for all 13 Boston Housing features:

1. CRIM → Crime Rate
2. ZN → Residential Land Zoned
3. INDUS → Industrial Area
4. CHAS → Charles River Dummy Variable
5. NOX → Nitric Oxide Concentration
6. RM → Average Rooms
7. AGE → Age of Property
8. DIS → Distance to Employment Centers
9. RAD → Accessibility to Highways
10. TAX → Property Tax Rate
11. PTRATIO → Pupil Teacher Ratio
12. B → Black Population Index
13. LSTAT → Lower Status Population %

Each input should have:

* Placeholder
* Label
* Tooltip/help text
* Validation

---

# UI/UX Requirements

Create a stunning modern AI dashboard style UI.

## Design Theme

Use:

* Dark gradient background
* Glassmorphism cards
* Soft shadows
* Rounded corners
* Smooth hover effects
* Gradient buttons
* Animated prediction section

---

## Premium Color Palette

Use premium colors like:

* Deep Navy
* Royal Blue
* Cyan
* Purple Gradient
* White Text
* Soft Neon Highlights

Example palette:

```text
#0F172A
#1E293B
#3B82F6
#06B6D4
#8B5CF6
#F8FAFC
```

---

# Home Page Layout

Design a professional landing-style prediction page.

## Sections

### Navbar

Include:

* App Logo
* App Name
* GitHub Link
* About Link

---

### Hero Section

Include:

* Title:
  “Boston House Price Prediction Using ANN”
* Subtitle:
  “AI-powered real estate valuation system”
* Animated AI illustration or icon

---

### Prediction Form Card

Centered premium card with:

* 13 input fields
* Predict button
* Clear button

Use:

* 2-column responsive layout
* Floating labels
* Smooth animations

---

### Result Section

After prediction:

* Show predicted price in large typography
* Add animation effect
* Display formatted dollar value

Example:

```text
Predicted House Price
$32,450
```

---

# Backend Requirements

Use Flask backend.

---

# Flask Functionalities

## Routes

### Home Route

```python
@app.route('/')
```

Render main page.

---

### Prediction Route

```python
@app.route('/predict', methods=['POST'])
```

Tasks:

* Receive form input
* Convert to float
* Create numpy array
* Scale data using scaler.pkl
* Load ANN model
* Predict value
* Return prediction to frontend

---

# Model Loading

Load:

```python
boston_house_price_model.h5
```

and

```python
scaler.pkl
```

from model directory.

---

# Prediction Flow

```text
User Input
   ↓
Form Submission
   ↓
Flask Backend
   ↓
Scaler Transform
   ↓
ANN Model Prediction
   ↓
Return Predicted Price
   ↓
Display Result
```

---

# Production Grade Folder Structure

Generate complete clean folder structure:

```text
boston_house_price_app/
│
├── app.py
├── requirements.txt
├── Procfile
├── runtime.txt
├── README.md
│
├── model/
│   ├── boston_house_price_model.h5
│   └── scaler.pkl
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── images/
│
├── templates/
│   └── index.html
│
├── notebooks/
│   └── Boston_house_price_prediction.ipynb
│
└── screenshots/
```

---

# requirements.txt

Generate proper dependencies:

```text
Flask
tensorflow
numpy
scikit-learn
pandas
gunicorn
joblib
h5py
```

---

# Deployment Requirements

Prepare the project for deployment.

---

# Procfile

```text
web: gunicorn app:app
```

---

# runtime.txt

Use latest stable Python version.

Example:

```text
python-3.11.9
```

---

# Additional Features

Add:

* Form validation
* Error handling
* Loading spinner during prediction
* Responsive mobile design
* Prediction history section (optional)
* Footer section

---

# JavaScript Features

Use JavaScript for:

* Clear form functionality
* Input validation
* Smooth scrolling
* Button animations
* Loading spinner

---

# CSS Requirements

Create:

* Fully responsive design
* Professional typography
* Animated buttons
* Gradient backgrounds
* Glassmorphism effects
* Card hover animations

---

# Flask Code Expectations

Write clean modular Flask code with:

* Comments
* Proper indentation
* Exception handling
* Production-grade practices

---

# Important Instructions

* Do NOT use Streamlit
* Use Flask only
* Use ANN saved model only
* Do NOT retrain model in app.py
* Load existing `.h5` model
* Use saved `scaler.pkl`
* Application must be deployment-ready

---

# Final Output Expected From Antigravity

Generate:

* Full Flask project
* Complete frontend + backend code
* CSS styling
* JavaScript
* Flask routes
* Deployment files
* Beautiful UI
* Production-ready structure
* Responsive web app
* Working prediction system
