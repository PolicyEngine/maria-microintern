#!/bin/bash

# Migration script to push code to PolicyEngine/maria-microintern

echo "📦 Starting migration to PolicyEngine/maria-microintern..."

# Step 1: Add the PolicyEngine repo as a new remote
echo "➕ Adding PolicyEngine remote..."
git remote add policyengine https://github.com/PolicyEngine/maria-microintern.git

# Step 2: Verify remote was added
echo "✓ Current remotes:"
git remote -v

# Step 3: Stage all changes
echo "📝 Staging all changes..."
git add .

# Step 4: Commit changes
echo "💾 Committing changes..."
git commit -m "feat: Complete internship presentation with all projects and fixes

- Fixed spelling mistakes across all components
- Updated configuration for PolicyEngine deployment
- Added interactive documentation embeds
- Styled Next Steps sections for better visibility
- Added paper results section with findings"

# Step 5: Push to PolicyEngine repo
echo "🚀 Pushing to PolicyEngine/maria-microintern..."
git push policyengine main --force

echo "✅ Migration complete! Your code is now at https://github.com/PolicyEngine/maria-microintern"
echo ""
echo "Next steps:"
echo "1. Go to https://github.com/PolicyEngine/maria-microintern/settings/pages"
echo "2. Under 'Source', select 'GitHub Actions'"
echo "3. The site will be available at https://policyengine.github.io/maria-microintern"
echo ""
echo "The GitHub Action will run automatically and deploy your site!"