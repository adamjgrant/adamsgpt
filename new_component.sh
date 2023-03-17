#!/bin/zsh
echo Enter name of component
read component_name

mkdir components/$component_name

echo "import Component from \"../../mozart.js\";\n\nlet ${component_name} = new Component(\"${component_name}\");\n\nexport default ${component_name};" > components/$component_name/$component_name.js
echo "[data-component~='${component_name}'] {\n\n}" > components/$component_name/$component_name.css

# Add component to array.
sed "s/<\!\-\- Components \-\->/<\!\-\- Components \-\->\n\n    <\!\-\- ${component_name} \-\->\n    <script type=\"module\" src=\"\.\/components\/${component_name}\/${component_name}.js\"><\/script>\n    <link rel=\"stylesheet\" href=\".\/components\/${component_name}\/${component_name}.css\" \/>/" index.html | tee index.html > /dev/null

echo "${component_name} created."