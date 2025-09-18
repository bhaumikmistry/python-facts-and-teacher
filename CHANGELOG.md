# Changelog

All notable changes to the "Python Facts and Teacher" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-19

### Added
- 🎉 Initial release of Python Facts and Teacher extension
- 📚 51 curated Python fun facts with examples and links
- 🔄 Smart fact rotation system with persistent storage
- 🎨 Beautiful webview with improved code styling
- 📝 JSON-based fact system for easy extensibility
- 🏗️ Modular architecture with separate services
- 🚫 Debounce mechanism to prevent duplicate notifications
- 📖 Comprehensive contributing guide for community contributions
- 🎯 Template file for easy fact creation

### Features
- **Automatic Triggers**: Shows facts when opening or creating Python files
- **Interactive Webview**: Detailed view with syntax-highlighted examples
- **Manual Command**: "Show Python Fun Fact" command in command palette
- **Persistent Storage**: Remembers shown facts across VS Code sessions
- **Smart Rotation**: Never repeats facts until all have been seen
- **Easy Extensibility**: Add new facts by creating JSON files

### Fact Categories
- Language origins & history (Python's creation story, naming, etc.)
- Core language features (duck typing, list comprehensions, etc.)
- Advanced concepts (generators, decorators, async/await, etc.)
- Hidden gems & easter eggs (import antigravity, braces joke, etc.)
- Modern Python features (f-strings, walrus operator, match statements, etc.)
- Community & philosophy (PEP system, Zen of Python, etc.)

### Technical Details
- **Architecture**: Modular design with FactLoader, FactStorage, and WebviewProvider
- **Storage**: Uses VS Code's globalState for persistence
- **Styling**: VS Code theme-aware with proper syntax highlighting
- **Performance**: Efficient JSON loading and caching
- **Compatibility**: VS Code 1.104.0+

## [Unreleased]

### Planned Features
- 🎨 Custom themes for webview
- 📊 Statistics on facts viewed
- 🔍 Search functionality for facts
- 🏷️ Fact categories and filtering
- 🌐 Internationalization support
- 📱 Mobile-friendly webview improvements

---

## Contributing

See our [Contributing Guide](https://github.com/bhaumikmistry/python-facts-and-teacher/blob/main/CONTRIBUTING.md) for information on how to contribute new facts or improvements.

## Links

- [GitHub Repository](https://github.com/bhaumikmistry/python-facts-and-teacher)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=bhaumikmistry.python-facts-and-teacher)
- [Report Issues](https://github.com/bhaumikmistry/python-facts-and-teacher/issues)
- [Discussions](https://github.com/bhaumikmistry/python-facts-and-teacher/discussions)