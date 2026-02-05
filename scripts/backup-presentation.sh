#!/bin/bash
# Quick backup of Zalando presentation
# Run this before major changes: ./scripts/backup-presentation.sh

BACKUP_DIR="backups/zalando-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "Backing up Zalando presentation..."

# Backup presentation components
cp -r app/invite/casestudies/zalando/_components "$BACKUP_DIR/"

# Backup presentation assets
if [ -d "public/images/presentation-assets" ]; then
  cp -r public/images/presentation-assets "$BACKUP_DIR/"
fi

echo "✓ Backed up to $BACKUP_DIR"
echo ""
echo "Contents:"
ls -la "$BACKUP_DIR"
