# lerna-ci-cd-example

An example of a package-based monorepo using Lerna, complete with autonomous CI and CD with Github Actions.

See [References](./REFERENCES.md) for resources used to create this example.

---

## Developing

Below are some commands to run for common tasks within the monorepo.

- `lerna run build` - Build all packages
- `lerna run test` - Run all unit tests
- `lerna run lint` - Run all lint tasks

---

## Releasing

- `lerna version` - Bump version of all packages changed since last version
- `lerna publish from-git` - Publish packages marked for release by the most recent version tag

---

## Continuous integration

This repository has automated continuous integration (CI) using GitHub Actions. When a pull request is opened or merged into main, GitHub will run the actions described by [ci.yml](./.github/workflows/ci.yml). These actions will run the unit tests, build, and linter for all packages in the workspace.

---

## One-button deployment

This example also has workflows configured to do the [releasing](#releasing) steps above within GitHub Actions.

Any collaborator on the repository can trigger the "Version" workflow. This workflow uses a GitHub PAT to authenticate, allowing it to push back to the repository and trigger additional workflows.

The "Version" workflow accepts a single input that describes the type of version bump to perform, which it passes directly to [`lerna version`](https://github.com/lerna/lerna/tree/main/libs/commands/version#lerna-version). `lerna version` tags the commit with the new version, updates package.json files, appends to the changelog, and pushes back to the main branch.

Pushing the version tag to the main branch is what triggers the last workflow, "Publish". This workflow uses a NPM automation token to authenticate to npmjs.com, allowing [`lerna publish`](https://github.com/lerna/lerna/tree/main/libs/commands/publish#lerna-publish) to publish the packages to npm.

---

## Security FAQ

**What is stopping anyone from running the "Version" workflow?**

The Version workflow can only be manually triggered by a Collaborator of the repository. However, even if a user would change the workflow trigger in a pull request, there are additional safeguards preventing these unauthorized changes from being pushed to main.

Due to the `main` branch and `v*.*.*` tags being protected in the repository settings, a Personal Access Token (PAT) that can bypass these protections is required. The basic GITHUB_TOKEN provided to all workflows can't bypass these protections. The Version workflow receives the PAT via the GH_PAT secret and uses it to successfully push commits and tags back to main. Secrets are not copied over to forks and will not be provided to workflows triggered by pull requests from forked repositories, so the PAT is safe from unauthorized use. For more details about secrets, see the [encrypted secrets GitHub docs](https://docs.github.com/en/actions/security-guides/encrypted-secrets).

**What is stopping anyone from running the "Publish" workflow?**

In short, the Publish workflow can be modified in a PR just like the Version workflow described above. Similar to the Version workflow, the Publish workflow relies on a secret that is not provided to workflows triggered by PRs from forked repositories. In this case, that secret is the npmjs.com automation token used to authenticate and publish packages. Since this secret is only provided to workflows triggered by collaborators, it is safe from unauthorized use.

---

## Security Summary

> The Version and Publish workflows depend on GitHub secrets, which are only accessible to Collaborators of this repository. Therefore, all Collaborators can release a new version of packages in the repository.
