#!/bin/bash

# miss the message
if [ $# -lt  1 ]; then
    echo "$0 error，缺少注释信息"
    exit 1
fi

echo -e "######### start to commit..."
date +"%Y-%m-%d %H:%M.%S"

# deploy
yarn docs:build
if [ $? -ne 0 ]; then
    echo "Build failed"
    exit 1
fi

# execute git add .
msg="$1"
git add .

# execute git commit
git commit -m "$msg"
if [ $? -ne 0 ]; then
    echo "Commit failed"
    exit 1
fi

# execute git push
git push origin master
if [ $? -ne 0 ]; then
    echo "Push failed"
fi

echo -e "######### committed..."
