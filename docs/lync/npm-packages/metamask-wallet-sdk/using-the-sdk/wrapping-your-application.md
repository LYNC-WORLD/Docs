---
sidebar_label: "Wrapping your application with the LYNCMetaMaskProvider"
id: metamask-wallet-sdk-using-the-sdk-wrapping-your-application
custom_edit_url: null
---

# Wrapping your application with the `LYNCMetaMaskProvider`

Your entire application should be wrapped inside the `LYNCMetaMaskProvider` to utilize the hooks and components provided by the SDK.

Example: Here's an example of how to wrap your application with `LYNCMetaMaskProvider`:

```tsx
// main.tsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Importing `index.css` is important if you wish to use the components
// provided by the SDK. This file contains necessary styling for the
// components provided by the SDK
import "lync-wallet-sdk/build/index.css";

import "./index.css";
import App from "./app";
import LYNCMetaMaskProvider from "lync-wallet-sdk";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LYNCMetaMaskProvider autoConnect>
      <App />
    </LYNCMetaMaskProvider>
  </StrictMode>
);
```

The `autoConnect` prop passed to `LYNCMetaMaskProvider` can be used to automatically connect your dapp with metamask wallet on the very first load of your dapp. The SDK will automatically try to connect with metamask wallet if `autoConnect` is `true`.

> **NOTE:**
>
> Importing `"lync-wallet-sdk/build/index.css"` is important if you wish to use the components provided by the SDK. This file contains necessary styling for the components provided by the SDK.
