# Contributing to Isomorphic Layout Composer

**Thank you for your interest in making ILC even better and more awesome. Your contributions are highly welcome.**

## Installation and setup of the LDE
1. Clone the repo
1. _For Namecheap employees only_: clone 
"[ilc.internal](https://git.namecheap.net/projects/RND/repos/ilc.internal/browse)" 
repo and follow the guide to setup NC specific applications.
1. Run `npm install`
1. Run `npm start`
1. PROFIT 😎
    * Open running code at `http://localhost:8233/`
    * Registry UI is available at `http://localhost:4001/`
    
These steps will start ILC with a [set of demo applications](https://github.com/namecheap/ilc-demo-apps) running inside
Docker container. While it's ok in most of the cases - sometimes you might need to develop those apps alongside ILC.

To do so you need to clone [ilc-demo-apps](https://github.com/namecheap/ilc-demo-apps) repo and run them in dev mode.
At the same time in parallel terminal you need to run `npm run start:no-apps`