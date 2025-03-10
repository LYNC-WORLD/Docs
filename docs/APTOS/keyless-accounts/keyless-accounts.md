---
sidebar_label: 'Keyless Accounts'
id: aptos-keyless-accounts
custom_edit_url: null
---
# Keyless Accounts

<span className="text-lg text-[rgb(192,192,192)]">Unlock user engagement and drive adoption with LYNC's gasless transactions, incentivizing users, enhancing their experience, and integrating seamlessly with your game, dApp, or DeFi platform.</span>

Currently, the biggest problem with user onboarding, whether for web2 or web3, is the need to create a wallet and manage a private key. In reality, private keys are often lost (e.g., users forget to write down their mnemonic when setting up their Aptos wallet) or stolen (e.g., users are tricked into revealing their Private Key). This makes the onboarding process unnecessarily difficult and causes users to leave when their accounts are lost or stolen.

The only way to secure non-custodial accounts is by protecting the private key associated with them. Alternatively, using a custodial method means users do not have full control over their funds.

Keyless accounts are a significant innovation in the Aptos ecosystem, making it easier for users to access and use decentralized applications (dApps). 

With LYNC Keyless, users can create and manage an Aptos blockchain account using their existing OpenID Connect (OIDC) accounts, like "Sign in with Google" or "Sign in with Apple," instead of relying on a traditional secret key or mnemonic. 

Essentially, a user's blockchain account becomes their OIDC account. In the future, Keyless will expand to support many Identity Providers (IdPs) that use the OIDC standard, starting with the providers mentioned.

Using the Keyless SDK will make user accounts specific to your dApp.

### How is keyless removing User Onboarding friction

**User-friendliness:**

* **Easy Access:** Blockchain accounts should be backed by user-friendly OIDC accounts, making them simple to access and hard to lose.
* **Walletless Interaction:** Allow users to interact with dApps through their OIDC accounts without needing to install a wallet.
* **Multi-device Accessibility:** Enable users to access their blockchain accounts easily from any device.

**Security:**

* **Strong Security:** Keyless accounts are secure as their underlying OIDC accounts.
* **Account Recovery:** Ensure keyless accounts can be recovered even if the managing application is no longer available.

**Privacy:**

* **Data Protection:** Keyless accounts and their transactions should not reveal any information about the user’s OIDC account, such as email addresses or OAuth identifiers.
* **Activity Anonymity:** OIDC providers (e.g., Google) should not be able to track the user's transaction activity.
* **Unlinkable Accounts:** Keyless accounts managed by different applications for the same user should not be linkable on-chain.

**Efficiency:**
* **Quick Transactions:** Transactions for keyless accounts should be quick to create (less than 1 second) and validate by Aptos validators (less than 2 milliseconds).

**Censorship-resistance:**
* **Fair Treatment:** Aptos validators should not give preferential treatment to OpenID transactions based on the identity of the managing application or user.

**Decentralization:**
* **Independent:** Keyless accounts should not rely on entities that cannot be decentralized.