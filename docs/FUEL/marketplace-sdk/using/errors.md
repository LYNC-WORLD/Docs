---
sidebar_label: 'Error codes for the SDK'
id: fuel-marketplace-sdk-using-errors
custom_edit_url: null
---

# Error codes for the SDK

The various hooks, services, and functions provided by the SDK can return different error codes in case of an error. Here is the list of error codes that you can expect from the SDK:

```typescript
enum MarketplaceErrorCodes {
  InsufficientBalance = 'InsufficientBalance',
  InvalidArgumentsError = 'InvalidArgumentsError',
  InvalidNetworkArgument = 'InvalidNetworkArgument',
  NetworkRequestError = 'NetworkRequestError',
  PropertyUndefinedError = 'PropertyUndefinedError',
  ServerError = 'ServerError',
}
```


* ```InsufficientBalance``` - The wallet does not have enough balance to perform the action.
* ```InvalidArgumentsError``` - The arguments provided to a function are invalid or undefined.
* ```InvalidNetworkArgument``` - The network argument provided to a function is invalid.
* ```NetworkRequestError``` - There was an error thrown while making a http network request.
* ```PropertyUndefinedError``` - A required property is undefined or not det properly for a class.
* ```ServerError``` - There was an error thrown by the internal functions call in the SDK.
