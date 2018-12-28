cd docs/
git config user.name "weechang"
git config user.email "zhangwei_sc@foxmail.com"
git add -A
git commit -m "deploy at `date +\"%Y-%m-%d %H:%M:%S\"`"
git push --force --quiet "https://git.coding.net/weechang93/moreco-doc.git" gh-pages:master
