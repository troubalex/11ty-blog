#!/usr/bin/ruby

require 'date'

$file_name = ARGV[0]
$creation_date = Time.now.strftime("%Y-%m-%d")

Dir.chdir "posts"

File.open("#{$creation_date}-#{$file_name}.md", "w+") do |f|
  f.write("---
title:
permalink: /posts/
description: ''
date: #{$creation_date}
social_image: /img/
tags:
  -
---")
end