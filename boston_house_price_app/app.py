from flask import Flask, render_template, request, jsonify
import numpy as np
import joblib
from tensorflow.keras.models import load_model
import os

# Get the absolute path of the directory containing app.py
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Explicitly set template and static folders using absolute paths
app = Flask(__name__, 
            template_folder=os.path.join(BASE_DIR, 'templates'),
            static_folder=os.path.join(BASE_DIR, 'static'))

# Load model and scaler (fallback to parent directory if not found in current)
MODEL_PATH = os.path.join(BASE_DIR, 'model', 'boston_house_price_model.h5')
if not os.path.exists(MODEL_PATH):
    MODEL_PATH = os.path.join(os.path.dirname(BASE_DIR), 'model', 'boston_house_price_model.h5')

SCALER_PATH = os.path.join(BASE_DIR, 'model', 'scaler.pkl')
if not os.path.exists(SCALER_PATH):
    SCALER_PATH = os.path.join(os.path.dirname(BASE_DIR), 'model', 'scaler.pkl')

model = load_model(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from POST request
        data = request.json
        
        # 13 features: CRIM, ZN, INDUS, CHAS, NOX, RM, AGE, DIS, RAD, TAX, PTRATIO, B, LSTAT
        features = [
            float(data['crim']),
            float(data['zn']),
            float(data['indus']),
            float(data['chas']),
            float(data['nox']),
            float(data['rm']),
            float(data['age']),
            float(data['dis']),
            float(data['rad']),
            float(data['tax']),
            float(data['ptratio']),
            float(data['b']),
            float(data['lstat'])
        ]
        
        # Convert to numpy array
        features_array = np.array([features])
        
        # Scale features
        scaled_features = scaler.transform(features_array)
        
        # Predict using ANN
        prediction = model.predict(scaled_features)
        
        # prediction is expected to be a 2D array, get the scalar value
        price = float(prediction[0][0])
        
        # Assume price in $1000s based on standard Boston housing dataset
        price_dollars = price * 1000
        
        return jsonify({'success': True, 'prediction': price_dollars})
        
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
