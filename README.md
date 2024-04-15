# TutorAI

## Dependencies
Python

## Setup Instructions for Windows
Create venv:
`py -3 -m venv .venv`

Activate venv:
`.venv\Scripts\activate`

Install Flask:
`pip install flask`

Install replicate:
`pip install replicate`

Authenticate by setting your token in an environment variable:
Linux: `export REPLICATE_API_TOKEN=<paste-your-token-here>`
Windows: `set REPLICATE_API_TOKEN=<paste-your-token-here>`

Install boto3 for Amazon S3:
`pip install boto3`

Run Application:
`python -m flask --app app run`

Run Application (Alternative):
`flask --app app run`

## Other Helpful Resources
https://flask.palletsprojects.com/en/3.0.x/installation/