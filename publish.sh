version=$1

packageJSONPATH="./package.json"

search_string="\"version\": \".*.\""
replace_string="\"version\": \"$version\""
sed -i "" "s+$search_string+$replace_string+" $packageJSONPATH

npm publish

git status
git add .
git commit -m "Update version $version"
git push origin main