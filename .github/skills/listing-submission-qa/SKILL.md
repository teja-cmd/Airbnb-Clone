---
name: listing-submission-qa
description: 'Use when preparing this vacation-rental listing clone for review or submission. Checks build, key interactions, accessibility, architecture documentation, AI workflow artifacts, and archive contents.'
user-invocable: true
---
# Listing Submission QA

Use this checklist before packaging the project for an evaluator.

## Procedure
1. Read `.github/copilot-instructions.md`, `README.md`, and the assignment deliverables.
2. Run `npm run build` and report the actual result.
3. In a browser, verify the listing header and post-gallery section navigation, the five-card nearby carousel, and the Photo Tour and Lightbox open/close and keyboard flows.
4. Check that image alternatives are meaningful, icon-only controls have accessible names, and overlays retain focus and lock body scrolling.
5. Confirm `architecture/architecture.svg`, `ai/prompts.md`, `ai/workflow.md`, repository instructions, and any agent/skill configs are present.
6. Create a ZIP containing source, project metadata, documentation, and the architecture diagram. Exclude `node_modules/`, `dist/`, caches, and the ZIP itself. Do not publish or push the project.
7. List archive contents and verify the archive opens before reporting completion.

## Reporting
Summarize build and interaction checks, identify any checks that could not be performed, and give the exact ZIP path.
