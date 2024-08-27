import math
import pandas
from flask import Flask, request, jsonify
from flask_cors import CORS
from waitress import serve

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


def read_data():
    # Day of Week: Monday: 0, Sunday: 6
    # Month: January:0, December: 11
    # Traffic Level: Low: 0, Mid: 1, High: 2
    file_path = "files/data.csv"
    data_path = pandas.read_csv(file_path)
    data = data_path.values.tolist()
    return data

def euclidean_distance(p1,p2):
    EC_distance = 0
    for index in range(len(p1) - 2):
        EC_distance += (p1[index] - p2[index]) ** 2
    
    return math.sqrt(EC_distance)
    

def k_nearest_neighbours(data,p,k):
    print("Testing k_nearest_neighbours")
    EC_distances = []
    for point in data:
        temp_distance = euclidean_distance(p,point)
        EC_distances.append((point,temp_distance))
    
    EC_distances.sort(key=lambda x: x[1])
    knn = EC_distances[:k]
    traffic_level = {'low':0,'mid':0,'high':0}
    
    for neighbour, _ in knn:
        college = neighbour[-2]
        stone = neighbour[-1]
        if (college == 0):
            traffic_level['low'] += 1
        elif (college == 1):
            traffic_level['mid'] += 1
        else :
            traffic_level['high'] += 1
        
        if (stone == 0):
                traffic_level['low'] += 1
        elif (stone == 1):
            traffic_level['mid'] += 1
        else:
            traffic_level['high'] += 1

    return_traffic_level = max(traffic_level, key=traffic_level.get)
    
    return return_traffic_level


def run_prediction(test_point):
    myData = read_data()
    k = 3
    predicted_tf_level = k_nearest_neighbours(myData,test_point,k)
    print(predicted_tf_level)
    
    return predicted_tf_level



if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=8080)