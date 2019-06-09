module.exports = require.requireActual('../actions')

require.requireActual('../actions')._stubThunk = require('../lib/stubThunk').stubThunk(module.exports)
