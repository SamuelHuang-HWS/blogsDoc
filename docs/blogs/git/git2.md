---
lang: zh-CN
title: 将远程分支拉到本地
description: 将远程分支拉到本地
date: 2023-12-06
---

## 第一步
* 如果是新建的文件夹，需要git init， 然后与origin master建立连接 git remote add origin xxx, xxx 为git地址

* 或者使用 git clone xxx, xxx为git地址

## 第二步
将远程分支拉到本地
git fetch origin develop (develop为远程分支名)

## 第三步
在本地创建分支并切换到该分支
git checkout -b develop origin/develop

## 第四步
将远程分支内容拉取到本地
git pull origin develop (develop为远程分支名)