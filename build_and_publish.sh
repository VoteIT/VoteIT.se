#!/bin/bash
echo "Only builds a generic nginx container. "
echo "Create a volume targeted at /app/public_html"
docker build . -t voteit/static_nginx:latest
docker push voteit/static_nginx:latest
