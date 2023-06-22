#!/bin/bash

# Destination directory
destination_dir="src/assets"

# Counter for renaming files
counter=1

# Iterate over the passed file names
for file in "$@"; do
  # Generate the new file name
  new_name="video-$counter.mp4"
  
  # Move the file to the destination directory and rename it
  #mv "uploads/$file" "$destination_dir/$new_name"
  echo "Moved: uploads/$file to $destination_dir/$new_name"
  
  # Increment the counter
  ((counter++))
done

current_dir=$(pwd)
cd remotion

echo "Running Command In: $current_dir"

log_file="render_log.txt"

echo "Executing render command..."
echo "Command output and errors will be logged in $log_file"

npx remotion render src/index.ts PumpItUpTemplate out/video.mp4 > "$log_file" 2>&1

echo "Render completed. Check $log_file for output and errors."

echo "Completed script.sh"
exit 0
