Software Configuration Management (SCM): Evaluation and Git Workflow
Purpose: Evaluate centralized and distributed version control systems and recommend an SCM approach for a geographically distributed development team.

Contents
1. Introduction
2. Centralized vs. Distributed Version Control
3. SVN, Git, and Mercurial Compared
4. Why Git Fits a Distributed Team
5. Challenges and Mitigations
6. Recommendation
7. Git Feature-Branch Workflow
8. Continuous Integration Example
1. Introduction
Software Configuration Management (SCM) is the process of tracking, controlling, and managing changes to source code, configuration files, documentation, and other software artifacts throughout the software development lifecycle.

As the company transitions from a centralized development process to a distributed team, selecting an appropriate version control system (VCS) is essential. Developers working across different geographic locations need support for collaboration, efficient branching, secure code management, and integration with Continuous Integration and Continuous Delivery (CI/CD) pipelines.

This document evaluates Subversion (SVN), Git, and Mercurial to identify a suitable solution for the organization.
2. Centralized vs. Distributed Version Control
2.1 Centralized Version Control System (CVCS)
A centralized version control system stores the primary repository on a central server. Developers connect to that server to check out files, commit changes, and retrieve updates.

Example: Subversion (SVN)

Key characteristics
- A central repository acts as the primary source of truth.
- Developers generally need network access to commit changes to the shared repository.
- Access controls can be managed centrally.
- Branching and merging are supported, although workflows differ from Git's.
- Repository administration and backups can be managed centrally.
Advantages
- Simple, centralized administration.
- Straightforward permission management.
- A clear, authoritative repository for the team.
- Suitable for workflows that require centralized control over commits.
Challenges
- Network connectivity is generally required to commit to the central repository.
- Server outages can interrupt shared development activities.
- Distributed teams may experience latency when accessing a remote server.
- Branching and merging can be less convenient for frequent, parallel development.
- Developers have less repository-level autonomy when working offline.
2.2 Distributed Version Control System (DVCS)
A distributed version control system gives each developer a local repository containing the project's version history. Developers can commit changes locally and synchronize them with remote repositories when needed.

Examples: Git and Mercurial

Key characteristics
- Each clone contains the repository's commit history.
- Developers can commit, branch, inspect history, and compare changes offline.
- Changes are shared through operations such as pushing and pulling.
- Branching and merging support parallel development.
- Multiple remote repositories can be configured for different collaboration or deployment workflows.
Advantages
- Supports teams working across different time zones and locations.
- Enables offline development and local commits.
- Provides fast local operations, including branching and history inspection.
- Supports flexible collaboration through feature branches and code reviews.
- Integrates well with modern automation and CI/CD systems.
Challenges
- Teams need consistent policies for branching, merging, and releases.
- Repository synchronization can introduce merge conflicts.
- Repository permissions and secrets require careful management.
- Large repositories and binary files may need additional optimization.
- Developers need training in distributed workflows and conflict resolution.
3. SVN, Git, and Mercurial Compared
SVN, Git, and Mercurial track file changes, manage source code, support collaboration, and maintain project history. Their main differences relate to how they store history and support collaboration.
System	Model	Summary
SVN (Subversion)	Centralized	A central server stores repository history. Developers use working copies and normally contact the server to commit changes.
Git	Distributed	Every clone contains repository history. Developers can commit, branch, compare changes, and inspect history locally, then synchronize with a remote repository.
Mercurial	Distributed	Each clone has its own repository history. It supports local commits, branching, merging, and synchronization with remote repositories.


Git vs. Mercurial
Git and Mercurial are both mature distributed version control systems. Both support offline commits, repository cloning, branching, merging, and collaborative development.

Git is the stronger candidate for this organization primarily because of its broad industry adoption, extensive integration ecosystem, and compatibility with commonly used code-hosting and DevOps platforms.

Mercurial remains a technically capable alternative and may be appropriate for teams already using it successfully. The organization should compare hosting options, automation requirements, team familiarity, and long-term maintenance costs before making a final selection. The choice should be based on operational needs rather than assuming one DVCS is universally superior.
4. Why Git Fits a Distributed Team
4.1 Offline Development
Git allows developers to commit changes, inspect history, create branches, and compare revisions without continuous access to a remote server. This is valuable for team members working in different regions or with unreliable network connections.
4.2 Efficient Branching and Merging
Git makes it practical to create short-lived feature branches for individual tasks. Developers can implement features, fix bugs, and experiment independently without immediately affecting the main branch.

Example branch names:
main
feature/user-authentication
bugfix/payment-validation
release/2.0
The main branch contains production-ready code. Feature and bug-fix branches isolate work, while a release branch may be used if the team adopts that workflow. Branches can be merged through reviewed pull requests after required checks pass.
4.3 Improved Collaboration
Git supports shared repositories, forks, and multiple remotes. These options allow developers to work independently while sharing changes through controlled integration points.

Pull requests or merge requests provide a structured way to review code, discuss implementation decisions, and verify automated test results before merging.
4.4 Performance and History Management
Most Git operations are performed locally, reducing dependence on network latency. Git records changes as commits, allowing developers to investigate regressions, compare versions, and revert problematic changes.
4.5 Integration with DevOps and CI/CD
Git integrates with platforms and tools such as GitHub, GitLab, Bitbucket, Jenkins, and other CI/CD systems.

Automation can be triggered by commits, pushes, or pull requests to perform:
- Automated unit and integration testing.
- Code formatting and linting.
- Static application security testing (SAST).
- Dependency and vulnerability scanning.
- Build and deployment processes.
- Release tagging and artifact generation.
These integrations help enforce consistent quality standards across a geographically distributed team.
4.6 Resilience and Repository Availability
Each full Git clone contains substantial repository history. This provides useful redundancy if a developer's working copy is lost or a remote server becomes temporarily unavailable.

However, a clone is not a complete replacement for a managed backup strategy. The organization should maintain protected, independently recoverable backups of its authoritative repositories.
5. Challenges and Mitigations
5.1 Learning Curve
Git's distributed model introduces concepts such as staging, commits, rebasing, merging, remotes, and detached HEAD states. Developers familiar with SVN may need training to use these features safely.

Mitigation: Provide onboarding documentation, practical exercises, standard command examples, and guidance on resolving conflicts.
5.2 Merge Conflicts
When developers modify overlapping sections of the same files, Git may be unable to merge the changes automatically.

Mitigations
- Keep feature branches short-lived.
- Synchronize frequently with the target branch.
- Encourage small, focused commits.
- Require automated tests after conflict resolution.
- Use code reviews to validate the final changes.
5.3 Poor Branch Management
Long-lived feature branches can diverge significantly from the main branch, increasing integration risk and delaying feedback.

Mitigation: Adopt a documented branching strategy, such as trunk-based development with short-lived feature branches. Protect the main branch and require pull requests for changes.
5.4 Repository Growth
Large binary assets, generated files, and extensive histories can increase clone times and repository storage requirements.

Mitigations
- Add appropriate entries to .gitignore.
- Avoid committing build artifacts and secrets.
- Use Git Large File Storage (Git LFS) when suitable for large binary assets.
- Consider shallow clones, partial clones, or repository restructuring where appropriate.
5.5 Security and Access Control
Distributed copies increase the number of locations where source code and history may exist. A local repository may contain sensitive historical information even if the current files do not.

Mitigations
- Apply least-privilege repository access.
- Enforce multifactor authentication for hosting accounts.
- Store credentials in approved credential managers.
- Never commit API keys, passwords, private keys, or other secrets.
- Scan for exposed secrets and revoke compromised credentials.
- Protect important branches and require reviews for sensitive changes.
- Audit repository access and administrative activity.
5.6 Inconsistent Development Practices
Without common standards, developers may use inconsistent commit messages, branch names, testing procedures, or merge strategies.

Mitigation: Establish shared conventions, automated checks, code-review requirements, and documented release procedures.
6. Recommendation
Recommendation: Adopt Git with a centrally hosted, access-controlled remote repository.

Although Git is distributed, the organization should maintain a designated authoritative remote repository to provide a consistent source of truth for collaboration, reviews, and releases.
Area	Recommended approach
Repository hosting	Select a managed Git platform, such as GitHub, GitLab, or Bitbucket, based on security, integration, cost, and compliance requirements.
Branching strategy	Use short-lived feature branches and a protected main branch. Adopt trunk-based development where practical.
Code review	Require pull requests or merge requests for changes to protected branches.
Quality assurance	Run automated tests, linting, and security checks before merging.
Access management	Apply least privilege, multifactor authentication, and appropriate audit controls.
CI/CD integration	Automate builds, tests, and deployments through approved pipelines.
Backup and recovery	Maintain protected backups and periodically test repository restoration.
Developer training	Provide documentation and practical training for Git workflows and conflict resolution.


Conclusion
Git is the recommended version control system for the company's transition to distributed software development. Compared with a centralized system such as SVN, Git provides offline development, fast local operations, flexible branching, and strong integration with modern DevOps practices.

Mercurial also offers distributed development capabilities, but Git's wider ecosystem makes it a practical choice for a team seeking scalable collaboration and automation.

Successful adoption will depend not only on selecting Git but also on establishing secure repository hosting, consistent branching policies, mandatory code reviews, automated quality checks, developer training, and reliable backup procedures. These practices will help the organization build a secure, maintainable, and scalable SCM process for its distributed workforce.
7. Git Feature-Branch Workflow
For a new web application, a feature-branching workflow allows developers to work on multiple features independently while keeping the main branch stable and production-ready.
7.1 Branching Strategy
Use the following branch structure:
main
├── feature/login
└── feature/dashboard
- main: stable, production-ready code.
- feature/login: Developer A works on authentication.
- feature/dashboard: Developer B works on the dashboard.
Developers open pull requests for review. Changes are merged into main only after required reviews and automated checks pass.
7.2 Step 1 — Create the Repository
Initialize the local repository, create the initial commit, and connect it to a remote repository.
git init
git add .
git commit -m "chore: initial project setup"

git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
Replace YOUR_REPOSITORY_URL with the URL of your remote repository, such as a GitHub repository.
7.3 Step 2 — Create a Feature Branch
Each developer creates a separate branch from the latest main branch.

Developer A — login feature
git switch main
git pull origin main
git switch -c feature/login
Developer B — dashboard feature
git switch main
git pull origin main
git switch -c feature/dashboard
Use descriptive branch names such as feature/user-profile, fix/login-error, or feature/payment-integration.
7.4 Step 3 — Develop and Commit Changes
Developers commit changes to their own branches rather than directly to main.

Developer A — login feature
git add .
git commit -m "feat: implement login functionality"
git push -u origin feature/login
Developer B — dashboard feature
git add .
git commit -m "feat: implement dashboard layout"
git push -u origin feature/dashboard
Make small, focused commits with meaningful messages.
7.5 Step 4 — Open a Pull Request
Once a feature is complete:
1. Open a pull request from the feature branch into main.
2. Request a review from another developer.
3. Run automated tests, linting, and build checks.
4. Address review comments and push any required changes.
5. Merge the pull request only when all required checks pass.
7.6 Step 5 — Protect the main Branch
Configure branch protection rules in GitHub, GitLab, or the chosen Git hosting service.

Recommended settings
- Require pull requests before merging.
- Require at least one approving code review.
- Require automated CI checks to pass.
- Require the branch to be up to date with the target branch, if appropriate.
- Block force pushes and deletion of main.
- Restrict direct pushes to main.
These rules help prevent incomplete or broken code from entering the stable branch.
7.7 Step 6 — Update the Feature Branch
If another developer merges changes into main while your feature is in progress, incorporate those changes regularly.
git switch feature/login
git fetch origin
git merge origin/main
Resolve any merge conflicts, run the tests again, and push the updated branch.
7.8 Step 7 — Clean Up After Merging
After the pull request is merged, update the local repository and delete the completed feature branch.
git switch main
git pull origin main

git branch -d feature/login
git fetch --prune
The remote feature branch can also be deleted through the hosting platform or, if necessary, with this command:
git push origin --delete feature/login
8. Continuous Integration Example
Configure a continuous integration (CI) pipeline to run on every pull request. The following GitHub Actions workflow is an example for a Node.js web application.

Create the workflow file at .github/workflows/ci.yml:
name: CI

on:
  pull_request:
    branches:
      - main
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test -- --run

      - name: Build application
        run: npm run build
Configuration note: This example assumes the project has a package-lock.json, a test script compatible with npm test -- --run, and a build script. Adjust the commands to match the project's framework and test runner.

Finally, configure the required CI check in the repository's branch protection settings so that the relevant checks must pass before a pull request can be merged.

![Screenshot-1](Screenshot-1.png)
![Screenshot-2](Screenshot-2.png)
![Screenshot-3](Screenshot-3.png)

Team Git Workflow Guide
Project: Web Application Development
Version: 1.0

1. Purpose
This guide establishes a consistent Git workflow that enables developers to work on multiple features simultaneously while maintaining a stable, reliable main branch.
The workflow supports parallel development, code reviews, automated testing, conflict resolution, and effective collaboration among team members working from different locations and time zones.


2. Branching Strategy
The team will use a feature-branch workflow with main as the primary integration branch.

2.1 Main Branch
main must always contain stable, reviewed, and tested code.
Direct pushes to main are prohibited.
All changes must be submitted through pull requests.
Required automated checks and code reviews must pass before merging.
Releases should be created from verified commits on main, using tags where appropriate.


2.2 Feature Branches
Each feature, bug fix, or maintenance task should have its own branch created from the latest main.

Branch names should be descriptive, concise, and related to a task or issue identifier when applicable.

2.3 Creating a Feature Branch
Developers should begin by updating their local main branch:

git switch main git pull --ff-only origin main git switch -c feature/user-login

Work should be committed to the feature branch rather than directly to main.

git add . git commit -m "feat: implement user login" git push -u origin feature/user-login

Developers should push their branches regularly so that their work is backed up and accessible to teammates.

3. Daily Development Workflow
The team will follow this sequence:

Select a task from the project board.
Create a feature branch from the latest main.
Implement the feature and commit changes incrementally.
Run relevant tests and checks locally.
Push the branch to the shared repository.
Open a pull request when the changes are ready for review.
Address review feedback and resolve conflicts.
Merge after approval and successful CI checks.
Delete the completed branch and update the local repository.
Developers should keep branches focused on one task wherever possible. Large features should be divided into smaller, reviewable changes.

4. Pull Request Procedure
Pull requests (PRs) are the standard method for proposing and reviewing changes before they enter main.

4.1 Opening a Pull Request
Each pull request should include:

A clear title describing the change.
A summary of what was implemented and why.
A reference to the relevant issue or task.
Testing performed and the results.
Screenshots or recordings for significant user-interface changes, where useful.
Any risks, migration requirements, or configuration changes.
The PR description should help reviewers understand the change without requiring extensive additional explanation.

4.2 Code Review Requirements
Reviewers should verify that:

The implementation meets the task requirements.
Code is readable, maintainable, and consistent with team conventions.
Tests cover the important new behaviour.
Existing functionality has not been unintentionally broken.
Security, performance, accessibility, and error handling have been considered where relevant.
Documentation and configuration are updated when necessary.
At least one approval from another developer is required before merging. Higher-risk changes may require additional reviewers.

Authors should respond constructively to feedback, explain design decisions when necessary, and push revisions to the same branch. Reviewers should focus on the code and its impact rather than personal preferences.

4.3 Automated Checks
Every pull request targeting main must pass the project's required continuous integration (CI) checks, including applicable:

Unit and integration tests.
Linting and formatting checks.
Type checking.
Production builds.
Security or dependency checks, where configured.
The pull request must not be merged if a required check fails. Failures should be investigated and corrected before approval or merging.

4.4 Merging a Pull Request
Once the required reviews and checks have passed:

Confirm that the pull request is ready to merge.
Resolve outstanding review comments and conversations.
Ensure the branch is sufficiently up to date with main.
Use the team's agreed merge method.
Delete the feature branch after merging, unless it is intentionally retained.
5. Merging and Rebasing Best Practices
Merging and rebasing both integrate changes, but they have different effects on Git history.

5.1 Merge
A merge combines the histories of two branches and may create a merge commit.

git switch feature/user-login git fetch origin git merge origin/main

If conflicts occur, resolve them in the affected files, test the result, and complete the merge.

Use merging when:

Integrating changes from main into a shared feature branch.
Preserving the history of parallel development is important.
Multiple developers are collaborating on the same branch.
Advantages:

Preserves existing commit history.
Does not rewrite existing commits.
Makes branch integration points explicit.
5.2 Rebase
Rebasing replays commits on top of another base commit, producing a more linear history.

git switch feature/user-login git fetch origin git rebase origin/main

If conflicts occur, resolve each affected file and continue:

git add <resolved-file> git rebase --continue

To abandon the rebase and return to the original branch state:

git rebase --abort

After rebasing a branch that has already been pushed, its commit history may differ from the remote branch. If the branch is exclusively owned by the developer and the team permits rewriting it, update the remote using:

git push --force-with-lease

Never use git push --force indiscriminately. Do not rebase shared branches that other developers rely on without explicit coordination.

Use rebasing when:

Updating a private feature branch with the latest main.
Cleaning up local commits before sharing them, when appropriate.
Preparing a focused, easy-to-review commit history.
Advantages:

Produces a more linear history.
Can make the sequence of changes easier to follow.
Avoids unnecessary merge commits during routine feature development.
5.3 Team Policy for Integration
The team will adopt the following defaults:

Feature branch maintenance: Rebase private feature branches onto the latest main when a linear history is desirable.
Shared feature branches: Prefer merging main into the branch to avoid rewriting commits that teammates may already have fetched.
Pull request integration: Use squash merging for independent feature branches to keep main concise, unless preserving individual commits or explicit merge history is important.
Main branch: Never rebase or force-push main.
Conflict resolution: Resolve conflicts deliberately, inspect the final diff, and rerun relevant tests.
The repository should configure one preferred merge method so the team follows a predictable convention.

6. Handling Merge Conflicts
Merge conflicts occur when Git cannot automatically reconcile competing changes.

The developer integrating the changes is responsible for resolving conflicts correctly.

Recommended procedure:

Fetch the latest remote changes.
Merge or rebase the target branch into the feature branch.
Inspect each conflicted file.
Discuss ambiguous changes with the affected teammate.
Remove conflict markers and preserve the intended behaviour of both changes.
Run tests, linting, and builds as appropriate.
Commit the resolution if merging, or continue the rebase if rebasing.
Push the updated branch and rerun the required CI checks.
Developers must not resolve conflicts by blindly accepting one side's changes. When the correct result is unclear, they should consult the original authors.

7. Collaboration in a Distributed Team
This workflow supports distributed collaboration by making work visible, traceable, and independently reviewable.

7.1 Asynchronous Communication
Developers should use pull requests, issue trackers, and team communication channels to document progress and decisions. Work should not depend on everyone being online simultaneously.

PR descriptions and review comments should provide enough context for colleagues in other time zones to continue the work without waiting for a meeting.

7.2 Shared Ownership and Visibility
Pushing feature branches to a shared remote repository gives teammates access to ongoing work. Draft pull requests allow early feedback before a feature is complete.

Branch names, commits, issue references, and PR descriptions create a traceable record of why changes were made and who reviewed them.

7.3 Reducing Integration Conflicts
Developers should:

Keep branches short-lived.
Integrate changes from main regularly.
Divide large tasks into smaller, independent features.
Communicate when multiple people must modify the same files or modules.
Coordinate API, database, and shared-component changes before implementation.
Avoid leaving completed work unreviewed for long periods.
7.4 Review Responsibilities
Reviewers should acknowledge requests promptly and communicate expected review timelines. Authors should identify blocking questions clearly and avoid treating review feedback as personal criticism.

For handovers between time zones, developers should document what has changed, what remains unfinished, any known issues, and the next required action.

7.5 Access and Security
All developers should use individual repository accounts with appropriate permissions. Credentials, access tokens, passwords, and other secrets must never be committed to Git.

Protected branches and required CI checks should be enforced centrally rather than relying on every developer to remember the rules.

8. Emergency Fixes
For urgent production issues:

Create a hotfix/description branch from the relevant production baseline, normally main.
Implement the smallest safe correction.
Add or update regression tests.
Obtain expedited peer review and run required checks.
Merge the approved fix into main.
Deploy according to the team's release process.
Verify the fix in production and communicate the outcome.
If the fix was made against a different release branch, ensure it is also incorporated into main and any other affected maintained branches.
Emergency procedures should accelerate review, not eliminate essential safety checks.

9. Git Commands Reference
| Update local main | git switch main && git pull --ff-only origin main | | Create feature branch | git switch -c feature/my-feature | | Stage changes | git add . | | Commit changes | git commit -m "feat: describe change" | | Push branch | git push -u origin feature/my-feature | | Fetch remote changes | git fetch origin | | Merge main into feature | git merge origin/main | | Rebase feature onto main | git rebase origin/main | | Inspect status | git status | | Inspect changes | git diff | | List branches | git branch -a | | Delete merged local branch | git branch -d feature/my-feature |

10. Summary and Team Commitments
All team members are expected to follow these principles:

Develop features on separate branches.
Keep main stable and protected.
Submit changes through pull requests.
Require code review and successful automated checks.
Choose merge or rebase based on the branch's ownership and the team's agreed policy.
Resolve conflicts carefully and test the result.
Communicate progress and decisions clearly across time zones.
Keep branches focused, short-lived, and regularly integrated.
Never commit secrets or force-push to main.
Maintain an auditable record of changes, reviews, and releases.
Expected outcome: The team can develop multiple features in parallel, integrate changes predictably, reduce avoidable conflicts, and maintain a stable main branch. A shared, documented process also allows distributed developers to collaborate asynchronously while preserving code quality, accountability, and delivery consistency.

Task 3: Automate Code Quality and Deployment
1. CI/CD Integration
Objective
To ensure code quality and support rapid development, a Continuous Integration/Continuous Deployment (CI/CD) pipeline will be integrated with Git. Automated tests will run whenever a new feature branch is pushed to the remote repository.

Tools Used
Git: Version control and branch management.
GitHub: Remote repository hosting.
GitHub Actions: Automates testing and CI/CD workflows.
Automated Testing Framework: Runs the project's test suite.
Implementation Steps
Step 1: Create a Feature Branch
Create a new branch for the feature you want to develop.

git checkout -b feature/new-feature

Step 2: Configure GitHub Actions
Create a workflow file in the repository at .github/workflows/ci.yml.

name: CI - Automated Tests

on:
  push:
    branches:
      - 'feature/**'
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.x'

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ]; then
            pip install -r requirements.txt
          fi
          pip install pytest

      - name: Run automated tests
        run: pytest
Note: This example assumes the project uses Python and pytest. Replace the setup and test commands if the project uses another language or testing framework.

Step 3: Commit and Push Changes
Save the workflow file and push the feature branch to GitHub.

git add .github/workflows/ci.yml git commit -m "Add automated CI testing workflow" git push -u origin feature/new-feature

Step 4: Verify the Pipeline
Open the repository on GitHub.
Navigate to the Actions tab.
Select the CI - Automated Tests workflow.
Confirm that the workflow starts after the feature branch is pushed.
Check the job logs to verify that dependencies are installed and tests execute successfully.
Introduce a failing test in a temporary commit to confirm that the pipeline reports a failure.
Expected Results
Automated tests run whenever a feature branch matching feature/** is pushed.
Pull requests targeting main trigger the same test suite.
Test failures are reported in GitHub Actions, allowing developers to identify and fix problems early.
Successful test runs provide confidence in code quality before changes are merged.
Conclusion: GitHub Actions CI
Integrating GitHub Actions with Git automates the testing process and improves code reliability. Running tests on feature branches and pull requests helps detect defects early, supports faster development, and establishes a foundation for future automated deployment.

![Sreenshot-4](Screenshot-4.png)

GitHub Actions CI/CD Pipeline for Node.js on AWS
Purpose: Automate testing, code quality checks, and deployment of a Node.js application to an AWS staging environment using GitHub Actions.

Deployment target: Amazon ECS with Fargate and Amazon ECR.
Contents
1. Overview
2. Create the GitHub Actions Workflow
3. Configure Node.js Scripts
4. Configure GitHub Actions Variables
5. Secure AWS Authentication with OIDC
6. Verification Checklist
7. Expected Result
1. Overview
The pipeline follows this sequence:
1. A developer pushes code or opens a pull request.
2. GitHub Actions installs dependencies.
3. Unit tests run automatically.
4. ESLint, Prettier, and dependency vulnerability checks execute.
5. If all checks pass on main, the application is built and deployed to AWS.
6. A health check verifies the staging deployment.
2. Create the GitHub Actions Workflow
Create the workflow file at .github/workflows/staging.yml in your repository.

File: .github/workflows/staging.yml
name: Node.js CI/CD Pipeline

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

permissions:
  contents: read

concurrency:
  group: staging-${{ github.ref }}
  cancel-in-progress: true

jobs:
  quality:
    name: Test and Quality Checks
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm test

      - name: Check code quality
        run: npm run lint

      - name: Check formatting
        run: npm run format:check

      - name: Audit dependencies
        run: npm audit --audit-level=high

  deploy-staging:
    name: Deploy to AWS Staging
    needs: quality
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest

    environment:
      name: staging
      url: ${{ vars.STAGING_URL }}

    permissions:
      contents: read
      id-token: write

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v6
        with:
          role-to-assume: ${{ vars.AWS_ROLE_ARN }}
          aws-region: ${{ vars.AWS_REGION }}

      - name: Log in to Amazon ECR
        id: ecr
        uses: aws-actions/amazon-ecr-login@v2

      - name: Build and push Docker image
        id: image
        env:
          REGISTRY: ${{ steps.ecr.outputs.registry }}
          REPOSITORY: ${{ vars.ECR_REPOSITORY }}
          IMAGE_TAG: ${{ github.sha }}
        run: |
          set -euo pipefail
          IMAGE_URI="$REGISTRY/$REPOSITORY:$IMAGE_TAG"
          docker build --pull -t "$IMAGE_URI" .
          docker push "$IMAGE_URI"
          echo "uri=$IMAGE_URI" >> "$GITHUB_OUTPUT"

      - name: Render ECS task definition
        id: task-def
        uses: aws-actions/amazon-ecs-render-task-definition@v1
        with:
          task-definition: ecs-task-definition.json
          container-name: ${{ vars.CONTAINER_NAME }}
          image: ${{ steps.image.outputs.uri }}

      - name: Deploy to ECS
        uses: aws-actions/amazon-ecs-deploy-task-definition@v2
        with:
          task-definition: ${{ steps.task-def.outputs.task-definition }}
          service: ${{ vars.ECS_SERVICE }}
          cluster: ${{ vars.ECS_CLUSTER }}
          wait-for-service-stability: true

      - name: Verify staging health
        env:
          STAGING_URL: ${{ vars.STAGING_URL }}
        run: |
          set -euo pipefail
          test -n "$STAGING_URL"
          curl --fail --silent --show-error \
            --retry 12 \
            --retry-delay 5 \
            --retry-connrefused \
            --max-time 10 \
            "$STAGING_URL/health"
Prerequisites: This workflow assumes the repository contains a Dockerfile, an ECS task definition at ecs-task-definition.json, and a /health endpoint. Replace example action version tags with verified full commit SHAs for hardened production use.

3. Configure Node.js Scripts
Ensure package.json includes the scripts required by the pipeline.

Example package.json section
{
  "scripts": {
    "test": "jest --ci",
    "lint": "eslint .",
    "format:check": "prettier --check ."
  }
}
Install the development dependencies if necessary:
npm install --save-dev jest eslint prettier
Commit both package.json and package-lock.json.

If the project uses Vitest or another test framework, adjust the test command accordingly.
4. Configure GitHub Actions Variables
Navigate to GitHub → Settings → Secrets and variables → Actions → Variables and configure the following repository or environment variables:
Variable	Purpose
AWS_ROLE_ARN	ARN of the IAM role assumed by GitHub Actions through OIDC
AWS_REGION	AWS region containing the ECR repository and ECS service
ECR_REPOSITORY	Name of the Amazon ECR repository
CONTAINER_NAME	Container name in the ECS task definition to update
ECS_SERVICE	Name of the ECS staging service
ECS_CLUSTER	Name of the ECS cluster
STAGING_URL	Base URL for the staging application, including scheme (for example, https://staging.example.com)


Create a GitHub environment named staging under Settings → Environments. Restrict it to the main branch and configure reviewers if deployment approval is required.
5. Secure AWS Authentication with OIDC
Use GitHub's OpenID Connect (OIDC) integration to authenticate to AWS without storing long-lived access keys.
Setup steps
1. Create the GitHub OIDC identity provider in AWS IAM.
2. Create a dedicated IAM role for staging deployments.
3. Restrict the role's trust policy to the specific repository and staging environment.
4. Grant only the permissions required to publish images to the designated ECR repository and update the intended ECS service.
5. Set AWS_ROLE_ARN in GitHub Actions variables.
Example IAM trust policy
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::AWS_ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
          "token.actions.githubusercontent.com:sub": "repo:YOUR_ORG/YOUR_REPO:environment:staging"
        }
      }
    }
  ]
}
Replace AWS_ACCOUNT_ID, YOUR_ORG, and YOUR_REPO with the correct values.

Configure the role's permissions policy separately. Include appropriately restricted iam:PassRole permissions for the ECS task and execution roles.
6. Verification Checklist
Use this checklist before considering the pipeline ready:
- [ ] Unit tests run successfully on every pull request.
- [ ] ESLint and Prettier checks pass.
- [ ] Dependency vulnerability checks pass.
- [ ] Branch protection requires successful quality checks before merging.
- [ ] AWS authentication works through OIDC.
- [ ] Docker images are pushed to ECR using the Git commit SHA as the tag.
- [ ] ECS deploys the updated task definition and reaches a stable state.
- [ ] The staging health endpoint returns HTTP 2xx.
- [ ] Failed checks prevent deployment.
- [ ] A rollback procedure is documented and tested.
7. Expected Result
Once configured, every pull request targeting main triggers automated testing and code quality checks. After a successful merge, GitHub Actions builds the container image, publishes it to Amazon ECR, deploys it to the ECS staging service, and verifies application health.

![Screenshot-5](Screenshot-5.png)

# CI/CD Pipeline Guide

## 1. Overview

The Continuous Integration and Continuous Deployment (CI/CD) pipeline automates code validation and provides a controlled process for releasing application updates to production using **GitHub Actions**.

The pipeline validates code, runs tests, and builds the application before permitting a production deployment. If any required validation step fails, the production deployment must not proceed.

### Pipeline Objectives

- Automate code validation and testing.
- Maintain consistent build quality.
- Control access to production deployments.
- Require approval where necessary.
- Improve deployment reliability and traceability.

## 2. How the Pipeline Works

The CI/CD pipeline follows these stages:

1. **Pull request:** Install dependencies, run lint checks, execute tests, and build the application.
2. **Merge to `main`:** Repeat the validation process against the updated main branch.
3. **Manual production release:** An authorized developer starts the workflow from the `main` branch.
4. **Deployment protection:** GitHub environment rules can require approval before deployment begins.
5. **Post-deployment verification:** Confirm that deployment succeeded and application health checks pass.

> **Important:** The workflow must explicitly configure the deployment job to depend on successful validation. Production environment protection should also be configured where required.

## 3. How to Run Tests

### 3.1 Automatically Through GitHub Actions

1. Create a feature branch.
2. Implement your changes and add or update tests.
3. Push your branch to GitHub.
4. Open a pull request targeting `main`.
5. Review the GitHub Actions results.

The workflow starts automatically when the repository's configured triggers are satisfied.

### 3.2 Manually Through GitHub Actions

1. Open the repository on GitHub.
2. Select **Actions**.
3. Select **CI/CD Pipeline**.
4. Click **Run workflow**.
5. Select the `main` branch.
6. Start the workflow and monitor its progress.

Inspect the job logs if the workflow reports failed tests, lint errors, or build problems.

### 3.3 Run Tests Locally

Run the following commands from the project root to install dependencies, execute tests, and build the application.

```bash
npm ci
npm test
npm run build
```

If linting is configured, run the following command as well.

```bash
npm run lint
```

**Prerequisites:** The project must define the relevant scripts in `package.json`.

## 4. How to Deploy New Code

Follow this release procedure to move validated changes into production.

1. Create a feature branch.
2. Implement the change and add or update tests.
3. Commit and push your changes.
4. Open a pull request and resolve all failing checks.
5. Merge into `main` after the required reviews and checks pass.
6. Open GitHub Actions and manually run the CI/CD Pipeline using `main`.
7. Approve the production deployment if environment protection requires approval.
8. Confirm that deployment succeeded and verify application health.

### Deployment Requirements

Before the pipeline can deploy application code, configure the deployment job for the project's actual hosting provider.

The workflow should include:

- The appropriate deployment command or action.
- Required environment variables and deployment credentials.
- Least-privilege access to the hosting platform.
- Production environment protection rules.
- Post-deployment health checks.
- A documented rollback procedure.

> **Note:** A successful application build does not automatically deploy the application. The workflow must include a working deployment step.

## 5. Troubleshooting

| Problem | Recommended Action |
|---|---|
| Dependencies fail | Check `package.json`, the lockfile, and the Node.js version. Ensure the required files are committed. |
| Tests fail | Reproduce the failure locally, fix the code, and push a new commit. |
| Build fails | Review build logs, compiler errors, and required environment variables. |
| Deployment does not run | Confirm that the workflow was started on `main` and all required validation jobs succeeded. |
| Approval is pending | Ask an authorized environment reviewer to approve the deployment. |
| Application is unhealthy | Inspect deployment logs, investigate the failure, and follow the hosting platform's rollback procedure. |

## 6. Security and Maintenance

Follow these practices to keep the pipeline secure and maintainable.

- Never store credentials directly in source code.
- Use least-privilege repository and cloud permissions.
- Require code review and successful CI checks before merging.
- Restrict production deployments to authorized branches and users.
- Store deployment secrets in GitHub Actions secrets or an appropriate secrets manager.
- Keep dependencies and GitHub Actions updated.
- Review deployment logs regularly.
- Periodically test recovery and rollback procedures.

## 7. Operational Ownership

Repository maintainers are responsible for:

- Maintaining workflow configuration.
- Ensuring adequate test coverage.
- Managing deployment credentials and permissions.
- Configuring production environment protection.
- Maintaining release and rollback procedures.
- Reviewing pipeline failures and improving reliability.

---

# Task 4: Enforce Security Best Practices in Git

## 1. Security Objective

Secure the Git repository by implementing access controls, SSH key management, branch protection, signed commits, and sensitive data protection.

The objective is to ensure that only authorized contributors can modify critical code and that changes are reviewed, verifiable, and protected against accidental exposure of confidential information.

## 2. Set Up User Access Controls

Apply the principle of least privilege when managing repository access.

### Recommended Practices

- Grant users only the permissions required for their roles.
- Enable multi-factor authentication (MFA).
- Assign permissions using teams or groups.
- Remove access for users who no longer work on the project.
- Never share user accounts, passwords, or access tokens.

### Configure Access on GitHub

1. Open the repository or organization settings.
2. Navigate to the repository's collaborator settings or the organization's access management settings.
3. Add authorized team members.
4. Assign appropriate permissions.
5. Review access periodically and remove unnecessary permissions.

> **Security recommendation:** Prefer organization-managed teams and single sign-on policies where available.

## 3. Configure SSH Keys

SSH keys provide secure authentication between your local development environment and Git hosting services.

### 3.1 Generate an SSH Key

Generate an Ed25519 key pair using the following command.

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

Follow the prompts to choose a storage location and, preferably, set a passphrase.

### 3.2 Start the SSH Agent and Add the Key

Start the SSH agent.

```bash
eval "$(ssh-agent -s)"
```

Add your private key to the agent.

```bash
ssh-add ~/.ssh/id_ed25519
```

### 3.3 Display the Public Key

Display the public key so it can be registered with your Git hosting account.

```bash
cat ~/.ssh/id_ed25519.pub
```

Add the public key under your GitHub account's **Settings → SSH keys**.

> **Warning:** Never share or upload your private key. Only the public key should be registered with the hosting service.

### 3.4 Test SSH Authentication

Verify that SSH authentication works.

```bash
ssh -T git@github.com
```

Follow any first-connection prompts only after verifying the server's host key. A successful authentication message confirms that GitHub recognizes your SSH key.

### 3.5 Configure the Repository to Use SSH

Update the repository's remote URL.

```bash
git remote set-url origin git@github.com:ORG/REPOSITORY.git
```

Verify the configured remote.

```bash
git remote -v
```

Replace `ORG/REPOSITORY` with the actual organization and repository name.

## 4. Enable Branch Protection

Protect the `main` branch to prevent unauthorized changes and ensure that contributions meet the required quality and security standards.

### 4.1 Configure Branch Rules on GitHub

1. Open the repository's **Settings**.
2. Navigate to **Rules → Rulesets**, or the applicable branch protection settings.
3. Create a branch ruleset targeting `main`.
4. Enable the appropriate rules.

### Recommended Protection Rules

- Require pull requests before merging.
- Require at least one approving review.
- Dismiss stale approvals when new commits are pushed, where appropriate.
- Require status checks to pass.
- Require conversations to be resolved.
- Block force pushes.
- Prevent branch deletion.
- Require signed commits where supported.
- Require code owner approval for designated files.

Ensure that the required status checks correspond to the actual CI jobs configured in the repository.

### 4.2 Create a `CODEOWNERS` File

Create the following file in the repository:

`.github/CODEOWNERS`

Add the relevant ownership rules.

```text
/src/security/          @ORG/security-team
/.github/workflows/     @ORG/platform-team
/infra/                 @ORG/platform-team
```

Replace the example organization and team names with the actual GitHub teams.

Configure branch protection to require code owner approval. Ensure the `CODEOWNERS` file itself is covered by suitable review rules.

## 5. Enable Signed Commits

Signed commits help verify the authenticity of commits and provide additional confidence that changes were made by a recognized contributor.

### 5.1 Configure SSH Commit Signing

Configure Git to use SSH-based commit signing.

```bash
git config --global gpg.format ssh
```

Set the public signing key.

```bash
git config --global user.signingkey ~/.ssh/id_ed25519.pub
```

Enable commit signing by default.

```bash
git config --global commit.gpgsign true
```

Register the public key as a **signing key** in your Git hosting account if the platform requires separate registration.

> **Note:** SSH authentication keys and SSH signing keys serve different purposes in GitHub. Follow the platform's key registration requirements for each use.

### 5.2 Create a Signed Commit

Stage your changes.

```bash
git add .
```

Create a signed commit.

```bash
git commit -S -m "Apply security improvements"
```

### 5.3 Verify the Commit Signature

Inspect the latest commit's signature.

```bash
git log -1 --show-signature
```

Configure the hosting platform to require signed commits on protected branches where supported.

**Important:** Local Git settings only configure your local environment. Enforcing signed commits for all contributors requires repository-level rules.

## 6. Protect Sensitive Data

A `.gitignore` file helps prevent sensitive or environment-specific files from being added to Git accidentally.

### 6.1 Configure `.gitignore`

Create or update the `.gitignore` file with the following entries.

```gitignore
.env
.env.*
!.env.example
*.pem
*.key
secrets/
credentials.json
```

Review these patterns against the project's requirements. For example, `*.key` may exclude legitimate files if the repository intentionally contains non-secret key-related assets.

### 6.2 Additional Secret Protection Measures

- Never commit passwords, API keys, private keys, or production credentials.
- Enable secret scanning and push protection where available.
- Store credentials in a secrets manager or CI/CD secret store.
- Rotate credentials that have been accidentally exposed.
- Restrict access to production secrets.
- Use placeholder values in example configuration files.

> **Critical:** Adding a secret to `.gitignore` does not remove it from Git history. If a secret has already been committed, revoke or rotate it immediately and follow the repository's incident response procedure. History cleanup may also be necessary.

## 7. Verify Security Settings

Use the following checklist to confirm that the repository's security controls are configured.

### Repository Security Checklist

- [ ] User access permissions are configured appropriately.
- [ ] MFA is enabled where required.
- [ ] SSH keys are registered and tested.
- [ ] The `main` branch is protected.
- [ ] Pull requests require approval.
- [ ] CI checks must pass before merging.
- [ ] Code owner approval is required for designated files.
- [ ] Signed commits are verified and enforced where required.
- [ ] Secret scanning and push protection are enabled where available.
- [ ] Sensitive files are excluded using `.gitignore`.
- [ ] Production credentials are stored securely.
- [ ] Recovery and rollback procedures are documented.

## 8. Expected Outcome

After implementing these controls, the repository should provide the following security benefits:

- **Controlled access:** Only authorized users can access and modify the codebase.
- **Secure authentication:** SSH keys provide secure authentication to Git hosting services.
- **Protected branches:** Branch rules help prevent unauthorized direct changes.
- **Verified commits:** Signed commits improve commit authenticity verification.
- **Reduced secret exposure:** Secret scanning, secure storage, and `.gitignore` reduce the risk of exposing confidential information.
- **Controlled collaboration:** Reviews and required CI checks improve the integrity of critical code changes.

## Conclusion

A reliable CI/CD pipeline and a secure Git repository work together to support controlled software delivery.

Automated testing, protected production deployments, least-privilege access, SSH authentication, signed commits, branch protection, and secret management help reduce operational risk and improve the reliability of software releases.

**Implementation reminder:** Validate every workflow, repository rule, and security setting against your actual GitHub configuration. Documentation alone does not enable these controls; they must be configured and verified in the repository.  A

![Screenshot-6](Screenshot-6.png)

# Git Repository Security and Code Audit Guide

## 1. Ensure Code Changes Are Auditable

### 1.1 Objective

Implement a reliable auditing mechanism to ensure that all code modifications can be tracked, reviewed, verified, and attributed to authenticated users.

The auditing process should provide visibility into the complete software development lifecycle, from the initial code change through review, testing, approval, and production deployment.

### 1.2 Requirements

**1. Version Control**
- Use Git or an equivalent version control system to record all code changes.
- Maintain commit authors, timestamps, commit messages, and change history.
- Ensure that changes are associated with identifiable contributors.

**2. Code Reviews**
- Require peer review and approval before merging changes into protected branches.
- Ensure that reviewers are authorized to approve changes.
- Maintain records of review comments, approvals, and requested modifications.

**3. Audit Logs**
- Maintain secure records of code modifications, approvals, merges, and deployments.
- Enable repository and organization audit logging where available.
- Retain audit records according to organizational requirements.

**4. Automated Verification**
- Run automated tests before merging and deployment.
- Perform code quality checks and security scans.
- Validate dependencies and identify known vulnerabilities.
- Prevent deployment when mandatory verification checks fail.

**5. Access Control**
- Restrict repository access to authorized users.
- Enforce appropriate authentication and authorization.
- Apply least-privilege permissions.
- Review access permissions periodically.

**6. Traceability**
- Link code changes to relevant requirements, tasks, issues, and releases.
- Reference task or issue identifiers in pull requests and commit messages.
- Maintain traceability between commits, reviews, testing results, and deployments.

**7. Log Protection**
- Prevent unauthorized modification or deletion of audit records.
- Restrict access to audit logs.
- Use centralized or externally stored logs where appropriate.
- Apply suitable retention and backup policies.

### 1.3 Acceptance Criteria

The auditing mechanism must satisfy the following criteria:

- [ ] Every code change is attributable to an authenticated user.
- [ ] All changes are recorded with timestamps and relevant metadata.
- [ ] Production changes require documented review and approval.
- [ ] Audit logs are protected against unauthorized tampering.
- [ ] Changes can be traced from commit through review, testing, and deployment.
- [ ] Historical changes and associated approvals can be retrieved and verified.

### 1.4 Expected Outcome

A reliable and verifiable audit trail that ensures accountability, code integrity, transparency, and compliance with organizational security requirements.

---

# Deliverable: Git Repository Security Best Practices

## 2. Objective

Implement security best practices within the Git repository to prevent unauthorized access, protect code integrity, and ensure that all code changes can be tracked, reviewed, and verified.

The security implementation focuses on access controls, branch protection, commit signing, audit logging, and continuous security monitoring.

## 3. Access Controls

Restrict repository access to authorized users and ensure that permissions are assigned according to individual responsibilities.

### 3.1 Security Requirements

- Restrict repository access to authorized users.
- Apply the principle of least privilege by assigning appropriate read, write, and administrative permissions.
- Limit administrative access to trusted repository maintainers.
- Enable multi-factor authentication (MFA) where supported.
- Review user permissions regularly.
- Revoke access when it is no longer required.
- Avoid sharing accounts, passwords, and access tokens.

### 3.2 Configuration on GitHub

1. Open the repository on GitHub.
2. Navigate to **Settings → Collaborators** or the relevant organization access settings.
3. Review existing users and teams.
4. Add authorized contributors.
5. Assign permissions according to their roles.
6. Remove unnecessary or outdated access.

<blockquote>
**Security Benefit:** Access controls reduce the risk of unauthorized modifications and help protect the codebase from compromised accounts.
</blockquote>

## 4. Branch Protection

Configure branch protection rules for critical branches, such as `main` and `develop`.

### 4.1 Recommended Protection Rules

- Require pull requests before merging changes.
- Require at least one approval from an authorized reviewer.
- Require automated tests and status checks to pass before merging.
- Restrict direct pushes and force pushes to protected branches.
- Prevent accidental deletion of protected branches.
- Require conversations and review comments to be resolved before merging, where supported.
- Require code owner approval for designated files where appropriate.

### 4.2 Configuration on GitHub

1. Open the repository's **Settings**.
2. Navigate to **Rules → Rulesets** or the applicable branch protection settings.
3. Create a ruleset targeting `main` and `develop`.
4. Enable the required pull request and review rules.
5. Configure mandatory CI/CD status checks.
6. Restrict bypass permissions to authorized administrators where necessary.
7. Save the configuration and verify that the rules are enforced.

<blockquote>
**Security Benefit:** Branch protection ensures that code changes are reviewed and tested before integration, reducing the risk of introducing vulnerabilities or breaking existing functionality.
</blockquote>

## 5. Commit Signing

Configure Git to sign commits using GPG or SSH signing keys.

Commit signing provides a mechanism for verifying the authenticity of commits and helps establish confidence in the integrity of submitted changes.

### 5.1 Configure SSH Commit Signing

Configure Git to use SSH-based commit signing.

```bash
git config --global gpg.format ssh
```

Set the public signing key.

```bash
git config --global user.signingkey ~/.ssh/id_ed25519.pub
```

Enable automatic commit signing.

```bash
git config --global commit.gpgsign true
```

### 5.2 Create a Signed Commit

Create a signed commit using the following command.

```bash
git commit -S -m "Implement security improvements"
```

### 5.3 Verify a Commit Signature

Verify the latest commit's signature.

```bash
git verify-commit HEAD
```

### 5.4 Additional Security Measures

- Register the appropriate signing key with the Git hosting platform.
- Verify commit signatures before accepting changes into protected branches.
- Enable signed-commit enforcement where supported.
- Protect private signing keys using secure storage and passphrases.
- Revoke compromised signing keys immediately.
- Ensure that contributors understand the signing requirements.

<blockquote>
**Security Benefit:** Commit signing helps verify the authenticity and integrity of commits, making unauthorized alterations easier to detect.
</blockquote>

## 6. Audit and Monitoring

Establish an auditing and monitoring process to maintain visibility over repository activity and identify suspicious or unauthorized changes.

### 6.1 Audit Requirements

- Maintain records of code changes, pull requests, approvals, and deployments.
- Use Git history to track who made changes and when.
- Enable repository and organization audit logs where available.
- Run automated tests, dependency checks, and security scans through CI/CD pipelines.
- Periodically review repository permissions and security configurations.
- Protect audit logs against unauthorized modification or deletion.
- Retain historical records according to organizational policies.

### 6.2 Review Git History

Use Git commands to inspect repository activity.

Display the commit history:

```bash
git log
```

Display a concise commit history:

```bash
git log --oneline
```

Display detailed information about the latest commit:

```bash
git show HEAD
```

Display the latest commit's signature information:

```bash
git log -1 --show-signature
```

### 6.3 Monitoring and Verification

Repository maintainers should periodically:

1. Review repository access and permissions.
2. Inspect pull request approvals and merge history.
3. Review failed CI/CD checks.
4. Investigate suspicious repository activity.
5. Verify commit signatures.
6. Review audit log retention and access controls.

<blockquote>
**Security Benefit:** Audit logging provides traceability and supports investigations into suspicious activity or unauthorized changes.
</blockquote>

## 7. Verification Checklist

Use the following checklist to confirm that the repository security controls have been configured.

### Repository Security Verification

**Access Management**
- [ ] Repository access is restricted to authorized users.
- [ ] Administrative privileges are limited to trusted maintainers.
- [ ] MFA is enabled where supported.
- [ ] User permissions are reviewed periodically.

**Branch Protection**
- [ ] Branch protection rules are enabled for critical branches.
- [ ] Pull requests and required code reviews are enforced.
- [ ] Automated status checks must pass before merging.
- [ ] Direct pushes and force pushes are restricted.
- [ ] Protected branches cannot be deleted by unauthorized users.

**Commit Integrity**
- [ ] Commit signing is configured for contributors.
- [ ] Signing keys are registered with the hosting platform.
- [ ] Signed commits are verified.
- [ ] Signed-commit enforcement is enabled where supported.

**Audit and Monitoring**
- [ ] Audit logs are available and protected.
- [ ] Code changes can be traced to authenticated contributors.
- [ ] Pull request approvals and merge records are retained.
- [ ] CI/CD security checks are configured.
- [ ] Security settings are reviewed periodically.

## 8. Expected Outcome

Implementing these controls provides multiple layers of protection for the Git repository.

| Security Control | Expected Benefit |
|---|---|
| Access controls | Restrict who can access and modify the codebase. |
| Branch protection | Ensure changes are reviewed and validated. |
| Commit signing | Provide a mechanism for verifying commit authenticity. |
| Audit logging | Maintain a traceable record of repository activity. |
| Automated verification | Identify code quality issues and security vulnerabilities. |
| Access reviews | Reduce the risk of unauthorized access. |

Together, these practices improve accountability, reduce the risk of unauthorized modifications, and establish a reliable audit trail for code changes.

## 9. Evidence of Implementation

Provide the following evidence to demonstrate that the security requirements have been implemented and verified.

| Evidence | Description |
|---|---|
| Repository permissions | Screenshots or exported settings showing authorized users and assigned permissions. |
| Branch protection | Evidence of enabled branch protection rules and required reviews. |
| Git configuration | Configuration output demonstrating commit-signing settings. |
| Signed commits | Examples of signed commits with successful signature verification. |
| Branch protection testing | Evidence that unapproved changes cannot bypass protection rules. |
| Audit logs | Relevant repository activity logs showing code changes, approvals, and merges. |
| CI/CD security reports | Evidence of successful automated testing and security checks. |

### 9.1 Example Git Configuration Evidence

The following commands can be used to demonstrate the configured commit-signing settings.

```bash
git config --global --get gpg.format
git config --global --get user.signingkey
git config --global --get commit.gpgsign
```

Expected configuration values:

```text
ssh
~/.ssh/id_ed25519.pub
true
```

The displayed signing-key path may vary depending on the contributor's local configuration.

### 9.2 Example Commit Verification Evidence

Run the following command to verify a commit signature.

```bash
git verify-commit HEAD
```

Retain the verification output alongside the relevant commit identifier as implementation evidence.

## 10. Conclusion

Implementing Git repository security best practices establishes a controlled and auditable development environment.

Access controls restrict unauthorized repository access, branch protection ensures that changes undergo appropriate reviews, and commit signing provides a mechanism for verifying commit authenticity.

Audit logging and automated security checks further improve traceability, accountability, and code integrity.

**Final Implementation Note:** All security configurations must be applied and tested within the actual repository. This document defines the required security practices and evidence expectations but does not, by itself, confirm that the controls have been implemented.

![Sreenshot-7](Screenshot-7.png)

# Task 5: Handle a Real-World Git Challenge

## 1. Scenario

Two developers were working on separate branches and accidentally introduced conflicting changes into the `main` branch after a failed merge. This resulted in inconsistencies in the codebase and potentially broke the application.

### 1.1 Objective

Resolve the merge conflict, restore code integrity, verify the solution, and identify preventive measures to avoid similar issues in the future.

The resolution process involves inspecting the repository, identifying conflicting files, agreeing on the correct implementation, completing or reversing the failed merge, and testing the resulting code.

---

## 2. Step-by-Step Merge Conflict Resolution

### Step 1: Check the Git Repository Status

First, inspect the repository to determine whether a merge is still in progress and identify the affected branches and files.

Run the following commands:

```bash
git status
git branch
git log --oneline --graph --all -15
```

**Command explanations:**

- `git status` – Displays the current repository state and identifies unresolved conflicts.
- `git branch` – Lists available local branches.
- `git log` – Displays recent commits and branch history in a graphical format.

**Expected Result:** The repository status and commit history should provide enough information to determine whether the merge is still in progress and which files require attention.

### Step 2: Identify the Conflicting Files

Run the following commands to inspect the differences and identify unresolved conflicts.

```bash
git diff
git diff --name-only --diff-filter=U
```

**Command explanations:**

- `git diff` – Displays differences between the working directory and the index.
- `git diff --name-only --diff-filter=U` – Lists files with unresolved merge conflicts.

#### 2.1 Inspect the Conflicting Code

Open the affected files and search for Git conflict markers.

A typical conflict looks like this:

```javascript
<<<<<<< HEAD
function calculateTotal(price) {
    return price + 20;
}
=======
function calculateTotal(price) {
    return price * 1.2;
}
>>>>>>> feature-branch
```

In this scenario, the two developers implemented different calculations:

- **Developer A:** Adds a fixed 20 units to the original price.
- **Developer B:** Applies a 20% increase to the original price.

The correct implementation must be determined by reviewing the project requirements.

**Important:** Do not automatically select one developer's changes. Confirm the intended functionality before resolving the conflict.

### Step 3: Resolve the Merge Conflict

Discuss the intended functionality with both developers and modify the affected file accordingly.

For example, if the requirement is to apply a 20% increase, the corrected implementation should be:

```javascript
function calculateTotal(price) {
    return price * 1.2;
}
```

After making the changes:

1. Remove all Git conflict markers.
2. Preserve any required functionality from both developers' changes.
3. Save the corrected file.
4. Review the final implementation.

#### 3.1 Stage the Resolved File

Stage the corrected file using:

```bash
git add path/to/conflicted-file.js
```

Repeat this process for every conflicting file.

Verify that the conflicts have been resolved:

```bash
git status
```

**Expected Result:** All resolved files should be staged, and Git should no longer report unresolved merge conflicts.

### Step 4: Complete or Abort the Failed Merge

Once all conflicts have been resolved, decide whether to complete the merge or abandon it.

#### Option A: Complete the Merge

If the merge is still in progress and all conflicts have been resolved, continue the merge:

```bash
git merge --continue
```

Git will complete the merge, potentially opening an editor to confirm the merge commit message.

#### Option B: Abort the Merge

If the merge must be abandoned, use:

```bash
git merge --abort
```

This attempts to restore the repository to its pre-merge state.

> **Warning:** Preserve any uncommitted work before aborting a merge. The abort operation may not be able to reconstruct changes that were made while the merge was in progress.

#### Option C: Revert an Already Committed Merge

If the failed merge has already been committed and pushed to `main`, inspect the commit history before deciding how to recover.

A merge commit can be reverted using:

```bash
git revert -m 1 MERGE_COMMIT_HASH
```

Replace `MERGE_COMMIT_HASH` with the actual merge commit identifier.

The `-m 1` option identifies the first parent as the mainline whose changes should be retained.

**Important considerations:**

- Confirm that the first parent represents the intended mainline.
- Review the changes that will be reverted.
- Coordinate with the development team before recovering a shared branch.
- Avoid resetting or force-pushing shared branch history without explicit team agreement.

### Step 5: Test the Resolved Code

After resolving the conflicts, verify that the code is correct and that no unintended changes have been introduced.

#### 5.1 Check for Whitespace Errors

Run:

```bash
git diff --check
```

This identifies whitespace errors and conflict-marker issues in the relevant diff.

Check the repository status:

```bash
git status
```

#### 5.2 Run Automated Tests

For a Node.js project, run the following commands if the corresponding scripts are configured.

Install dependencies:

```bash
npm ci
```

Execute the test suite:

```bash
npm test
```

Build the application:

```bash
npm run build
```

These commands install dependencies, run automated tests, and build the application.

#### 5.3 Verify the Corrected Function

Test the corrected calculation using representative inputs.

```javascript
console.assert(calculateTotal(100) === 120);
console.assert(calculateTotal(50) === 60);
```

These assertions assume that the agreed requirement is to apply a 20% increase.

Additional tests should cover relevant edge cases, such as zero values, decimal values, and invalid inputs, according to the application's requirements.

**Expected Result:** All relevant tests should pass, and the application should build successfully.

### Step 6: Commit and Push the Fix

After resolving the conflicts and verifying the code, prepare the changes for submission.

#### 6.1 Review the Changes

Inspect the repository before staging files:

```bash
git status
git diff
```

Ensure that unrelated files, temporary files, and sensitive information are not included.

#### 6.2 Stage and Commit the Changes

Stage the resolved files:

```bash
git add .
```

Create a commit describing the correction:

```bash
git commit -m "fix: resolve merge conflicts"
```

> **Best Practice:** Stage only the intended files where possible. Review the staged changes before committing to avoid accidentally including unrelated modifications.

#### 6.3 Push the Changes

If the repository permits direct pushes to `main`, push the changes using:

```bash
git push origin main
```

Otherwise, submit the fix through a pull request and follow the repository's review and approval process.

#### 6.4 Verify the Commit History

After pushing or merging the changes, inspect the recent commit history:

```bash
git log --oneline --graph -10
```

Confirm that the corrective commit is recorded and that the branch history is consistent.

**Expected Result:** The resolved changes should be committed, reviewed where required, and integrated into the appropriate branch.

---

## 3. Preventive Measures

The development team can reduce the likelihood of similar problems by adopting the following practices.

| Preventive Measure | Description |
|---|---|
| Feature branches | Keep unfinished development work separate from `main`. |
| Pull requests | Require changes to be reviewed before merging. |
| Branch protection | Prevent unauthorized direct pushes and enforce required checks. |
| Automated testing | Run tests and builds before merging changes. |
| Frequent synchronization | Keep feature branches up to date with `main`. |
| Small commits | Make changes easier to review, test, and revert. |
| Team communication | Coordinate when developers modify the same files. |
| Continuous integration | Automatically validate proposed changes before integration. |

### 3.1 Recommended Development Practices

To improve collaboration and reduce integration problems:

- Encourage developers to commit and push changes regularly.
- Avoid keeping feature branches inactive for extended periods.
- Communicate when multiple developers are modifying the same components.
- Resolve conflicts as early as possible.
- Require successful CI/CD checks before merging.
- Maintain clear commit messages and pull request descriptions.

---

## 4. Recommended Git Workflow

Adopt a structured feature-branch workflow to ensure that changes are developed, reviewed, and tested before integration into `main`.

### Step 1: Create a Feature Branch

Start by switching to the latest `main` branch and updating it.

```bash
git switch main
git pull --ff-only origin main
```

Create a new feature branch:

```bash
git switch -c feature/new-functionality
```

### Step 2: Develop and Commit Changes

Implement the required functionality and commit changes to the feature branch.

```bash
git add .
git commit -m "feat: implement new functionality"
```

### Step 3: Synchronize with the Latest Main Branch

Before submitting a pull request, retrieve the latest remote changes.

```bash
git fetch origin
```

Merge the latest `main` branch into the feature branch:

```bash
git merge origin/main
```

If conflicts occur:

1. Identify the affected files.
2. Review the conflicting changes.
3. Agree on the correct implementation.
4. Resolve and stage the affected files.
5. Complete the merge.
6. Run the relevant tests.

### Step 4: Commit and Push the Resolved Changes

Stage the resolved files:

```bash
git add .
```

Commit the changes:

```bash
git commit -m "fix: resolve merge conflicts"
```

Push the feature branch:

```bash
git push -u origin feature/new-functionality
```

### Step 5: Open a Pull Request

On GitHub:

1. Open the repository.
2. Navigate to **Pull requests**.
3. Select **New pull request**.
4. Select `main` as the base branch.
5. Select `feature/new-functionality` as the compare branch.
6. Review the proposed changes.
7. Submit the pull request.

### Step 6: Review and Merge

Before merging:

- Obtain the required reviewer approvals.
- Confirm that all automated status checks pass.
- Resolve outstanding review comments.
- Verify that the feature works as expected.
- Merge the pull request using the repository's approved merge strategy.

**Expected Result:** Only reviewed and validated changes are integrated into `main`.

---

## 5. Merge Conflict Resolution Outcome

After completing this task, the team should have achieved the following results:

- [ ] Resolved all merge conflicts without leaving conflict markers in the code.
- [ ] Preserved the intended functionality of the developers' changes.
- [ ] Verified the code using automated tests and build checks.
- [ ] Confirmed that the repository contains no unresolved merge conflicts.
- [ ] Restored a consistent and reliable codebase.
- [ ] Recorded the corrective changes in Git history.
- [ ] Established preventive practices to reduce future merge conflicts.
- [ ] Confirmed that the corrected changes follow the repository's review and approval requirements.

## 6. Conclusion: Merge Conflict Resolution

Git merge conflicts are a common challenge in collaborative software development. They can be resolved by inspecting the repository state, identifying conflicting changes, agreeing on the correct implementation, and testing the resulting code.

In this scenario, the conflicting calculations were reviewed against the project requirements, and the appropriate implementation was retained. The resulting changes were then verified using Git inspection commands, automated tests, and application build checks.

To prevent similar issues in the future, the development team should adopt feature branches, pull requests, code reviews, branch protection, and automated testing.

**Final Outcome:** These practices help maintain code integrity, improve collaboration, reduce integration risks, and ensure that only reviewed and verified changes are integrated into the `main` branch.
