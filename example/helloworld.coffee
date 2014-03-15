require('../summerwind') ->
  get '/', ->
    return "Hello! Your user-agent is #{params['user-agent']}"
