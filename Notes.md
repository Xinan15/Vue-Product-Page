# To deploy a Vue website:
1.  Change the Vite config file: base: '/Vue-Product-Page/'
2. npm run build
3. git add dist -f
4. git commit -m "your commit message here"
5. git subtree push --prefix dist origin gh-pages

## To recommit new changes and push up to the remote repository:

1. On remote repository delete the "gh-pages" branch. 
2. npm run build
3. git add dist -f
4. git commit -m "your commit message here"
5. git subtree push --prefix dist origin gh-pages

## Git operations
1. Create a New Branch:<br>
git checkout -b new-branch-name
2. Push the New Branch to GitHub:<br>
git push -u origin new-branch-name
3. Switch to the Target Branch:<br>
git checkout target-branch-name
4. Add Your Changes:<br>
git add .<br>
5. Commit Your Changes:<br>
git commit -m "Your commit message"
6. Push the Changes:<br>
git push origin target-branch-name

## Difference between .js and .vue files for Vue components
Both `.js` and `.vue` files can be used to create Vue components, but they serve different purposes and have different advantages and disadvantages. Here's a breakdown:

### Using `.js` Files for Vue Components

#### Advantages:
- **Flexibility**: Easier to use with JavaScript libraries that may not have Vue-specific bindings.
- **Familiarity**: Those coming from a pure JavaScript background might find this approach more familiar.
  
#### Disadvantages:
- **Readability**: As a component grows, having HTML, JavaScript, and CSS in a single JavaScript string can become hard to manage and read.
- **Tooling**: Less Vue-specific tooling and IDE support, such as template linting, scoped CSS, etc.
- **No Template or Style Scoping**: Unlike `.vue` files, `.js` files don't offer an easy way to scope CSS or use templates.

### Using `.vue` Files for Vue Components

#### Advantages:
- **Single File Components**: `.vue` files encapsulate HTML, JavaScript, and CSS in one file, making components self-contained and easier to manage.
- **Readability**: Having a structured single file makes it easier to understand the component's structure.
- **Scoped Styles**: You can easily scope styles to the component, so they don't leak to other parts of the application.
- **Tooling**: Better support for Vue-specific tooling, like Vue devtools, and IDE support for syntax highlighting and autocompletion.
  
#### Disadvantages:
- **Learning Curve**: Requires learning the structure of `.vue` files, though this is generally easy to grasp.
- **Setup**: Typically requires a build step (e.g., using Vue CLI, Webpack, or Rollup) to compile `.vue` files into JavaScript.

### Which Way is Recommended?

The Vue community generally recommends using `.vue` files for the reasons listed above under its "Advantages" section. The single-file component design is one of the distinctive features of Vue, and it encapsulates template, logic, and styles into a single file, making it easier to manage and maintain. This approach is especially beneficial for larger projects with many components.

However, this isn't a strict rule, and using `.js` files can be suitable for smaller projects or for those who prefer to stick to pure JavaScript for various reasons.

----

This project follows the Youtube tutorial:
<br> https://www.youtube.com/watch?v=bzlFvd0b65c&t=3020s

The source code is from:<br>
https://github.com/Code-Pop/Intro-to-Vue-3