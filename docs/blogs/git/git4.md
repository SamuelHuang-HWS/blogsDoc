---
lang: zh-CN
title: 更换远程仓库
description: 更换远程仓库
date: 2023-12-06
---

# 更换远程仓库

## 方法一 直接修改远程仓库地址

git remote set-url origin url

## 方法二 删除本地远程仓库地址，然后添加新的仓库地址

git remote rm origin
git remote add origin url