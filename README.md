# create-icp-evm-bridge

A CLI tool to quickly scaffold ICP-EVM projects that are utilizing chain fusion using either [ic-alloy](https://github.com/ic-alloy/ic-alloy) or [ic-evm-utils](https://crates.io/crates/ic-evm-utils) packages.

## Features

- Quick project setup
- Automated dependency installation
- Ready-to-use chain fusion templates

## Installation & Usage

Create a new chain fusion project using:

```bash
npx create-icp-evm-bridge <project_name> [ic-alloy|ic-evm-utils]
``` 

The second parameter is optional and defaults to ic-evm-utils if not specified.

## Options:
- ``ic-alloy``: Uses the [ic-alloy](https://github.com/ic-alloy/ic-alloy) implementation
- ``ic-evm-utils``: Uses the [ic-evm-utils](https://crates.io/crates/ic-evm-utils) implementation (default)

## Project Structure: 
After running the command, your project will be set up with:
- Rust canister code
- Bridge implementation
- Configuration files
- Deployment scripts

## Requirements
- Node.js 14 or higher
- Rust and Cargo
- DFX CLI
- Git
 
[GitHub repo](https://github.com/Stephen-Kimoi/icp-evm-rust-bridge?tab=readme-ov-file#icp-evm-integration-starter-template)