# Active Context

  This file tracks the project's current status, including recent changes, current goals, and open questions.
  2025-05-01 23:27:28 - Log of updates made.

*

## Current Focus

*   Developing the frontend marketing pages.

## Recent Changes

*   

## Open Questions/Issues

*
[2025-05-02 01:45:58] - Analyzed GitHub Actions workflow `.github/workflows/deploy.yml`. Identified potential issue with `git pull` failing on EC2 instance due to permission/ownership conflicts in `/home/ubuntu/website` directory, preventing frontend code from being deployed and containers from starting. Recommended verifying SSH user, adjusting script permissions, and adding error logging.