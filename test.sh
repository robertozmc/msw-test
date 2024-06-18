#!/bin/bash

docker-compose \
    -f docker-compose.yml \
    -p "msw_test" up \
    --abort-on-container-exit \
    --exit-code-from msw_test
