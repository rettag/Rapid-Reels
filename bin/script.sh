#!/bin/bash

# Destination directory
destination_dir="client/src/remotion-videos"

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



echo "Completed script.sh
exit 0
