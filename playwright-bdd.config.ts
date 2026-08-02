import { defineBddConfig } from 'playwright-bdd';

export default defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: [
    'tests/steps/**/*.ts',
    'src/fixtures/fixtures.ts'
  ],
  //importTestFrom: 'src/fixtures/fixtures.ts'
});