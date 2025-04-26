# Development Guidelines

## Feature Development
1. **Proposal First Approach**
   - Submit feature proposals before implementation
   - Include: goals, technical approach, business impact, timeline
   - Wait for explicit approval before proceeding
   - Use proposal template in `.github/PROPOSAL_TEMPLATE.md`

2. **Branch Management**
   - Never commit directly to `main`
   - Branch naming convention:
     • `feat/[ticket-id]-short-description`
     • `fix/[ticket-id]-issue-description`
     • `refactor/[ticket-id]-scope`
     • `chore/[ticket-id]-task`
   - Delete branches after merging

## Code Quality
3. **Bug Fixes**
   - Document root cause analysis
   - Propose solution with minimal impact
   - Get approval for any changes to existing functionality
   - Include regression tests

4. **Code Standards**
   - Follow project style guide
   - Maintain consistent patterns
   - Prioritize readability over cleverness
   - Use type safety where possible

5. **Shared Logic Protection**
   - No modifications to:
     • Authentication systems
     • Authorization logic
     • Core business rules
     • Shared utilities
   - Require team review for changes

## Documentation
6. **Code Documentation**
   - Add JSDoc comments for public APIs
   - Include inline comments for complex logic
   - Update README for new features
   - Document breaking changes

7. **Commit Standards**
   - Use conventional commits:
     ```
     <type>(<scope>): <description>

     [optional body]

     [optional footer(s)]
     ```
   - Types: feat, fix, docs, style, refactor, test, chore
   - Keep commits atomic and focused

## Change Management
8. **Pull Requests**
   - Use PR template
   - Include:
     • Feature summary
     • Technical approach
     • Testing strategy
     • Screenshots/videos for UI changes
   - Link related issues/tickets
   - Require minimum 2 reviewers

9. **Architecture Changes**
   - Update `ARCHITECTURE.md`
   - Create ADR (Architecture Decision Record)
   - Document in `docs/decisions/[YYYY-MM-DD]-title.md`
   - Update dependency graph

10. **Versioning**
    - Follow semantic versioning
    - Update CHANGELOG.md
    - Tag releases
    - Document breaking changes

## Safety & Reversibility
11. **Change Safety**
    - Include rollback plan
    - Test in staging first
    - Deploy during low-traffic periods
    - Monitor post-deployment

12. **Quality Checks**
    - Pass all CI checks
    - Meet coverage thresholds
    - No security vulnerabilities
    - Performance impact assessed

## Communication
13. **Clarity First**
    - Ask questions early
    - Document assumptions
    - Seek clarification on requirements
    - Keep stakeholders updated

14. **Review Process**
    - Request reviews early
    - Address feedback promptly
    - Explain complex changes
    - Schedule pairing sessions if needed 