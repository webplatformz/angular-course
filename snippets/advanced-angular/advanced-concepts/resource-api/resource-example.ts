import { computed, signal } from '@angular/core';

const firstName = signal('');
const lastName = signal('');

// combine criteria in computed signal
const personSearchCriteria = computed(() => {
  return { firstname: firstName(), lastname: lastName() };
});

// define resource with request (=search criteria) and loader
// every time the request (criteria) changes, the loader is triggered
const personResource = resource({
  request: personSearchCriteria,
  loader: (param) => {
    return this.personService.findPerson(param.request)
});

const foundPersons= computed(() => this.personResource.value() ?? [])
