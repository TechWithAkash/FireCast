

# FireCast 🔥

FireCast is a web application designed to provide accurate predictions for forest fire occurrences in the Begai region of Algeria. Leveraging the first Algerian forest fires dataset, FireCast employs machine learning algorithms to forecast forest fire occurrences based on meteorological observations and Fire Weather Index (FWI) system components.

## Abstract

The first Algerian forest fires dataset comprises data on forest fire occurrences in Algeria, closely tied to meteorological observations and the Fire Weather Index (FWI) system components. Mainly consisting of daily meteorological observations, this dataset serves as a valuable resource for researchers exploring the application of machine learning algorithms for forest fire prediction in Algeria.

Given the scarcity of publicly available datasets on forest fire occurrences in Algeria, this dataset was created to investigate the feasibility of employing machine learning models for forest fire prediction within the Algerian context. Its availability in several repositories for research makes it an essential tool for researchers working on forest fire forecasting and monitoring systems, not only in Algeria but also in Mediterranean countries with similar climates.

The dataset was initially compiled in 2018 and was first contributed to the UCI online repository in October 2019.

## Features

- **FWI Prediction**: Users can input daily meteorological observations, including temperature, relative humidity, wind speed, FFMC, DMC, ISI, Classes, and Region, to predict the Fire Weather Index (FWI) for the region.
- **Real-time Weather Data**: Access up-to-date information on temperature, humidity, and wind speed.
- **Precipitation Forecasting**: Get accurate predictions on rainfall levels and patterns.
- **Historical Fire Occurrence Analysis**: Explore historical data and trends to better understand forest fire patterns in the region.

## Usage

1. Clone the repository: `git clone (https://github.com/TechWithAkash/FireCast.git)`
2. Install dependencies: `pip install -r requirements.txt`
3. Run the Flask application: `python app.py`
4. Open your web browser and go to `http://localhost:5001` to access the application.

## Technologies Used

- **Python**: Backend development and machine learning model training.
- **Flask**: Web framework for building the application.
- **HTML/CSS**: Frontend development for user interface.
- **JavaScript**: Enhancing user interaction and functionality.
- **Machine Learning**: Utilized for forest fire prediction using meteorological data.
- **Pickle**: Serialization and deserialization of machine learning models.
- **Scikit-learn**: Used for data preprocessing and machine learning model training.
- **Matplotlib/Seaborn**: Plotting library for generating visualizations.
- **Git**: Version control and collaboration.

## Example Visualizations

![Temperature vs. Fire Occurrence](./images/temperature_vs_fire.png)
*Figure 1: Relationship between temperature and forest fire occurrence*

![FWI Distribution](./images/fwi_distribution.png)
*Figure 2: Distribution of Fire Weather Index (FWI) values*

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests to help improve this project.

## About

This project was created as part of a research initiative to study the feasibility of using machine learning algorithms for forest fire prediction in Algeria. It aims to provide valuable insights and accurate forest fire forecasting services for researchers, forest management agencies, and communities in the region.


