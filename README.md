# lerna-ci-cd-example

An example of a package-based monorepo using Lerna, complete with autonomous CI and CD with Github Actions.

## Contributing

Below are some commands to run for common tasks within the monorepo.

- `lerna run build` - Build all packages
- `lerna run test` - Run all unit tests

### Requires Elevated privileges

- `lerna version` - Bump version of all packages changed since last version
- `lerna publish from-git` - Publish packages marked for release by the most recent version tag

## References

See [References](./REFERENCES.md) for resources used to create this example.
