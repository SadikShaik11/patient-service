# patient-service

Steps to run the service 
Install Node.js: If you haven't already, you'll need to install Node.js on your system. You can download the latest version from the official website: https://nodejs.org/en/download/.

Install dependencies: Once Node.js is installed, navigate to patientService project directory in your terminal or command prompt and run npm install. This will install any dependencies listed in the package.json file.

Set environment variables: If your project relies on environment variables, you'll need to set them before running the project. You can either set them globally or create a .env file in the root directory of your project.

Run the project: Once dependencies are installed, you can run the project by yarn dev

That's it! You should now be able to access your Node.js project by navigating to http://localhost:8009 (or whichever port you've specified ) in your web browser.

********Test the project **********
to get patients : use  curl --location --request GET 'http://localhost:8009/v1/reception/patientsInfo'


to insert patients : curl --location --request POST 'http://localhost:8009/v1/reception/patientsInfo' \
--header 'Content-Type: application/json' \
--data-raw '{
    "patientName":"sadik" ,
    "place": "mumbai",
    "dateOfCall": "feb 2nd 2022",
    "patientProblem":"fever"
}'
************Test ***********
