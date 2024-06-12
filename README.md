A Mini CRM Application with  - 

Data ingestion
● Create APIs to ingest data into customer and orders database
● Show with postman how you are hitting those APIs and data is getting ingested in the tables

Send campaign - 
● Customers with total spends > INR 10000
● Customers with total spends > INR 10000 AND max number of visits are 3
● Customers not visited in last 3 months
● User of this web application should add multiple rules on different available fields and be able to do AND/OR between them - before saving the audience, they should be able to click a button and check audience size
● Upon saving the audience step B should happen and the user should be taken to a screen with a list of campaigns sent in the past with the latest campaign on top
● Have simple google based authentication for this web application        
For created audience store it in a table called communications_log 
The Delivery Receipt API should update the status of communication log entry as
SENT/FAILED as sent by the Vendor API

Preferred Tech Stack to use:
● React.js for the frontend application
● Node.js for the backend code
● MongoDb as the database
