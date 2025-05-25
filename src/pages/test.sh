#!/bin/bash

# Create the page-level components structure
mkdir -p ./{Home,EventDetails,SeatSelection,Checkout,Dashboard,Admin}

# Function to create component files with basic content
create_component() {
  local component_name=$1
  local file_path="./${component_name}/${component_name}.tsx"
  local css_file="./${component_name}/${component_name}.css"
  
  # Create the component file with content
  cat > "$file_path" <<EOL
import styles from './${component_name}.css';

function ${component_name}() {
  return (
    <>
      ${component_name}
    </>
  );
}

export default ${component_name};
EOL

  # Create an empty SCSS module file
  touch "$css_file"
}

# Create all components
create_component "Home"
create_component "EventDetails"
create_component "SeatSelection"
create_component "Checkout"
create_component "Dashboard"
create_component "Admin"

echo "React component structure with basic content created successfully!"
