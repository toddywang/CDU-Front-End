# Ask if you have any questions
=============================================
Q: Does `git pull` automatically pull a new branch from the remote repository?

A:


Q: What will happen when there are multiple branches and I do `git push` in a certain branch?

A: You can use this command `git remote show origin` to show which branch is automatically pushed to when you run git push while on certain branches.

And you can also control the default behavior by setting push.default in your git config. See more at: http://stackoverflow.com/questions/948354/default-behavior-of-git-push-without-a-branch-specified.


Q: What should I do to revise a commit message when the commit was already pushed to a remote repo? 

A: I would not advise you to rewrite public commits - just don't do that. "Public" means it is part of the project's history and public history is not to be re-written. Otherwise, it is not trustworthy.  Although it is technically possible with `git commit --amend` and then `git push --force`.

