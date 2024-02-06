# Getting Started

After installation, we can start to import dependencies

## Running the test

This simple test can be run from the command line.

```sh
yarn run test
```

The below result shows that the test has been successfully completed.

```sh
yarn run v1.22.21
$ mocha --recursive --timeout 60000

  Home Page
    ✔ Internet Plans dedicated page (10108ms)
    ✔ Voucher Feature (1397ms)

  User Profile
    ✔ Accept GDPR (1184ms)
    ✔ Open User Page and switch the language to French (8052ms)

  4 passing (3s)

✨  Done in 3.79s.
```