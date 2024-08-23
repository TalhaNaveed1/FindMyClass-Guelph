import math
import pandas
import numpy

def read_data():
    # Day of Week: Monday: 0, Sunday: 6
    # Month: January:0, December: 11
    # Traffic Level: Low: 0, Mid: 1, High: 2
    file_path = "files/data.csv"
    data_path = pandas.read_csv(file_path)
    data = data_path.values.tolist()
    # print(data)
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
    
    for dist in EC_distances:
        print(dist)
    print('\n')
    EC_distances.sort(key=lambda x: x[0])
    for dist in EC_distances:
        print(dist)


myData = read_data()
test = [8,0,0]
k = 3
k_nearest_neighbours(myData,test,k)

