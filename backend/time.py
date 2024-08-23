import math
import pandas
import numpy

def read_data():
    # Day of Week: Monday: 0, Sunday: 6
    # Month: January:0, December: 11
    # Traffic Level: Low: 0, Mid: 1, High: 2
    print("Testing read_data")
    file_path = "files/data.csv"
    data_path = pandas.read_csv(file_path)
    data = data_path.values.tolist()
    # print(data)
    return data

def euclidean_distance(p1,p2):
    print("Euclidean Distance")
    EC_distance = 0
    for index in range(len(p1) - 2):
        EC_distance += (p1[index] - p2[index]) ** 2
    
    return math.sqrt(EC_distance)
    

def k_nearest_neighbours(data,p,k):
    print("Testing k_nearest_neighbours")
    return


myData = read_data()
myEuclideanDistance = euclidean_distance(myData[0],myData[1])
print(myEuclideanDistance)
