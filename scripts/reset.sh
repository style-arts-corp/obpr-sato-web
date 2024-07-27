#!/bin/zsh
repository_path=$(pwd)
rm -rf "$repository_path/node_modules"
rm -rf "$repository_path/pnpm-lock.yaml"
rm -rf $(pnpm store path)
pnpm install