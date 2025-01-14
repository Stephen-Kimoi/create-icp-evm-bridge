#!/usr/bin/env node

import { execSync } from 'child_process';

const projectName = process.argv[2];
const packageChoice = process.argv[3] || 'ic-evm-utils'; // Default to ic-evm-utils if not specified

if (!projectName) {
    console.error('\x1b[31m❌ Please provide a project name: npx create-icp-evm-bridge my-project [ic-alloy|ic-evm-utils]\x1b[0m');
    process.exit(1);
}

if (packageChoice !== 'ic-alloy' && packageChoice !== 'ic-evm-utils') {
    console.error('\x1b[31m❌ Invalid package choice. Use either "ic-alloy" or "ic-evm-utils"\x1b[0m');
    process.exit(1);
}

const branch = packageChoice === 'ic-alloy' ? 'ic-alloy' : 'ic-evm-utils';

execSync(
    `bash -c "$(curl -fsSL https://raw.githubusercontent.com/Stephen-Kimoi/icp-evm-rust-bridge/${branch}/install_and_deploy.sh)" -- ${projectName} ${packageChoice}`,
    { stdio: 'inherit' }
);