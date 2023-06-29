#!/bin/bash

echo "Running script.sh..."
# Destination directory
destination_dir="remotion/public"

# Counter for renaming files
counter=1

# Iterate over the passed file names
for file in "$@"; do
  # Generate the new file name
  new_name="video-$counter.mp4"
  
  # Move the file to the destination directory and rename it
  mv "uploads/$file" "$destination_dir/$new_name"
  echo "Moved: uploads/$file to $destination_dir/$new_name"
  
  # Increment the counter
  ((counter++))
done


cd remotion

current_dir=$(pwd)

log_file="render_log.txt"

npx remotion render src/index.ts PumpItUpTemplate ../client/src/out/video.mp4 > "$log_file" 2>&1

echo "Render completed. Check $log_file for output and errors."

echo "Completed script.sh"
