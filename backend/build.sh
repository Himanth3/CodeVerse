#!/usr/bin/env bash
# exit on error
set -o errexit

# Change directory to the implementation folder (backend)
cd "$(dirname "$0")"

pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py migrate
