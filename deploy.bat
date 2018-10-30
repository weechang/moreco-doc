cd docs/
git config user.name "weechang93"
git config user.email "zhangwei_sc@foxmail.com"
git add -A
git commit -m "deploy at `date +\"%Y-%m-%d %H:%M:%S\"`"
git push --force --quiet "https://weechang93:${CI_TOKEN_CODING}@git.coding.net/weechang93/moreco-doc.git" master:master