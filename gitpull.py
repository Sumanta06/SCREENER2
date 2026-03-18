import subprocess

def sync_git():
    try:
        # Step 1: Fetch and Pull remote changes
        print("Fetching and pulling remote changes...")
        subprocess.run(["git", "pull", "origin", "main"], check=True)
        
        # Step 2: Push your local commit
        print("Pushing local commits to remote...")
        subprocess.run(["git", "push", "origin", "main"], check=True)
        
        print("Success! Your repository is now in sync.")
        
    except subprocess.CalledProcessError as e:
        print(f"Error occurred: {e}")
        print("Hint: If there are merge conflicts, you must resolve them manually in your files.")

if __name__ == "__main__":
    sync_git()