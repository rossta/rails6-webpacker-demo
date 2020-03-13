# README

This app contains several examples of using Rails 6 and Webpack to load selected JavaScript dependencies. Often I created these demos to answer questions on StackOverflow.

Check out the [branches in the main repository](https://github.com/rossta/rails6-webpacker-demo/branches), including:

* [Importing images](https://github.com/rossta/rails6-webpacker-demo/compare/example/images)
* [React with CSS-in-JS](https://github.com/rossta/rails6-webpacker-demo/compare/example/react-image)
* [CSS Modules](https://github.com/rossta/rails6-webpacker-demo/compare/example/css-module)
* [Pikaday demo](https://github.com/rossta/rails6-webpacker-demo/compare/example/pikaday)
* [Select2 demo](https://github.com/rossta/rails6-webpacker-demo/compare/example/select2)
* [Gmaps4Rails demo](https://github.com/rossta/rails6-webpacker-demo/compare/example/gmaps4rails)
* [Chosen demo](https://github.com/rossta/rails6-webpacker-demo/compare/example/chosen)

## Tmuxinator

Tmux is a tool that allows multiple terminal sessions to be accessed
simultaneously in a single window.

Tmuxinator makes it easier to start tmux sessions with pre-configured panes and
windows

First, install tmux and tmuxinator.

For Mac OSX
```
brew install tmux tmuxintor
```

The `.tmuxinator.yml` config file in this project is setup to run vim, rake,
rails s, and webpack-dev-server from a single command:

```sh
tmuxinator start
```

Resources && Tutorials

* https://thoughtbot.com/blog/a-tmux-crash-course
* https://thoughtbot.com/blog/templating-tmux-with-tmuxinator
* Tmux cheatsheet: https://gist.github.com/MohamedAlaa/2961058
* Tmuxinator README: https://github.com/tmuxinator/tmuxinator
