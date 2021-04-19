# COMMANDS 

'''
**git init**: Transform the current directory into a git repository

**git status**: shows the current state of your Git working directory and staging area

**git add <filename>**: Puts that file into the staging area

**git commit -m “Your message for the commit”**: captures a snapshot of the project’s currently staged changes

**git log**: helps to list the commits in reverse chronological order

**git diff**: helps to show changes between commits and working tree

**git clone https://github.com/SOME NAME.git**: helps to copy a specific repository

git remote helps to maintain connections with other repositories
   **- git remote -v**
    **- git remote add origin https://github.com/SOME OTHER NAME.git**

git push uploads your local branches to the corresponding remote branches
    **- git push origin**
    **- git push origin master**

git pull updates your local working branches from the corresponding remote branches
    **- git pull origin**
    **- git pull origin master**

git reset helps to undo repository to any particular state present in the history of the repository
    **- git reset --soft**: Resetting repository to a given commit and adds all the changes to the staging area
    **- git reset --hard**:  Resetting repository to a given commit and deleting all the changes

**git branch**: operates branching operations such as list, delete and creates branches in the repository

**git checkout feature-1**: helps to switch between branches

'''