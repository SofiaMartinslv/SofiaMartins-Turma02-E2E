# Playwright E2E

## GitHub Actions

[![Build and Tests](https://github.com/SofiaMartinslv/SofiaMartins-Turma02-E2E/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/SofiaMartinslv/SofiaMartins-Turma02-E2E/actions/workflows/node.js.yml)

## Getting Started

In order to execute this project you must follow the steps below:

1. Install [Node JS](https://nodejs.org/) (version >= 20.x)
1. Run `npm i --save-dev` to install all the project dependencies
1. Run `npx playwright install` to install the browsers used by Playwright
1. Run `npm run ci` to execute the entire test suite
1. Run `npm run show-report` to visualize the reports

All execution artifacts can be found in `./artifacts`, if you want to remove these files run `npm run clean`.

## Project Structure
</br>
<ul>
    <li>Scenarios: Test scenario mapping</li>
    <li>Support: Project structure files
        <ul>
            <li>Elements: Mapping the elements of each screen</li>
            <li>Fixtures: Data configuration files</li>
            <li>Pages: Logic used to perform actions in tests</li>
        </ul>
    </li>
</ul>
