---
sidebar_label: 'Getting Started'
id: movement-social-login-getting-started
custom_edit_url: null
---

# Getting Started

## Pre Requisites
Before you begin integrating Movement Social Login SDK, make sure you have the following prerequisites:

* ```Node.js (version 20 or above)``` installed on your system.
* ```NPM (version 10 or above)``` or ```Yarn (latest version)``` installed on your system.

## Integration

### Adding Access Token

To authenticate with our private NPM registry, you will need to add an ```access token```. You need to configure your ```.npmrc``` file to include the credentials. Follow these steps to add the token for installing our private NPM registry:

* **Locate or Create ```.npmrc```:** Navigate to your project's root directory and locate the ```.npmrc``` file. If it doesn't exist, create one in the root directory of your project (at the same level as the ```package.json``` file).

* **Add Auth Token:** Add the access token and scope name to the ```.npmrc``` file using the following format:

```npmrc title=".npmrc"
//registry.npmjs.org/:_authToken=YOUR_ACCESS_TOKEN
@lyncworld:registry=https://registry.npmjs.org/
```


* Replace ```YOUR_ACCESS_TOKEN``` with the actual access token you get from us.
* Save the Changes: Save the ```.npmrc``` file.

### Installing the Package
Once you've configured your ```.npmrc``` file with the access token, you can install the package using either ```NPM``` or ```Yarn```. Follow these steps:

1. Open your terminal.
2. Navigate to your project's directory.
3. Run the following command:

```bash
npm install --save @lyncworld/movement-social-login-sdk
```
or
```bash
yarn add @lyncworld/movement-social-login-sdk
```

Congratulations! You have successfully integrated ```@lyncworld/movement-social-login-sdk``` into your project. If you encounter any issues or have any questions, feel free to reach out to our support team for assistance.