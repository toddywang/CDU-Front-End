# Useful *nix tricks

## Commands

### General Useful Commands

Put running process to background: `Ctrl+Z`

Put process back to foreground to continue work: `fg`

Find string or regexp pattern in files: `grep -r 'some_string' path/to/files`

Find files by name: `find . -name '*.py'`

Count how many words, lines and characters a file has: `wc`

eg. `wc -l abc.txt` will output how many lines there are in `abc.txt`

Replace or translate characters: `tr`

eg. `tr "[:lower:]" "[:upper:]" < filename`

Replace strings in file based on regexp: `sed`

eg. `sed -i 's/find/replace/g' filename`

Make shortcut for files: `ln -s filename aliasname`

Check disk mounts and remaining disk space: `df -h`

Check file space usage for a directory: `du -h {{directory}}`

Or even better: use [`ncdu`](https://dev.yorhel.nl/ncdu)

### SSH

How to generate SSH key-pair: `ssh-keygen`

How to copy your public key to server: `ssh-copy-id username@server`

How to correctly SSH: `ssh -i id_rsa.key username@server`

How to save yourself from typing long SSH commands - create a file `~/.ssh/config` with 400 permission, content as follows:

```
Host myserver
    User ubuntu
    HostName 8.8.8.8
    IdentityFile ~/.ssh/MyPrivateKey.pem
```

After this, you can connect to your server by simply typing: `ssh myserver`

How to copy files between two computers via SSH: `scp filename username@server1.com:/some/dir/`

How to use SSH as tunneling proxy: `ssh -N -D 1234 server_name`  (Useful for **you-know** purpose)

Note: SSH private key permission must not be worldly readable (400 is prefered), otherwise the server will usually refuse it.

## Word of advice

Life is short. So:

- If you find yourself doing the same thing again and again - AUTOMATE it!
- Tired of reading extra long `man` " pages"? Install [tl;dr](https://github.com/tldr-pages/tldr) might help. TL;DL == "Too Long; Didn't read"
- Tired of typing long `cd` like `cd /apps/apache2/sites/mysite/htdocs/sites/all/themes/custom/`? There is a tool called [z](https://github.com/rupa/z) that you can simply use like `z custom`. It will put you there.
- Cool people use `Zsh`, `Vim`/`Emacs`, and `tmux`.

Please act responsibly. So:

- Do not upload your SSH key and any sensitive information to GitHub
- Do not set global write permissions using `chmod`.
- Do not `rm -rf ./`. As you might accidently add a space between `.` and `/`. The world as you know it might cease to exist. Please always use `rm -rf SOME_SPECIFIC_DIRECTORY_NAME`.
