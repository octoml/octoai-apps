# OctoAI Demo Design System 🐙

The core design system for OctoAI Demos. This is used as a local package for all demos in the `examples` directory.

## Getting Started

Clone the repo

```bash
git clone https://github.com/octoml/octoai-apps.git
```

Navigate to the design system folder

```bash
cd cd octoai-apps/design-system
```

Install dependencies

```bash
yarn
```

Start the dev server

```bash
yarn dev
```

Start the Storybook dev server

```bash
yarn storybook
```

## Building styles

To build out styles, run `yarn build:styles`. This will update the package output for all demos in the `/examples` directory.

## Contributing 👨🏽‍💻

**Commit Format** Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format for commit messages:

```vim
<type>(<scope>): <message>
```

where <type> is the change type (e.g., feat, fix), <scope> (optional) specifies the change's scope, and <message> briefly describes the change.

All commit messages are linted using [Husky](https://typicode.github.io/husky/) pre-commit.
