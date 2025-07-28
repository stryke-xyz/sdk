#!/bin/zsh

# Usage: ./bump-version.sh --type [major|minor|patch]

set -e

# Default type is patch
TYPE="patch"

while [[ $# -gt 0 ]]; do
  case $1 in
    --type)
      TYPE="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

if [[ ! -f package.json ]]; then
  echo "package.json not found!"
  exit 1
fi

VERSION=$(jq -r .version package.json)
# Extract only the numeric part (ignore pre-release/build tags)
VERSION_NUM=$(echo "$VERSION" | grep -Eo '^[0-9]+\.[0-9]+\.[0-9]+')
IFS='.' read -r MAJOR MINOR PATCH <<< "$VERSION_NUM"

# Debug output
 echo "Current version: $VERSION (parsed: $MAJOR.$MINOR.$PATCH)"
 echo "Bump type: $TYPE"

case $TYPE in
  major)
    MAJOR=$((MAJOR+1))
    MINOR=0
    PATCH=0
    ;;
  minor)
    MINOR=$((MINOR+1))
    PATCH=0
    ;;
  patch)
    PATCH=$((PATCH+1))
    ;;
  *)
    echo "Invalid type: $TYPE. Use major, minor, or patch."
    exit 1
    ;;
esac

NEW_VERSION="$MAJOR.$MINOR.$PATCH"

jq ".version = \"$NEW_VERSION\"" package.json > package.tmp.json && mv package.tmp.json package.json

echo "Version bumped to $NEW_VERSION"

echo "Running build..."
npm run build

echo "Done."
