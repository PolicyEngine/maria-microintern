# PolicyEngine Internship Presentation Makefile
# Commands for development, building, and deployment

.PHONY: help install presentation-dev build test lint typecheck clean deploy setup images check-images

# Default target - show help
help:
	@echo "PolicyEngine Internship Presentation - Available Commands:"
	@echo ""
	@echo "  make install          - Install all dependencies (npm and Python if needed)"
	@echo "  make presentation-dev - Start development server with hot reload (localhost:3000)"
	@echo "  make build           - Build production-ready presentation"
	@echo "  make test            - Run all tests"
	@echo "  make lint            - Run linter to check code style"
	@echo "  make typecheck       - Run TypeScript type checking"
	@echo "  make clean           - Remove build artifacts and node_modules"
	@echo "  make deploy          - Build and prepare for deployment"
	@echo "  make setup           - Full setup (install + build)"
	@echo "  make images          - Check if required images are present"
	@echo "  make check-all       - Run all checks (lint, typecheck, test)"
	@echo ""
	@echo "Quick start:"
	@echo "  1. make install"
	@echo "  2. make presentation-dev"

# Install all dependencies
install:
	@echo "📦 Installing dependencies..."
	npm install
	@if [ -f "pyproject.toml" ]; then \
		echo "📦 Installing Python dependencies with uv..."; \
		if command -v uv >/dev/null 2>&1; then \
			uv pip install -e .; \
		else \
			echo "⚠️  uv not found. Install with: curl -LsSf https://astral.sh/uv/install.sh | sh"; \
		fi \
	fi
	@echo "✅ Dependencies installed successfully!"

# Start development server with hot reload
presentation-dev:
	@echo "🚀 Starting presentation in development mode..."
	@echo "📍 Opening at http://localhost:3000"
	@echo "📝 Use Ctrl+C to stop the server"
	@echo ""
	npm start

# Build for production
build:
	@echo "🔨 Building presentation for production..."
	npm run build
	@echo "✅ Build complete! Files in ./build directory"

# Run tests
test:
	@echo "🧪 Running tests..."
	npm test -- --watchAll=false --coverage

# Run linter
lint:
	@echo "🔍 Running linter..."
	npm run lint

# Run TypeScript type checking
typecheck:
	@echo "📝 Checking TypeScript types..."
	npm run typecheck

# Clean build artifacts and dependencies
clean:
	@echo "🧹 Cleaning build artifacts..."
	rm -rf build/
	rm -rf node_modules/
	rm -rf coverage/
	@echo "✅ Clean complete!"

# Full setup - install and build
setup: install build
	@echo "✅ Setup complete! Run 'make presentation-dev' to start developing"

# Check if required images are present
images:
	@echo "🖼️  Checking required images..."
	@if [ -f "public/images/logo.png" ]; then \
		echo "✅ logo.png found"; \
	else \
		echo "❌ logo.png missing - add PolicyEngine logo to public/images/logo.png"; \
	fi
	@if [ -f "public/images/profile.jpg" ]; then \
		echo "✅ profile.jpg found"; \
	else \
		echo "❌ profile.jpg missing - add your main photo to public/images/profile.jpg"; \
	fi
	@if [ -f "public/images/profile2.jpeg" ] || [ -f "public/images/profile2.jpg" ]; then \
		echo "✅ profile2.jpeg/jpg found"; \
	else \
		echo "❌ profile2.jpeg/jpg missing - add your second photo to public/images/profile2.jpeg"; \
	fi

# Check if images exist before dev
check-images:
	@make -s images
	@echo ""

# Start dev with image check
dev: check-images presentation-dev

# Run all checks
check-all: lint typecheck test
	@echo "✅ All checks passed!"

# Deploy to GitHub Pages (requires git setup)
deploy: build
	@echo "🚀 Preparing deployment to GitHub Pages..."
	@if [ -d ".git" ]; then \
		echo "📦 Installing gh-pages if needed..."; \
		npm install --save-dev gh-pages; \
		echo "🚀 Deploying to GitHub Pages..."; \
		npx gh-pages -d build; \
		echo "✅ Deployment complete!"; \
	else \
		echo "❌ Not a git repository. Initialize with 'git init' first"; \
		exit 1; \
	fi

# Quick rebuild and start
restart: build presentation-dev

# Install and start immediately
quick-start: install presentation-dev

# Production preview - build and serve locally
preview: build
	@echo "👁️  Preview production build at http://localhost:5000"
	@if command -v serve >/dev/null 2>&1; then \
		serve -s build -l 5000; \
	else \
		echo "Installing serve..."; \
		npm install -g serve; \
		serve -s build -l 5000; \
	fi

# Watch for changes and rebuild
watch:
	@echo "👀 Watching for changes..."
	npm start

# Format code (if prettier is available)
format:
	@if [ -f ".prettierrc" ] || [ -f "prettier.config.js" ]; then \
		npx prettier --write "src/**/*.{ts,tsx,js,jsx,css}"; \
		echo "✅ Code formatted!"; \
	else \
		echo "⚠️  No prettier config found"; \
	fi

# Show current git status
status:
	@echo "📊 Project status:"
	@echo ""
	@echo "Git status:"
	@git status --short || echo "Not a git repository"
	@echo ""
	@echo "Dependencies:"
	@if [ -f "node_modules/.package-lock.json" ]; then \
		echo "✅ NPM packages installed"; \
	else \
		echo "❌ NPM packages not installed - run 'make install'"; \
	fi
	@echo ""
	@make -s images

# Open in browser (macOS/Linux)
open:
	@if [ "$$(uname)" = "Darwin" ]; then \
		open http://localhost:3000; \
	elif [ "$$(uname)" = "Linux" ]; then \
		xdg-open http://localhost:3000; \
	else \
		echo "Please open http://localhost:3000 in your browser"; \
	fi

# Development with auto-open browser
dev-open: 
	@make open & make presentation-dev

# CI/CD pipeline simulation
ci: install lint typecheck test build
	@echo "✅ CI pipeline complete!"

# Print system info for debugging
info:
	@echo "System Information:"
	@echo "==================="
	@node --version | echo "Node.js: $$(cat -)"
	@npm --version | echo "npm: $$(cat -)"
	@echo "OS: $$(uname -s)"
	@echo "Directory: $$(pwd)"
	@echo ""
	@echo "Package.json scripts:"
	@cat package.json | grep -A 5 '"scripts"' || echo "No package.json found"