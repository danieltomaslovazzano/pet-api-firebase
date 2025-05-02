refactor(auth): Complete auth system overhaul with clean architecture

This extensive refactoring creates a comprehensive authentication and authorization system
with a clean separation of concerns, consistent patterns, and improved maintainability.

Key changes:
- Created dedicated authentication.js for user identity verification
- Implemented resourceLoaders.js for loading resources needed for permission checks
- Created flexible permissionRules.js as a declarative configuration for all permissions
- Enhanced permissionService.js with support for organization-specific permissions
- Added middleware composition patterns for cleaner route definitions
- Updated all route files to use the new system
- Added comprehensive testing and documentation

Technical debt addressed:
- Removed overlapping responsibilities between authentication and authorization
- Consolidated two separate permission systems into one
- Eliminated redundant code in routes through middleware composition
- Improved security by implementing consistent permission checking

This completes the auth system refactoring (25/25 tasks) and provides a much more
maintainable foundation for implementing future auth requirements.

Resolves: #ISSUE-NUMBER 