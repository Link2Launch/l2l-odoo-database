release: chmod u+x start_server_heroku.sh && ./start_server_heroku.sh
web: odooku --database-maxconn 20 --redis-maxconn 10 wsgi $PORT --cron --proxy-mode