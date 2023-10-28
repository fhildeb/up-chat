# up-chat

Social Chat Tool for Universal Profiles.

## Description

This is a minimal framework for a decentralized chat application using the [`dm3`](https://github.com/corpus-io/dm3) messaging protocol.

![App Showcase](/img/app_showcase.png)

## Development

This app is only running by adding a custom library.

### Integration

1. Clone and modify the [`dm3`](https://github.com/corpus-io/dm3) protocol library

   ```sh
   git clone git@github.com:corpus-io/dm3.git
   ```

2. Build and link the customized interface

   ```sh
   npm build && cd packages/react && npm link
   ```

3. Import the library from the created system link

   ```sh
   npm link dm3-react
   ```

4. Run or build the application from source files

### Interactive Mode

Runs the browser application on the [`localhost`](http://localhost:3000) address.

```sh
npm start
```

### Production

Builds the optimized application bundle for production.

```sh
npm run build
```
