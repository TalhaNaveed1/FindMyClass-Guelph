import math
import pandas
import numpy

def read_data():
    print("Testing read_data")
    file_path = "files/data.csv"
    data_path = pandas.read_csv(file_path)
    data = data_path.values.tolist()
    print(data)

def euclidean_distance(p1,p2):
    print("Euclidean Distance")
    return

def k_nearest_neighbours(data,p,k):
    print("Testing k_nearest_neighbours")
    return


read_data()
