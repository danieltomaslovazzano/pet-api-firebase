# Legacy E2E Tests

This directory contains legacy and backup test files that are no longer part of the active test suite but are preserved for reference and potential future use.

## 📁 Contents

### Monolithic Test Files (Legacy)
These files contain the original monolithic test implementations before modularization:

- **`conversations.e2e.js`** - Original conversations test suite (869 lines)
- **`messages.e2e.js`** - Original messages test suite (1,078 lines)  
- **`memberships.e2e.js`** - Original memberships test suite (730 lines)

### Backup Files
These are backup copies of the original monolithic files created during the refactoring process:

- **`conversations.e2e.js.monolith-backup`** - Backup of conversations suite
- **`messages.e2e.js.monolith-backup`** - Backup of messages suite
- **`memberships.e2e.js.monolith-backup`** - Backup of memberships suite
- **`pets.e2e.js.monolith-backup`** - Backup of pets suite (1,229 lines)

## 🚨 Important Notes

### **DO NOT EXECUTE THESE FILES**
- These files are **NOT** part of the active test suite
- They may contain outdated configurations or dependencies
- They are preserved purely for reference purposes

### **Purpose**
- **Historical Reference**: Understanding how tests were originally structured
- **Rollback Option**: Emergency fallback if modular approach needs reverting
- **Code Recovery**: Salvaging specific test cases if needed
- **Documentation**: Learning from original implementation patterns

## ✅ Current Active Test Structure

The modular test structure is now organized as follows:

```
tests/e2e/
├── auth/                    # Authentication tests
├── users/                   # User management tests
├── organizations/           # Organization management tests
├── organization-types/      # Organization types tests
├── memberships/            # Membership tests (6 modules)
├── pets/                   # Pet tests (5 modules)
├── conversations/          # Conversation tests (7 modules)
├── messages/              # Message tests (7 modules)
├── i18n/                  # Internationalization tests
└── legacy/                # This directory
```

## 🔄 Migration Status

| Original File | Status | Modular Replacement |
|---------------|--------|-------------------|
| `pets.e2e.js` | ✅ Migrated | `pets/` (5 modules) |
| `messages.e2e.js` | ✅ Migrated | `messages/` (7 modules) |
| `conversations.e2e.js` | ✅ Migrated | `conversations/` (7 modules) |
| `memberships.e2e.js` | ✅ Migrated | `memberships/` (7 modules) |

## 📊 Size Reduction Achieved

- **pets**: 1,229 lines → ~300 lines per module (75% reduction)
- **messages**: 1,078 lines → ~150-300 lines per module (70% reduction)
- **conversations**: 869 lines → ~120-220 lines per module (72% reduction)
- **memberships**: 730 lines → ~170-290 lines per module (68% reduction)

---
**Last Updated**: June 17, 2025  
**Refactoring Phase**: Completed  
**Next Review**: December 2025 (consider deletion if no issues found) 