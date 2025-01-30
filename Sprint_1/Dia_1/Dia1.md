06/05/2024

# Day 1: Agile

- Scholarship Program Onboarding Meeting
- Scholarship Program Kick-off Meeting
- Organization
- Git and GitLab
- README

## Organization

#### Eisenhower Matrix

What is it? The Eisenhower Matrix is a time management tool that helps people prioritize their tasks into 4 quadrants based on importance and urgency:

<figure>   <img src="https://3.bp.blogspot.com/-jdBrguSJ1rs/W00Cc_zcTrI/AAAAAAAAfC8/xyDYrqALgJ8IB3qJQCHWRL8CjYVta9qDgCLcBGAs/s1600/3d0deff4-fb45-4f15-8128-4a309803781a-original.jpeg" width="60%"> </figure>

##### What is it for?

The matrix helps people manage their time more efficiently by focusing on the tasks that really matter and eliminating those that are unnecessary or can be postponed.

##### How to build?

1. List all your tasks.
2. Rank each task based on its importance and urgency.
3. Distribute into the corresponding quadrants: important and urgent, important but not urgent, urgent but not important, not important and not urgent.
4. Prioritize tasks according to the quadrants, starting with the important and urgent ones.
5. Schedule important but non-urgent tasks for the future, delegate urgent but non-important tasks, and eliminate or postpone unimportant and non-urgent tasks.

# Git and GitLab

## Git

<figure>   <img src="https://static.javatpoint.com/tutorial/git/images/why-git.png" width="50%"> </figure>

Git is a distributed system for source code version control and collaboration on software development projects. It records all changes made to a project's source code, preventing anything important from getting lost along the way.

It is Opensource, has version control of any type of file, change history and traceability, easy restoration and parallel development, allowing you to create different versions of the same thing and even merge these branches.

**Installation** : First, you need to install Git on your system (https://git-scm.com/downloads).

**Initial setup** : After installing Git, you need to set up your username and email address. This is to know who is making changes and to have access control over the repository:

```
git config --global user.name "nome"
git config --global user.email "seu@email.com"
```

### Main Commands:

1. **git init** : Starts a new Git repository in the current directory, with none, one, or multiple files inside.

2. **git add [filename]** : Adds files to the stage, preparing them for commit.

3. **git add .** or **git add -A** or **git add --all** : Adds **ALL** files to the stage, preparing them for commit.

4. **git status** : Shows the current state of your Git repository, including which files have been modified, which are staged, and which are not being tracked by Git.

5. **git clone** : Clones an existing Git repository to your local directory.

6. **git commit -m " "** : Creates a new commit with the staged files and an associated message.

7. **git diff** : Shows the differences between changes in your working directory and the stage.

8. **git diff --cached** or **git diff --staged** : Shows the differences between changes in staged vs. committed files.

9. **git log** : Shows the commit history of your repository, displaying information such as the commit author, the date and time of the commit, and the associated message.

10. **git branch** : Lists all branches in the local repository.

11. **git branch [branch name]** : Creates the branch.

12. **git checkout** : Switches to the specified branch.

13. **git push** : Pushes local commits to a remote repository.

14. **git pull** : Updates your local repository with changes from the remote repository.

15. **git merge** : Combines the commits from one branch into the current branch.

<figure>   <img src="https://cdn.nulab.com/learn-wp/app/uploads/2022/09/14212531/git_workflow_002.png" width="60%"> </figure>

### Other Commands:

#### Information and settings commands:

- **git --version** : Shows the version of Git installed.
- **git config --list** : Lists all Git configurations.
- **git config --global core.editor "code --wait"** : Sets the default editor for Visual Studio Code.
- **git config --global init.defaultBranch main** : Changes the default name of the main branch to "main".

#### Log viewing commands:

- **git log --oneline** : Shows the hash and message of each commit on one line.
- **git log -N** : Shows the last N commits.
- **git log --stat** : Shows the list of commits and modified files.

#### Commit manipulation commands:

- **git commit --amend** : Allows you to make corrections to a previous commit.
- **git checkout &lt;commit_hash&gt;** : Go back to the project state at a specific commit.
- **git checkout master** : Goes back to the main branch.

#### Branch manipulation commands:

- **git checkout -b &lt;branch_name&gt;** : Creates and switches to a new branch.
- **git checkout -f &lt;branch_name&gt;** : Undoes tracked changes and switches to a branch.
- **git branch -d &lt;branch_name&gt;** : Delete a branch locally.
- **git branch -D &lt;branch_name&gt;** : Forces deletion of a local branch.
- **git branch -m &lt;new_name&gt;** : Renames the branch locally.
- **git branch --no-merged** : Lists unmerged branches.
- **git branch --merged** : Lists the branches that have already been merged.

#### Remote management commands:

- **git remote -v** : Shows remote repository URLs.
- **git remote add origin &lt;repository_URL&gt;** : Adds a remote repository.
- **git remote set-url origin &lt;new_URL&gt;** : Updates the URL of the remote repository.
- **git push --set-upstream origin &lt;branch_name&gt;** : Maps the local branch to the remote repository.
- **git push --delete origin &lt;branch_name&gt;** : Deletes a branch from the remote repository.

#### Merge commands:

- **git merge &lt;branch_name&gt;** : Merges changes from a branch into the current branch.
- **git merge --abort** : Cancel the merge in case of conflicts.

# GitLab 🦊

It is a centralizing platform for Git repositories, allowing you to host public or private projects.

Repositories can be created with a name, description, and view. The README provides information about the repository.

Features like star, observe, fork, and pull request allow you to save and interact with other people's projects. Issues, milestones, and labels help you manage issues and project milestones.

# README

The README is an important file in a repository. It provides essential information about the project to users, helping them understand what the project is about and how to get started using it. Typically, the README includes:

**Title and Description** : A brief description of the project and its purpose.

**Installation and Usage** : Instructions on how to install and use the project.

**Demo** : If possible, code examples or images that demonstrate how the project works.

**Contribution** : Information about how users can contribute to the project, such as rules for pull requests and contribution guidelines.

**License** : The open source license the project uses.

**Support** : Contact information for the project maintainer or links to support channels.