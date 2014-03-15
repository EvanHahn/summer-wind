Summer Wind
===========

Let me start by saying **DON'T USE THIS**. This is just experimental.

Express is inspired by Sinatra, but it's not the same. I wanted to see if it was possible to recreate Sinatra's API in Node. This is just a proof of concept. Here's how a simple "hello world" looks in CoffeeScript:

```coffeescript
require('../summerwind') ->
  get '/', ->
    return "Hello! Your user-agent is #{params['user-agent']}"
```

This is done with a nasty `eval` hack that `toString`s functions and calls them in another context.
