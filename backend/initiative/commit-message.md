refactor(auth): Implement new authentication and authorization system

This refactoring creates a cleaner architecture with clear separation of authentication and
authorization concerns. The implementation follows best practices and provides a more 
maintainable and extensible permission system.

Key changes:
- Created clear separation between authentication and authorization
- Consolidated permission systems into a single declarative approach
- Added organization-specific permission conditions
- Implemented middleware composition for cleaner route definitions
- Added comprehensive documentation and migration guides

This refactoring addresses the issue where the auth system was confusing and had overlapping
responsibilities between authentication and authorization. The new system allows for fine-grained
permission control while keeping route definitions clean and simple.

Resolves: #ISSUE-NUMBER 