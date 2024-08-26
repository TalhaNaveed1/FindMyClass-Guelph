from flask import Flask, request, jsonify
from flask_cors import CORS
from traffic_time import run_prediction

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    print("Predict route was hit!")
    data = request.json
    day_of_week = data['day_of_week']
    month = data['month']
    hour = data['hour']
    
    test_data = [hour, day_of_week, month]
    predicted_level = run_prediction(test_data)
    
    return jsonify({'predictedLevel': predicted_level})

# if __name__ == '__main__':
#     app.run(debug=True)

if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)