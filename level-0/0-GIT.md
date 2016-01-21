# Git Basics

## Basic git commands

Clone a repo: `git clone git@github.com:hellocreep/front-end-training.git`

Pull data from server: `git pull` == `git fetch` + `git merge`, additionally you can use `git pull --rebase`

Add all changes to staging area: `git add -A` == `git add .` + `git rm {{REMOVED FILES}}`

Commit changes: `git commit -m '[Doge & Nyan Cat][ISSUE-10086] Fix "rm -rf /" in makefile'`

Push changes back to remote git repo: `git push {{remote_name}} {{remote_branch}}` i.e. `git push origin master`

## Wait, I did something wrong ...

Undo a Public Change (The change is already pushed to remote repo):
```
git revert <SHA>
```

Undo uncommitted local change:
```
git checkout -- <bad filename>
```

Undo committed local change:
```
git reset --hard <last good SHA>
```

How to revert my "git reset --hard" command:
```
git reflog
```
And then `git reset` to correct version

## Git Methodology

Everything is local.
Git is generally designed for small and text files. (Not large binary files)
Most importantly: commit often. You can squash commits later.

## Git Workflows

Centralized workflow: everyone works on master or dev branch. Suitable for: small familiar team without a lot of activities on the repo

Feature Branch workflow: `git checkout -b {{feature_branch}}` to create a new feature branch. Work on the feature. After finish, merge the branch back to the main development branch.

Forking workflow: You create your own fork of the original repo. You make your changes in your own repo. And send a pull request from your repo to the main repo.

Git Flow: 
![Gitflow](https://www.atlassian.com/git/images/tutorials/collaborating/comparing-workflows/gitflow-workflow/05.svg)
Be careful, Gitflow tends to encourage long-lived feature branches, which is harmful to continous integration practices. See reference material.

Note: For some repos you will see a "dev" branch. That usually means this branch is where you should merge your changes into. After the changes are in "dev" branch it will probably trigger some CI pipeline to test your changes before changes can be merged to "master". And the "master" branch corresponds to production, so you should not merge your changes directly to "master".

## Reference Material

[How to undo almost anything in Git](https://github.com/blog/2019-how-to-undo-almost-anything-with-git)

[Git Game](http://pcottle.github.io/learnGitBranching/)

[Git Workflows and Tutorials](https://www.atlassian.com/git/tutorials/comparing-workflows/)

[Gitflow on hold on ThoughtWorks Tech Rader](https://www.thoughtworks.com/radar/techniques/gitflow)

