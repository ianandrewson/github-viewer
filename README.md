# LAB: Github viewer

Use the github api to view a users repos, PRs, and issues.

See documentation here: https://developer.github.com/v3/

## Requirements

### Input username

A user should be able to enter a github username. You will use this username
to search the github api.

### Display user info

Use the `https://api.github.com/users/:username` endpoint to get information
about the user. Display the users name, follower count, following count,
and a link to their github profile.

### Display all repos

Display all repos by the user. You can get this information from the
github api.

### STRETCH: Display all PRs on all user repos

Display **ALL** PRs on all user repos.

Add ability to filter to display only open or closed PRs. (use a selector here).

### STRETCH: Display all issues on all user repos

Display **ALL** issues on all user repos.

Add ability to filter to display only open or closed issues. (use a selector here).

## Rubric

* Components: 5 points
* Snapshot tests: 2 points
* reducer, action, selector: 5 points
* reducer, action, selector tests: 5 points
* services: 3 points

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
