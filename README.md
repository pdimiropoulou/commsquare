# Commsquare challenge

## Introduction

This solution provides read only endpoints for KPIs metrics . For this challenge a postgres database with sample data has been created in https://api.elephantsql.com/.

## Run solution

Open project folder and type the following commands:

`npm install`

`npm start`

A web server will start at http://localhost:8080.

### Sample Data
Sample data have been created using sequilize seeders.

## API

## Get KPI1 metrics
`GET /api/kpi1`
### Request
    curl --location --request GET 'http://localhost:8080/api/kpi1'

### Query Parameters
The following query parameters can be used for this endpoint:
* service_id: Response will provide records for the specific service_id
* interval_start_timestamp: Response will provide records that have greater than or equals to the provided interval start timestamp
* interval_end_timestamp: Response will provide records that have greater than or equals to the provided interval start timestamp
* limit: In case of many records limit parameter can be used as a pagination indicator

A sample url with all query parameters could be 

    curl --location --request GET 'http://localhost:8080/api/kpi1?service_id=1&interval_start_timestamp=1584139188&interval_end_timestamp=1684139300&limit=2'

### Response
Returns array of KPI1 objects 

    [
        {
            "id": 1,
            "interval_start_timestamp": "1684139188",
            "interval_end_timestamp": "1684139190",
            "service_id": 1,
            "total_bytes": 150,
            "interval": "5min",
            "createdAt": "2023-05-15T10:27:58.070Z",
            "updatedAt": "2023-05-15T10:27:58.070Z"
        },
        {
            "id": 2,
            "interval_start_timestamp": "1684139205",
            "interval_end_timestamp": "1684139302",
            "service_id": 2,
            "total_bytes": 208,
            "interval": "1hour",
            "createdAt": "2023-05-15T10:27:58.070Z",
            "updatedAt": "2023-05-15T10:27:58.070Z"
        }
    ]

## Get KPI2 metrics
`GET /api/kpi2`
### Request
    curl --location --request GET 'http://localhost:8080/api/kpi2'

### Query Parameters
The following query parameters can be used for this endpoint:
* cell_id: Response will provide records for the specific cell_id
* interval_start_timestamp: Response will provide records that have greater than or equals to the provided interval start timestamp
* interval_end_timestamp: Response will provide records that have greater than or equals to the provided interval start timestamp
* limit: In case of many records limit parameter can be used as a pagination indicator

A sample url with all query parameters could be 

    curl --location --request GET 'http://localhost:8080/api/kpi2?cell_id=1&interval_start_timestamp=1584139188&interval_end_timestamp=1684139300&limit=2'

### Response
Returns array of KPI2 objects 

    [
        {
            "id": 1,
            "interval_start_timestamp": "1684139188",
            "interval_end_timestamp": "1684139190",
            "cell_id": 1,
            "number_of_unique_users": 10,
            "interval": "5min",
            "createdAt": "2023-05-15T10:27:58.160Z",
            "updatedAt": "2023-05-15T10:27:58.160Z"
        },
        {
            "id": 2,
            "interval_start_timestamp": "1684139205",
            "interval_end_timestamp": "1684139302",
            "cell_id": 2,
            "number_of_unique_users": 20,
            "interval": "1hour",
            "createdAt": "2023-05-15T10:27:58.160Z",
            "updatedAt": "2023-05-15T10:27:58.160Z"
        }
    ]
