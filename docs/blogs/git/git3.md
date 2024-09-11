---
lang: zh-CN
title: 删除分支
description: 删除分支
date: 2023-12-06
---

## 删除远程远程
* git push origin --delete feature (feature为远程分支名)

## 删除本地分支
* git branch -d feature (feature为本地分支名，如果本地分支有未合并的更改，无法删除)
* git branch -D feature (feature为本地分支名，强制删除即使有未合并的更改)
