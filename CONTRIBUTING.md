# Contributing to Python Facts and Teacher

Thank you for your interest in contributing to the Python Facts and Teacher VS Code extension! This guide will help you add new Python facts to our collection.

## 🎯 What Makes a Good Python Fact?

Before adding a new fact, consider these criteria:

### ✅ Good Facts Should Be:

- **Educational**: Teaches something useful about Python
- **Interesting**: Surprising, fun, or lesser-known information
- **Accurate**: Factually correct and up-to-date
- **Practical**: Includes working code examples when relevant
- **Well-sourced**: Links to official documentation or reliable sources

### 📚 Fact Categories We Love:

- Language features and syntax
- Historical information and trivia
- Performance tips and best practices
- Hidden gems and easter eggs
- Standard library highlights
- Python ecosystem insights
- Common misconceptions clarified

## 📝 How to Add a New Fact

### Step 1: Create a New JSON File

1. Navigate to the `src/facts/` directory
2. Create a new file with a descriptive name: `your-fact-name.json`
3. Use kebab-case for the filename (e.g., `list-comprehensions.json`)

### Step 2: Follow the JSON Structure

```json
{
  "id": "unique-fact-id",
  "title": "Your Fact Title",
  "shortDescription": "Brief one-line description for the notification popup",
  "detailedDescription": "Detailed explanation of the concept, feature, or trivia. This should be informative and engaging, providing context and background information.",
  "examples": [
    "# Code example 1",
    "print('Hello, Python!')",
    "",
    "# Code example 2 with explanation",
    "result = [x**2 for x in range(5)]",
    "print(result)  # [0, 1, 4, 9, 16]",
    "",
    "# You can include multiple examples",
    "# Comments help explain what's happening"
  ],
  "links": [
    {
      "title": "Official Python Documentation",
      "url": "https://docs.python.org/3/..."
    },
    {
      "title": "Related PEP or Article",
      "url": "https://peps.python.org/pep-..."
    }
  ]
}
```

### Step 3: Field Guidelines

#### `id` (required)

- **Format**: kebab-case string
- **Uniqueness**: Must be unique across all facts
- **Example**: `"walrus-operator"`, `"zen-of-python"`

#### `title` (required)

- **Length**: Keep it concise (under 50 characters)
- **Style**: Title case, descriptive
- **Example**: `"The Walrus Operator (:=)"`

#### `shortDescription` (required)

- **Length**: One sentence, under 100 characters
- **Purpose**: Shown in the VS Code notification popup
- **Style**: Engaging and intriguing
- **Example**: `"Python 3.8 introduced the walrus operator (:=) for assignment expressions!"`

#### `detailedDescription` (required)

- **Length**: 2-4 sentences, comprehensive explanation
- **Content**: Background, context, why it matters
- **Style**: Educational but accessible
- **Example**: Explain the feature, its history, use cases, and significance

#### `examples` (optional but recommended)

- **Format**: Array of strings, each representing a line of code
- **Content**: Working Python code that demonstrates the concept
- **Comments**: Use `#` comments to explain what's happening
- **Best Practices**:
  - Include multiple examples showing different aspects
  - Add output comments where helpful: `# Output: [1, 2, 3]`
  - Use empty strings `""` for blank lines
  - Keep examples concise but complete

#### `links` (optional but recommended)

- **Minimum**: At least one link to official documentation
- **Quality**: Prefer official Python docs, PEPs, or reputable sources
- **Variety**: Mix of official docs, tutorials, and related articles

## 🔍 Example: Complete Fact File

Here's a complete example (`src/facts/set-comprehensions.json`):

```json
{
  "id": "set-comprehensions",
  "title": "Set Comprehensions: Unique Collections",
  "shortDescription": "Python supports set comprehensions for creating unique collections efficiently!",
  "detailedDescription": "Set comprehensions work like list comprehensions but create sets instead of lists, automatically removing duplicates. They use curly braces {} and are more memory-efficient than converting lists to sets. This feature was introduced in Python 2.7 and 3.1.",
  "examples": [
    "# Basic set comprehension",
    "numbers = [1, 2, 2, 3, 3, 4, 5]",
    "unique_squares = {x**2 for x in numbers}",
    "print(unique_squares)  # {1, 4, 9, 16, 25}",
    "",
    "# With condition",
    "even_squares = {x**2 for x in range(10) if x % 2 == 0}",
    "print(even_squares)  # {0, 4, 16, 36, 64}",
    "",
    "# More efficient than list -> set conversion",
    "# Slow: set([x**2 for x in numbers])",
    "# Fast: {x**2 for x in numbers}"
  ],
  "links": [
    {
      "title": "Python Set Comprehensions",
      "url": "https://docs.python.org/3/tutorial/datastructures.html#sets"
    },
    {
      "title": "PEP 274 - Dict Comprehensions",
      "url": "https://peps.python.org/pep-0274/"
    }
  ]
}
```

## 🧪 Testing Your Fact

### Before Submitting:

1. **Validate JSON**: Ensure your JSON is properly formatted
2. **Test Examples**: Run all code examples to verify they work
3. **Check Links**: Verify all URLs are accessible and relevant
4. **Proofread**: Check spelling, grammar, and technical accuracy

### JSON Validation:

```bash
# Navigate to the project directory
cd python-facts-and-teacher

# Compile to check for JSON errors
npm run compile
```

If there are JSON syntax errors, the compilation will fail with helpful error messages.

## 📋 Submission Checklist

Before submitting your contribution:

- [ ] **Unique ID**: Fact ID is unique and descriptive
- [ ] **Proper JSON**: File is valid JSON with correct syntax
- [ ] **Working Examples**: All code examples run without errors
- [ ] **Valid Links**: All URLs are accessible and relevant
- [ ] **Appropriate Length**: Content is comprehensive but concise
- [ ] **Educational Value**: Fact teaches something useful about Python
- [ ] **Accurate Information**: All technical details are correct
- [ ] **Proper Grammar**: Text is well-written and proofread

## 🚀 How to Submit

### Option 1: Direct File Addition

1. Create your JSON file in `src/facts/`
2. Test the extension locally
3. Submit via your preferred method (PR, issue, etc.)

### Option 2: Issue Template

If you have an idea but need help with implementation:

1. Open a new issue
2. Use the title: "New Fact: [Your Fact Title]"
3. Include the fact details and any relevant information

## 💡 Fact Ideas We'd Love to See

### Suggested Topics:

- **Modern Python Features**: Match statements, dataclasses, async/await
- **Performance Tips**: When to use sets vs lists, generator benefits
- **Standard Library Gems**: Lesser-known modules like `itertools`, `functools`
- **Python History**: Version milestones, PEP stories, design decisions
- **Common Pitfalls**: Mutable default arguments, late binding closures
- **Ecosystem Tools**: pip, virtual environments, packaging
- **Scientific Python**: NumPy basics, pandas tips, matplotlib tricks
- **Web Development**: Flask/Django insights, HTTP handling
- **Testing**: unittest, pytest, debugging techniques

## 🎨 Style Guidelines

### Writing Style:

- **Tone**: Friendly, educational, enthusiastic
- **Audience**: Python developers of all levels
- **Length**: Concise but complete
- **Technical Level**: Accessible to beginners, valuable for experts

### Code Style:

- **PEP 8**: Follow Python style guidelines
- **Comments**: Explain non-obvious code
- **Examples**: Prefer practical, real-world scenarios
- **Output**: Include expected output where helpful

## 🤝 Community Guidelines

- **Be Respectful**: All contributions should be welcoming and inclusive
- **Stay Factual**: Ensure accuracy and provide sources
- **Be Original**: Don't copy content without proper attribution
- **Help Others**: Review and provide feedback on other contributions

## 📞 Need Help?

- **Questions**: Open an issue with the "question" label
- **Suggestions**: We welcome ideas and feedback
- **Technical Issues**: Report bugs or compilation problems

Thank you for helping make Python learning more fun and accessible! 🐍✨
