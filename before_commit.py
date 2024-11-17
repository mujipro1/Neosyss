import os

def replace_strings_in_files(directory, replacements):
    """
    Recursively replaces strings in all .js or .env files within a directory and its subdirectories,
    excluding directories named 'node_modules'.

    Args:
        directory (str): The root directory to start the search.
        replacements (list): A list of tuples where each tuple is (old_string, new_string).
    """
    for root, dirs, files in os.walk(directory):
        # Skip 'node_modules' directory
        if 'node_modules' in dirs:
            dirs.remove('node_modules')  # Prevent descending into 'node_modules'

        for file in files:
            # Process only .js or .env files
            if file.endswith(('.js', '.env')):
                file_path = os.path.join(root, file)
                
                try:
                    # Read file content
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Replace strings
                    modified_content = content
                    for old_string, new_string in replacements:
                        modified_content = modified_content.replace(new_string, old_string)
                    
                    # Write back the modified content if changes were made
                    if content != modified_content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(modified_content)
                        print(f"Updated: {file_path}")
                except Exception as e:
                    print(f"Failed to process file {file_path}: {e}")

# Example usage
if __name__ == "__main__":
    # Replace strings as per the list of tuples
    replacements_list = [
        ("await fetch('/api/blogs/' + id)", "await fetch('http://localhost:5000/api/blogs/' + id)"),
        ("await axios.get('/api/blogs')", "await axios.get('http://localhost:5000/api/blogs')"),
        ("await axios.post('/api/edit-blog'", "await axios.post('http://localhost:5000/api/edit-blog'"),
        ("await axios.post('/api/create-blog'", "await axios.post('http://localhost:5000/api/create-blog'"),
        ("await axios.post('/api/delete-blog'", "await axios.post('http://localhost:5000/api/delete-blog'"),
        ("await fetch('/api/login'", "await fetch('http://localhost:5000/api/login'"),
        ('await axios.get("/api/blogs")', 'await axios.get("http://localhost:5000/api/blogs")'),
        ("await fetch('/api/contact'", "await fetch('http://localhost:5000/api/contact'"),
        ("# DB_USER=root", "DB_USER=root"),
        ("# DB_PASS=mysqlserver78", "DB_PASS=mysqlserver78"),
        ("DB_USER=root1", "# DB_USER=root1"),
        ("DB_PASS=37g3@UFGHD27mE", "# DB_PASS=37g3@UFGHD27mE"),
    ]
    
    # Specify the directory
    target_directories = ["frontend/src/components","backend" ]
    
    for target_directory in target_directories:
        replace_strings_in_files(target_directory, replacements_list)
