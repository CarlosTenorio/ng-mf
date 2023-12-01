# Module Federation Workshop

## ⚙️Serve apps

```
nx serve <app-name>
```

## 🚀Build apps

```
nx build <app-name>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

# 🧪Labs

## Lab 1: Load remotely at _host_ the _same-version_ Standalone Component by routes with possibility to change the path in runtime (Use @angular-architects/module-federation)

Help: [Angular Architects tutorial](https://www.angulararchitects.io/en/blog/dynamic-module-federation-with-angular/)

### Steps

- (Host) Adapt webpack.config.ts to share libraries
- (Host) Create manifest to load in runtime json file.
- (Host) Load manifest at main.ts
- (Same-version) Adapt webpack.config.ts exposing Standalone component and sharing libraries
- (Host) Add new route to load Standalone component --> Use the _loadRemoteModule_ function

## Lab 2: Create an Admin Module at same version app. Then, load remotely at _host_ the _same-version_ AdminModule with possibility to change the path in runtime. (Use @angular-architects/module-federation)

Help: [Angular Architects tutorial](https://www.angulararchitects.io/en/blog/module-federation-with-angulars-standalone-components/)

### Steps

- (Same-version) Create Admin Module.
- (Same-version) Expose the new admin module to be consumed remotely.
- (Host) Add new route to load Admin module --> Use the _loadRemoteModule_ function.

## Lab 3: Create a web component wrap for the _other-version_ app. Then, load remotely at _host_ the _other-version_ web component. (Use @angular-architects/module-federation)

Help: [Angular Architects tutorial](https://www.angulararchitects.io/en/blog/multi-framework-and-version-micro-frontends-with-module-federation-your-4-steps-guide/)

### Steps

- (Other-version) Create new module to be loaded as web component.
- (Other-version) Create with angular elements the web component.
- (Other-version) Adapt webpack.config.ts exposing web component.
- (Other-version) Change bootstrap function on bootstrap.ts
- (Host) Change bootstrap function on bootstrap.ts
