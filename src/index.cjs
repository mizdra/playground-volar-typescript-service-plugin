const ts = require('typescript');
const { createAsyncLanguageServicePlugin } = require('@volar/typescript/lib/quickstart/createAsyncLanguageServicePlugin.js');
const { createPngLanguagePlugin } = require('./language-plugin.cjs');

module.exports = createAsyncLanguageServicePlugin(['.png'], ts.ScriptKind.TS, async (ts, info) => {
  if (info.project.projectKind !== ts.server.ProjectKind.Configured) {
    return { languagePlugins: [] };
  }

  return {
    languagePlugins: [createPngLanguagePlugin()],
  };
});
