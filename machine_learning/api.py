from selenium import webdriver
from bs4 import BeautifulSoup
from tensorflow.keras.models import load_model
from sklearn.feature_extraction.text import CountVectorizer
import pickle
import flask
import numpy as np
def initialize():
    global driver
    global model
    global cv
    global decoder
    options = webdriver.ChromeOptions()
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--headless')
    options.add_argument("--disable-blink-features=AutomationControlled") 
    options.add_experimental_option("excludeSwitches", ["enable-automation"]) 
    options.add_experimental_option("useAutomationExtension", False)
    driver = webdriver.Chrome(options=options)
    model=load_model('machine_learning/cnn.h5')
    vocab=pickle.load(open('machine_learning/vocab.pkl','rb'))
    cv=CountVectorizer(vocabulary=vocab)
    decoder=pickle.load(open('machine_learning/lable_index.pkl','rb'))
    
def get_data(url):
    driver.get(url)
    driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    data=soup.get_text(strip=True, separator=',')
    data=data.split(',')
    return data
def predict_(data):
    clas=cv.transform(data).toarray()
    clas=model.predict(clas)
    print(clas)
    clas=np.argmax(clas,axis=1)
    clas=clas.tolist()
    dict={'class':clas,'data':data}
    return dict
#convert np array to list
#clas=clas.tolist()
flask_app = flask.Flask(__name__)

@flask_app.route('/predict', methods=['GET'])
def predict():
    #get the url from json
    url = flask.request.json['url']
    #get the data from the url
    data=get_data(url)
    #predict the data
    prediction=predict_(data)
    #return the prediction
    return flask.jsonify(prediction), 200
if __name__ == '__main__':
    initialize()
    flask_app.run(host='0.0.0.0', port=5000, debug=True)

