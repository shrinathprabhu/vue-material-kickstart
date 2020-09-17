# Better Practices

1) It is recommended to use `vue ui` to add or remove plugins, dependencies and other packages that are available in vue as it configures most of the setup out of the box. You can also use vue-cli commands like `vue add <package-name>` or `vue remove <package-name>` 

2) It is a better practice to generate separate chunk for components that won't be used in initial page load and lazy load them later while using vue-router. This reduces the main chunk size and initial page loads faster

3) Always write the code for pages in src/views and the components used by those pages in src/components. Make sure that reusable codes are added in src/components. You can also lazy-import components that aren't required much to be shown while page loads

4) In vue-router, only add the components(pages) in src/views, as it indicates the change of page(UI)

5) Always use **;** after every statement as a better practice. Also it makes the code more readable

6) Make use of mixins for reusable properties and methods, that can be used across multiple components or pages

7) Make use of src/store (vuex) for managing state across multiple components

8) Make use of lifecycle hooks like mounted, created, destroyed, beforeDestroy, beforeCreate, beforeMount, etc to handle some logic when page is created, loaded and destroyed

9) All static files like images, videos, logos etc should be stored in src/assets

10) Always write test cases before pushing the code