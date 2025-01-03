#!/usr/bin/env node
import { execSync } from 'child_process';
const projectName = process.argv[2];

if (!projectName) {
  console.error('\x1b[31m❌ Please provide a project name: npx create-icp-evm-bridge my-project\x1b[0m');
  process.exit(1);
}

execSync(`bash -c "$(curl -fsSL https://raw.githubusercontent.com/Stephen-Kimoi/icp-evm-rust-bridge/main/install_and_deploy.sh)" -- ${projectName}`, {stdio: 'inherit'});