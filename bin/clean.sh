#!/bin/bash

echo "Running clean.sh..."

# Specify the source folder
first_source_folder="client/src/out"
second_source_folder="remotion/public"
third_source_folder="uploads"

# Specify the destination folder
destination_folder="old-data"

# Move all files from the source folder to the destination folder
mv "$third_source_folder"/* "$destination_folder"
#mv "$first_source_folder"/* "$destination_folder"
find "$second_source_folder" -maxdepth 1 -type f -iname "*.mp4" -exec mv {} "$destination_folder" \;

echo "Completed clean.sh"
